/**
 * 1.JSON
 * 2. Promise
 * -- sync: đồng bộ (thực hiện một cách lần lượt)
 * -- async: bất đồng bộ
 * -- nỗi đau (callback)
 * -- Lý thuyết cách hoạt động
 * -- thực hành ví dụ
 * 4. Fetch
 * 5.Dom location
 * 6. local storage
 */
// Các trạng thái của promise
//1. Pending
//2. Fulfilled
//3. Reject
var promise= new Promise(
    // Executor
    function(resolove, reject){
        /**
         * Logic
         * Thành công: resolve()
         * Thất bại: reject()
         */
        resolove();
    }
);
promise
// trả về 3 phương thức

// .then(function(){
// console.log('Successful');
// })// resolve()
// .then(function(){
//     console.log(1);
// })

// .catch(function (){
// console.log('Failure!')
// })// reject


// .finally(function(){
// console.log('Done!')
// })// một trong 2



/**
 * Tính chất chuỗi (chain)
 */
console.log('Tính chất chuỗi');
promise
.then(function(){
    return 1;
})
.then(function(data){
console.log(data);
return 2;
})
.then(function(data){
    console.log(data);
    return 3;
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log('Done!');
})
/**
 * 
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
    console.log(2);
})