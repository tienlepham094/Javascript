var courses = [
    'Javascript',
    'PHP',
     'Ruby'
];
courses.length=1000;
/*chỉ chạy qua 3 lần
ko chạy qua empty*/
courses.forEach(function(course,index,array){
    console.log(course,index,array);
});
console.log('Thêm thuộc tính forEach2');
// thêm một thuộc tính forEach2
Array.prototype.forEach2= function(callback){
    for( var index in this){
        //for in duyệt qua cả những proto
        // console.log('index: ', index);
        if(this.hasOwnProperty(index)){
            // chạy qua những thuộc tính gần nhất
            callback(this[index],index,this);
        };
    }
}
courses.forEach2(function(course,index,array){
    console.log(course,index,array);
})