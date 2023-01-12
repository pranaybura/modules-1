// import { mod1Function1 as func1, mod1Function2 as func2 } from './mod1.js' OR
// import * as modes from './mod1.js' // Here it all can be imported as an 'object' called modes.

// import mod1Function1, { mod1Function2 } from "./mod1.js" OR
import lalala, { mod1Function2 } from "./mod1.js"
const testFunction = () => {
    console.log('Im the main function')
    // func1()
    // mod1Function1()

    lalala()
    // func2()
    mod1Function2()
}

testFunction()

// can run in terminal with node main.js