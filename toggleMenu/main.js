const toggleBtn= document.querySelector('.btn-toggle-nav')
let getSidebar= document.querySelector('.nav-sidebar');
// let getSidebarUl=document.querySelector('.nav-sidebar ul')
// let getSidebarTittle= document.querySelector('.nav-sidebar span');
// let getSidebarLinks= document.querySelectorAll('.nav-sidebar a');
// let toggleNavStatus= false;


toggleBtn.addEventListener('click',()=>{
        getSidebar.classList.toggle('menu-active');
});


// const toggleNav= function(){
// if(toggleNavStatus){
//     getSidebarUl.style.visibility='hidden';
//     getSidebar.style.width='58px';
//     toggleNavStatus=false;
// } 
// else{
//     getSidebarUl.style.visibility='visible';
//     getSidebar.style.width='272px';
//     toggleNavStatus=true;
// }

// }


/*
*Close menu when clicking outside */
document.addEventListener('click',(event)=>{
if(event.target!== getSidebar&&!getSidebar.contains(event.target)
&&event.target!==toggleBtn){
getSidebar.classList.remove('menu-active');
}
})