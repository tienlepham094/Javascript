//* Đệ quy
var array=['a','b','c','d','a','b','c'];
function removeArr(arr){
    var newArr=[];
    var newArr=arr.filter(function(item){
        return newArr.includes(item) ? '': newArr.push(item);
    })
    return newArr;

}
console.log(removeArr(array));
// *thuộc tính của set
console.log([...(new Set(array))]);
/*
*1. Phải xác định được điểm dừng
*2. Logic handle=> tạo ra điểm dừng
*Điểm dừng là điểm không gọi lại hàm đệ quy 
*/
function countDown(num){
    if(num>0){
        console.log(num);
        return countDown(num-1) ;
    }
    //end
return num;
}
countDown(10);
/**
 * *làm đệ quy theo bài toán trên
 */
function loops(start,end,callback){

    if(start<=end){
        callback(start);
        return loops(start+1,end,callback);

    }
    
}
var array1=['Javascript','PHP','Ruby'];
loops(0,array1.length-1,function(index){
    console.log(array1[index]);
})
/** bài toán tính đệ quy */
function giaiThua(num){
    var output=1;
    for(var i=num;i>0;i--){
        output*=i;
    }
    console.log(output);
}
giaiThua(6);
/**
 * *Giải bằng thuật đệ quy
 */
function giaiThua1(num){
    if(num>0){
        return num*giaiThua1(num-1);
    }
    return 1;
}
console.log(giaiThua1(6));