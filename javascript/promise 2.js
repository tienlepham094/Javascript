/**
 * Promise method (resolve, reject, all)
 */
 function sleep(ms){
    return new Promise(function(resolve){
        setTimeout(resolve,ms);
    });
}
sleep(1000)
.then(function(){
    console.log(1);
    return sleep(1000);
})
//sleep 1s rồi đến then tiếp theo
.then(function(){
    return new Promise(function(resolve,reject){
        reject('Có Lỗi !');
    })
})
.then(function(){
    console.log(3);
    return sleep(1000);
})
.then(function(){
    console.log(4);
    return sleep(1000);
})
.catch (function(err) {
console.log(err);    
})
/**
 * 1. Promise.resolve
 * 2.Promise.reject
 * 3.Promise.all
 * thư viện: output luôn luôn là một promise
 */
var promise= new Promise(function (resolve,reject){
    resolve('Success!');
});
promise
.then(function(result){
    console.log('result',result);
})
/**
 * 
 * 
 */
var promise1= new Promise(function(resolve){
    setTimeout(function(){
        resolve([1]);
    },2000);
})
var promise2= new Promise(function(resolve){
    setTimeout(function(){
        resolve([2,3]);
    },5000)
})
Promise.all([promise1,promise2])
.then(function(result){
    console.log(result);
    var result1= result[0];
    var result2=result[1];
    console.log(result1.concat(result2));
})