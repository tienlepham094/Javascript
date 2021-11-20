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
//
var totalCoin=courses.reduce(function(total,course){
    return total+ course.coin
},0);// 0 là giá trị khởi tạo
console.log(totalCoin);
//
var numbers= [100,200,220,200,480]
var totalcoin=numbers.reduce(function(total,number){
    return total+number;
});// không cần chuyền giá trị khởi tạo
console.log(totalcoin);
//Flat- 'làm phẳng ' mảng từ Depth aray-"Mảng sâu"
var depthArray =[1,2,[3,4],5,6,[7,8,9]];
var flatArray=depthArray.reduce(function(flatOutput,depthItem){
return flatOutput.concat(depthItem); //concat() là nối mảng
},[]);
console.log(flatArray);








// Lấy ra khóa học đưa vào một mảng mới
var topics=[
    {
        topic: 'Front-end',
        courses:[
            {
                id:1,
                title:'HTML,CSS'
            },
            {
                id:2,
                title: 'Javascript'
            }
        ],
    },
    {

        topic:'Back-end',
        courses:[
            {
                id:1,
                title:'PHP'
            },
            {
                id:2,
                title:'Ruby'
            }
        ],
    }
]
var newCourses= topics.reduce(function(courses,topic){
return courses.concat(topic.courses);
},[])
console.log(newCourses);
var htmls=newCourses.map(function(course){
    return `
    <div>
    <h2> ${course.title}</h2>
    <p>ID: ${course.id}</p>
    </div>
    `
});
console.log(htmls);
///

console.log(' **');
const numberss=[1,2,3,4,5];
const results=numberss.reduce((total,number,index,array)=>{
    return total+number;
},10);//giá trị khỏi tạo bằng 10
console.log(results);
console.log('Tạo ra phương thức reduce 2');
Array.prototype.reduce2= function(callback,result){
    let i=0
    if(arguments.length<2){
        i=1;
     result=this[0]; // result là biến tích trữ
    }
    for(;i<this.length;i++){
       result= callback(result,this[i],i,this);
    }
    return result;
}
var checkArr= numberss.reduce2(function(total,number,index,array){
return total+number;
});
console.log(checkArr);