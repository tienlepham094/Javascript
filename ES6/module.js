export default class User{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
export function printName(user){
    console.log(`User's name is ${user.age}`);
}
function printAge(user){
    console.log(`User is ${user.age} years old`)
}
// 2 ways to export
export default User;
/**
 * Only default export one name
 */
export {printName,printAge}