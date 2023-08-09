const { log } = require('console');
const readline =  require('readline');
const rl       =  readline.createInterface({
    input : process.stdin,
    output: process.stdout
});

rl.question('masukan sebuah kalimat: ', (kalimat) => {
    console,log(`panjang kalimat ${kalimat} adalah: ${kalimat.length} karakter`)
    rl.close()
}) 