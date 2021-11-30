const arr=[10,20,30,40,50];
const [a,b,c,d,e]=arr;
//a=10,e=50
const [a, , ,d]=arr;
//d=40
const[a,...b]=arr;
//a=10
//b=[20,30,40,50]