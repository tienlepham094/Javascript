/**
 * Callback Function
 */
const posts=[
    {tittle:'Post One',body:'This is post one'},
    {tittle:'Post Two',body:'This is post two' }
];
function getPosts(){
    setTimeout(()=>{
     let output='';
     posts.forEach((post,index)=>{
         output+=`<li>${post.tittle}</li>`;
     });
     document.body.innerHTML=output;
    },1000);
}
function createPost(post,callback){
    setTimeout(()=>{
    posts.push(post);
    callback();
    },2000);
}
getPosts();
createPost({tittle:'Post Three',body:'This is post three'},
getPosts);
/**
 * callback function
 * wait 2 second and see post three
 */