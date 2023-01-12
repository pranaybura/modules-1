import { mod1Function1, mod1Function2 } from './mod1.js'

const testFunction = () => {
    console.log('Im the main function')
    mod1Function1()
    mod1Function2()
}

testFunction()

// can run in terminal with node main.js