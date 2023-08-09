const readline =  require('readline');
const rl       =  readline.createInterface({
    input : process.stdin,
    output: process.stdout
});

rl.question("masukan kalimat pertama: ", (kalimat) => {
    rl.question("masukan kalimat kedua: ", (kalimat2) => {
        const penggabung = kalimat.concat(kalimat2);
        console.log(`hasil dari penggabungkan kata ${kalimat} dan ${kalimat2} adalah: ${penggabung}` )
    }) 
} )