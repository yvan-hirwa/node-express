import * as readline from 'readline'
import { stdin as input, stdout as output } from 'process'

const rl = readline.createInterface({ input, output })

function question(query){
    return new Promise(resolve => {
        rl.question(query, resolve);
    })
}


let answer = await question('Enter an equation: ')

while (answer != 'quit') {
    try {
        const value = eval(answer)
        console.log(`${value}`)
    } catch (error) {
        console.log(`${error} wrong input`)
    }

    answer = await question('Enter an equation: ')
}

rl.close()