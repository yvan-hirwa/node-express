const readline  = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function question(){
    rl.question('Enter your simple equation: ', input =>{
        if (input === 'quit') {
            rl.close()
        }else{
        try {
            const value = eval(input)
            console.log(`${value}`)
        } catch (error) {
            console.log(`${error} wrong input`)
        }
    
        question()
    }
    
    })
}

question();