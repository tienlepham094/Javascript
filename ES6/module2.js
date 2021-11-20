// import User from "./module";
// change the name
import User,{
    printName as printUserName, printAge
} from "./module";
const user= new User();
printUserName(user);
