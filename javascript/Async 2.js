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
function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        posts.push(post);
        const error= true;

        if(!error){
            resolve();
        }else {
            reject('Error: something went wrong');
        }
        },2000);
    
    });
}
createPost({tittle:'Post three',body:'This is post three'})
.then(getPosts)
.catch(err=>console.log(err));
