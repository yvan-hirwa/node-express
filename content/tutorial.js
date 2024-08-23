// using process.argv 

const mission = process.argv[4];// checks the exec command using index

if (mission === 'learn') {
    console.log('Time to learn some codes');

} else {
    console.log(` ${mission} `);
}