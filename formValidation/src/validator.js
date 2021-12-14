// *object
/*
*Validator là một function, nhận một object */

function Validator(options){

//*Lấy Element của form
var formElement= document.querySelector(options.form);
var selectorRules={};
//*fix submit
if(formElement){
    formElement.onsubmit=function(e){
        e.preventDefault();
        var isFormValid=true;
        // lặp qua từng rule và validate
        options.rules.forEach(function(rule){
            var inputElement=formElement.querySelector(rule.selector);
            var isValid=validate(inputElement,rule)
            if(!isValid){
                isFormValid=false;
            }
        });
        
        if(isFormValid){
            if(typeof options.onSubmit==='function'){
                var enableInputs=formElement.querySelectorAll('[name]');
                //NodeList không thể sử dụng những phương thức của arr
                var formValues= Array.from(enableInputs).reduce(function(values,input){
                    return (values[input.name]=input.value) && values
                },{})
                options.onSubmit(formValues)
            }
        }
    }
}
//*Hàm thực hiện validate
function validate(inputElement,rule){
    
    var errorElement=inputElement.parentElement.querySelector(options.errorSelector);
    var errorMessage;
    //Lấy ra các rules của selector
    var rules= selectorRules[rule.selector];
    
    for(var i=0;i<rules.length;i++){
        errorMessage=rules[i](inputElement.value);
        if(errorMessage) break;
    }

    if(errorMessage){
       errorElement.innerText=errorMessage;
       inputElement.parentElement.classList.add('invalid');
    }else{
       errorElement.innerText='';
       inputElement.parentElement.classList.remove('invalid');
    }
    return !errorMessage;
}
if(formElement){
    options.rules.forEach(function(rule){

        // lấy inputElement tương ứng cho từng rule
        var inputElement= formElement.querySelector(rule.selector);
        //Lưu lại các rules cho mỗi input
        if(Array.isArray(selectorRules[rule.selector])){
            selectorRules[rule.selector].push(rule.test)
        }else
        {
            selectorRules[rule.selector]=[rule.test];
        }
        //selectorRules[rule.selector] gọi trực tiếp đến hàm test
     if(inputElement){
         //Xử lí trường hợp blur khỏi input
         inputElement.onblur=function(){
         //value: inputElement.value
         //test func: rule.test
         validate(inputElement,rule);
         }
         //Xử lí mỗi khi người dùng nhập vào input
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