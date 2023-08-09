const readline =  require('readline');
const rl       =  readline.createInterface({
    input : process.stdin,
    output: process.stdout
});

rl.question("masukan nama: ", (kalimat) => {
    rl.question("apa makanan favorit kamu: ", (kalimat2) => {
        const penggabung = kalimat.concat(kalimat2);
        console.log(`makanan kesukaan saya adalah ${kalimat2}` )
    }) 
} )