/* Array methods
forEach()
every()
some()
find()
filter()
map()
reduce()
*/
var courses = [
    {
        id: 1,
        name: 'Javacript',
        coin: 250
    },
    {
        id: 2,
        name: 'HtML, Css',
        coin: 0
    },
    {
        id: 3,
        name:'Ruby',
        coin: 100
    }
];
// forEach
courses.forEach(function(course){
console.log(course);
})



// every kiểm tra một điều kiện cho trc
// ktra các khóa học có miễn phí không

var isFree= courses.every(function(course,index){
    return course.coin===0;
});
console.log(isFree)// trả về kiểu dữ liệu boolean

// some thì chỉ cần một phần tử trong mảng sẽ trả về đúng




// find
var course= courses.find(function(course,index){
    return course.name==='Ruby';
});
console.log(course);// nếu ko có sẽ trả về undefined
// chỉ tìm ra một đối tượng


// phương thức map
console.log('Tìm hiểu về phương thức map');
function courseHandler(course){
return {
    id: course.id,
    name:`khoa hoc: ${course.name}`,
    coin: course.coin,
    coinText: `Gia: ${course.coin}`
};
};
var newCourses= courses.map(courseHandler) // newCourses là một array mới
console.log(newCourses);




// Array reduce() method
console.log('reduce() method');
//Biến lưu trữ
// var totalCoin=0;
//lặp qua các phần tử
// for(var course of courses){
//     totalCoin+=course.coin;
// }
// console.log(totalCoin);
var i=0;
function coinHandler(accumulator, currentValue, currentIndex, originArray) {
var total= accumulator+ currentValue.coin;
console.table(
    {
        'Lượt chạy': i,
        'Biến tích trữ': accumulator,
        'Giá khóa học': currentValue.coin,
        'Tích trữ được': total
    }
);
return total;
}
var totalCoin= courses.reduce(coinHandler,0);
console.log(totalCoin);
//
var array1 = ['one', 'two', 'three'];
console.log('array1: ', array1);
// expected output: Array ['one', 'two', 'three']

var reversed = array1.reverse(); 
console.log('reversed: ', reversed);
// expected output: Array ['three', 'two', 'one']

/* Careful: reverse is destructive. It also changes
the original array */ 
console.log('array1: ', array1);
// expected output: Array ['three', 'two', 'one']​