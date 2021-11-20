var postApi="https://jsonplaceholder.typicode.com/posts";
fetch(postApi)
.then(function(response){
    return response.json();
    //JSON.parse-> Javascript type
})
.then(function(posts){
var htmls=posts.map(function(post){
return `<li>
<h2>${post.title}</h2>
<p>${post.body}</p>
</li>`;
});
var html=htmls.join('');// nối các phần tử của mảng thành một chuỗi
document.getElementById('post-block').innerHTML=html;
})
.catch(function(err){
    alert('Có lỗi');
})