alert('HI Javascript !')
// Một số hàm built- in
// 1.Alert : alert(..)
// 2.Console
// 3.Confirm
// 4.Prompt
// 5.Set timeout
// 6.Set interval
var fullName='Tien';
console.log(123);
console.log(fullName);
// console.error()
// console.warning()
confirm('Xac nhan ban du tuoi');
prompt('xac nhan tuoi cua ban'); 
setTimeout(function() {
alert('Thong bao')
}, 1000);/*truyền vào một function*/
/*1000 ms*/
//thực thi đoạn code của các bạn sau một thời gian nhất định
setInterval(function(){
    console.log('Day la thong bao' + Math.random)
}, 1000);
// thực thi liên tục
//object constructor
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName= lastName;
    this.avatar= avatar;
    this.getName = function (){
    return `${this.firstName} ${this.lastName}` }
    }
    var author= new User('tien', 'le','avatar');
    var user= new User('hello','hello','hello');
    console.log(author);
    console.log(user);
    //thêm thuộc tính thêm phương thức
    author.title='xinchao'
    user.comment='xinchao cac ban'
    console.log(author.getName());
    //object prototype
    // thêm một thuộc tính
    User.prototype.className=('f8');
    console.log(user.className);
    User.prototype.getClassName = function(){
        return this.className;
    }
    console.log(author.getClassName());
    console.log('vòng lặp do-while');
    // vòng lặp d0 -while
    var i=0;
    do {
        i++;
        console.log(i);
    }while(i<10);
    console.log('break và continue trong vòng lặp');
    // break và continue trong vòng lặp
    for (var i=0; i<10;i ++){
        console.log(i);
        if(i>=5){
            break;
        }
    }
    console.log('phân biệt break và continue');
   for(var i=0; i<10;i++){
       if(i%2!==0){
           continue;
       }
       console.log(i);//in ra các số chẵn
   }
   // vòng lặp lồng vòng lặp
   console.log('vòng lặp lồng vòng lặp');
    var myArray=[
        [1,2],
        [3,4],
        [5,6]
    ];
    for(var i=0; i<myArray.length;i++)// myArray.length=3;
    {
        for(var j=0;j <myArray[i].length;j++){
            console.log(myArray[i][j]);
        }
    }
  