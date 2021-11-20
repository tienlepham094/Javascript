const person={
name: 'Mosh',
//method
walk (){
    console.log('walk');
}
};
//UPPERCASE name of class
class Person{
    constructor(name){
    this.name=name;
    }
    walk(){
        console.log('walk');
    }
}
//creat object
const person= new Person('Mosh');
//inheritance
class Teacher extends Person{
    constructor(name,degree){
        super(name);
        this.degree=degree;
    }
    teach(){
        console.log('Teach');
    }
}
const teacher= new Teacher('Jake','Professor');
