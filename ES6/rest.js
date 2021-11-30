//...rest
function log(a,...numbers){
    console.log(a);// 1
    console.log(numbers)//2,3,4 [array]
}
function log(...numbers){
    console.log(numbers)// [1,2,3,4]
}
log(1,2,3,4)
// bài toán tính tổng không biết có  bao nhiều đầu vào
function sum(...nums){
    return nums.reduce((a,b)=>{
    return a+b;
    },0)
}
sum(1,2,3,4,5);//15
// bài tập nối chuỗi
function concat(separator,...strings){
    return strings.join(separator);
}
concat('.','a','b','c')
//'a.b.c'