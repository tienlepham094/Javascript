// *object


function Validator(options){

//*Lấy Element của form
var formElement= document.querySelector(options.form);


//*Hàm thực hiện validate
function validate(inputElement,rule){
    
    var errorElement=inputElement.parentElement.querySelector(options.errorSelector);
    var errorMessage=rule.test(inputElement.value);
    if(errorMessage){
       errorElement.innerText=errorMessage;
       inputElement.parentElement.classList.add('invalid');
    }else{
       errorElement.innerText='';
       inputElement.parentElement.classList.remove('invalid');
    }
}



if(formElement){
    options.rules.forEach(function(rule){
        var inputElement= formElement.querySelector(rule.selector);
        
     if(inputElement){
         //*Xử lí trường hợp blur khỏi input
         inputElement.onblur=function(){
         //value: inputElement.value
         //test func: rule.test
         validate(inputElement,rule);
         }
         //*Xử lí mỗi khi người dùng nhập vào input
         inputElement.oninput=function(){
            var errorElement=inputElement.parentElement.querySelector(options.errorSelector);
            errorElement.innerText='';
            inputElement.parentElement.classList.remove('invalid');
         }
         
     }
})
}
}


//* Rules
//Nguyên tắc của các rules
/**
 * 
 * 
 * Khi có lỗi => trả ra mess lỗi
 * Khi hợp lệ => không trả ra gì(undefined)
 */
Validator.isRequired= function(selector){
    return {
        selector:selector,
        test: function(value){
        return value.trim()  ? undefined: 'Vui lòng nhập trường này!';
        }
    };

}
Validator.isEmail= function(selector){
    return {
        selector:selector,
        test: function(value){
            var regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value)? undefined: 'Đây không phải là Email!';
        }
    };
}
Validator.minLength= function(selector,min){
    return {
        selector:selector,
        test: function(value){
            return value.length>=min? undefined: `Vui lòng nhập tối thiểu ${min} kí tự`;
        }
    };

}
Validator.isConfirmed=function(selector,getConfirmValue,message){
    return {
        selector:selector,
        test: function (value){
        return value===getConfirmValue()? undefined :message||'Giá trị nhập vào không chính xác'
        }
    }
}