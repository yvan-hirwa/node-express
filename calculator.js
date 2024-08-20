process.stdin.on('data', datainput =>{
    const input = datainput.toString().trim()

    if (input === 'quit') {
        process.exit()
    }

    try {
        const value = eval(input)
        console.log(value)
    } catch (error) {
        console.log(`can't do this ${error}`)
    }
    process.stdout.write('Enter your simple equation: ')
})

process.stdout.write('Enter your simple Equation: ')
