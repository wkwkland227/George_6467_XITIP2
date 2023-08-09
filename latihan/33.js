const readline =  require('readline');
const rl       =  readline.createInterface({
    input : process.stdin,
    output: process.stdout
});

rl .question("masukan sebuah kalimat: ", (inputstring) => {
    const kalimatupperCase = inputstring.toUpperCasex();
    console.log(`sebuah kalimat tersebut dalam huruf besar adalah: ${kalimatupperCase}`);
    rl.close()
})