//1. Input select
//2 Key up/down
var inputValue;
var inputElement=
document.querySelector('input[type="text"]');
inputElement.onchange=function(e){
    //onchange phải có sự thay đổi(click chuột)
    // console.log(e.target.value);// lấy đc giá trị của input

    inputValue=e.target.value// lấy value của thẻ input lưu vào một biến
}
//oninput lấy trực tiếp khi gõ
inputElement.oninput=function(e){
    console.log(e.target.value);
}
// onkeydown
//phân biệt các nút trên bàn phím
inputElement.onkeydown= function(e){
    switch(e.which){
        case 27:
            console.log('Exit');
            break;
        case 13:
            // click enter and see what happen
            console.log("Enter");
            break;
    }
}
//checkbox
var checkboxElement=document.querySelector('input[type="checkbox"]');
checkboxElement.onchange=function(e){
    console.log(e.target.checked);
}
//select
var selectElement= document.querySelector('select');
selectElement.onchange=function(e){
    console.log(e.target.value);
}
//phân biệt onkeyup--- onkeydown

// 1.preventDefault
// 2. stopPropagation
console.log('preventDefault');

var aElements= document.getElementsByTagName('a');
console.log(aElements);
for(var i=0;i<aElements.length;i++){
    aElements[i].onclick=function(event){
        
        // Khi bấm vào khác link gg thì sẽ không chuyển trang
        if(!event.target.href.startsWith('https://www.apple.com/store')){
            event.preventDefault();
        }
    }
}
// ví dụ thêm
document.querySelector('ul').onmousedown=
function(e){
    e.preventDefault();
}
