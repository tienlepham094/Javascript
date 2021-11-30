//..spread
// sự khác nhau giữa rest và spread
//+ rest để gom lại thành array
//+ spread trải từ array thành các phần tử

const a=[1,2,3];
const b=[0,a,4];
// [0,[1,2,3],4]
const b=[0,...a,4];
//[0,1,2,3,4]
function sum(...numbers){

}
sum(...a);// sum(1,2,3);



//spread part 2
//gán obj2 bằng obj1
const obj1={
    a:1,
    b:2,
    c:3,
    d:{
        e:10
    }
};
let obj2={
    ...obj1,
};
console.log({pbk1,obj2});