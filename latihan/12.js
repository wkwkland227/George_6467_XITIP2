const readline =  require('readline');
const rl       =  readline.createInterface({
    input : process.stdin,
    output: process.stdout
});

rl.question("masukan nama: ", (kalimat) => {
    rl.question("ketik 1 untuk lanjut", (kalimat2) => {
        const penggabung = kalimat.concat(kalimat2);
        console.log(`swelcome ${kalimat2}` )
    }) 
} )