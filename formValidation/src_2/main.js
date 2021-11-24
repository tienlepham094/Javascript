const form=document.querySelector('.form')
const userName=document.querySelector('.username');
const email=document.querySelector('.email');
const password=document.querySelector('.password');
const passwordCheck=document.querySelector('.password2');
const submitBtn=document.querySelector('.submit');
const eyeBtns= document.querySelectorAll('.fa-eye')



form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputs();
    if(Status1&&Status2&&Status3&&Status4){
    console.log("hahaha")
    }else {
        console.log("Wrong")
    }
})
var Status1,Status2,Status3,Status4;

function checkInputs(){
    //get the values from the input
    const userNameValue=userName.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const passwordCheckValue=passwordCheck.value.trim();
    //check username
    if(userNameValue===''){
        setErrorFor(userName,'Username cannot be blank');
         Status1=false;
    }else{
        setSuccessFor(userName);
         Status1=true;
    }
    //check email
    if(emailValue===''){
        setErrorFor(email,'Email cannot be blank');
        Status2=false;
    }else if(!isEmail(emailValue)){
        setErrorFor(email,'Email is not valid')
        Status2=false
    }else{
        setSuccessFor(email)
        Status2=true;
    }
    //check password
    if(passwordValue===''){
        setErrorFor(password,'Password cannot be blank');
        Status3=false;
    }else{
        setSuccessFor(password);
        Status3=true;
    }
    // check password 2
    if(passwordCheckValue===''){
        setErrorFor(passwordCheck,'Password cannot be blank')
        Status4=false;
    }else if(passwordCheckValue!==passwordValue){
        setErrorFor(passwordCheck,'Passwords do not match');
        Status4=false;
    }else {
        setSuccessFor(passwordCheck);
        Status4=true;
    }
}

function setErrorFor(input, message){
    const formControl=input.parentElement;// .form-control
    const small=formControl.querySelector('small');
// add error message inside small
    small.innerText=message;
//add error class
    // formControl.classList.add('error')
    // dùng classList sẽ bị lỗi khi điều kiện ????
    formControl.className=('form-control error');
    

    
}
function setSuccessFor(input){
    const formControl=input.parentElement;
    // formControl.classList.add('success');
    formControl.className=('form-control success');
}
//test email
function isEmail(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
//show password

eyeBtns.forEach(eyeBtn=>{
// console.log(eyeBtn)
eyeBtn.addEventListener('click',()=>{
var passwordNode= eyeBtn.nextElementSibling;
showPassword(passwordNode);
})
})

var state=false;
function showPassword(passwordNode){
    if(passwordNode==null) return ;
    if(state){
        passwordNode.setAttribute("type","password");
        state=false;   
    }else {
        passwordNode.setAttribute('type','text');
        state=true;
        
    }
}