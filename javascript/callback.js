// callback
// là hàm được truyền qua đối số
// khi gọi hàm khắc
function myFunction(param){
    // console.log(typeof param);
    param('Học lập trình');
}
// myFunction(123); => typeof sẽ là number
function myCallback(value){
console.log('Value: ',value)
};
myCallback(123);
myFunction(myCallback);
// ví dụ về Callback
var courses=[
    'Javascript',
    'PHP',
    'Ruby',
];
courses.map(function(course){// function là một đối số
console.log(course);
});
console.log('viết một code map2')
// viết một code map2
Array.prototype.map2= function(callback){// thêm một thuộc tính
    // thêm một thuộc tính cho map2
    console.log(this);
    for(var i=0;i<this.length;i++){
callback(this[i],i);
    }
}
courses.map2(function(course,index){
console.log(index,course);
})
//
courses.length=10;
for (var i=0; i<courses.length;i++){
    console.log(courses[i]); //không hợp lý vì phải duyệt qua 10 lần
}
// sử dụng vòng lặp for in sẽ hợp lí hơn
for (var index in courses){
    console.log(courses[index]);
}
function Person(firstName,lastName){
    this.firstName= firstName;
    this.lastName=lastName;
}
const member= new Person('lydia','hallie');
const sarah = Person('sarah','smith');
Person.getFullName= function(){
    return `${this.firstName} ${this.lastName}`;
};
console.log(member);
console.log(sarah)
