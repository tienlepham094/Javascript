var courses=[
    {
        name:'Javascript',
        coin:680,
        isFinish: true,
    },
    {
        name: 'PHP',
        coin:860,
        isFinish: false,
    },
    {
        name: 'Ruby',
        coin:980,
        isFinish: false,
    }
];
console.log('cách hđ của filter()');
var filterCourses=courses.filter(function(course,index,array){
    return course.coin >700;
});
console.log(filterCourses);// trả về một mảng mới
console.log('Tạo một thuộc tính filter 2');
// tạo thuộc tính filter2
Array.prototype.filter2=function(callback){
    var output=[];
for(var index in this){
    if(this.hasOwnProperty(index)){
   //chạy qua những thuộc tính gần nhất
   var result= callback(this[index],index,this)
   if (result){
      
       output.push(this[index]);
   }
    }
}
return output;
}
var filter2Courses= courses.filter2(function(course,index,array){
    return course.coin>700;
});
console.log(filter2Courses);
// cách tạo phương thức some2
console.log('Phương thức some:');
var result= courses.some(function(course,index,array){
    return course.isFinish === true;
});
console.log(result);
////
console.log('tạo phương thức some2:');
Array.prototype.some2=function(callback){
    for(var index in this){
        if(this.hasOwnProperty(index)){
           if(callback(this[index],index, this))
           return true;
        }
    }
    return false;
}
var results= courses.some2(function(course,index,array){
    return course.isFinish == true;
})
console.log(results)
//
console.log('Phương thức every');
var checkEvery= courses.every(function(course,index,array){
    return course.isFinish;
});
console.log(checkEvery);
///tạo phương thức every2 
console.log('Tạo phương thức every2');
Array.prototype.every2= function(callback){
    var output=true;
    for(var index in this){
        if(this.hasOwnProperty(index)){
        var result=callback(this[index], index)
        if(!result){
            output=false;
            break;
        }
        }
    }
    return output;
}
var checkEvery2= courses.every2(function(course,index,array){
    return course.coin>680;
});
console.log(checkEvery2);