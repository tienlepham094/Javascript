//DOM Attribute
var headingElement = 
document.querySelector('h1');

console.log(headingElement);
headingElement.title="heading";
// add title vào thẻ h1
// trong source code sẽ không có

//thêm được attribute vào các element
headingElement.setAttribute('id','heading');
headingElement.setAttribute('href','heading');
console.log(headingElement.getAttribute('class'));
// InnerText vs textcontent
console.log(headingElement.innerText);
console.log(headingElement.textContent); //Lấy cả ndung space
// headingElement.innerText='New heading';// thay đổi thành New heading
// InnerHTML vs OuterHTML
headingElement.innerHTML='<h1>New Heading</h1>';
console.log(headingElement.innerHTML);
console.log(headingElement.outerHTML);
