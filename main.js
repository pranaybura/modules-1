import { mod1Function1, mod1Function2 } from "./mod1.js"
import addUserToDom from "./dom.js"
import getUsers from "./users.js"

const testFunction = () => console.log('Im the main function');

document.getElementById('isAlive').addEventListener('click', () => mod1Function1())
document.getElementById('isRolling').addEventListener('click', () => mod1Function2())

// for (var i = 0; i < users.length; i++) {
//     addUserToDom(users[i]);
// }

testFunction()
