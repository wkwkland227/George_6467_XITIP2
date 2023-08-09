const readline =  require('readline');
const rl       =  readline.createInterface({
    input : process.stdin,
    output: process.stdout
});

rl.question("masukan nama: ", (kalimat) => {
    rl.question("apa warna kesukaanmu: ", (kalimat2) => {
        const penggabung = kalimat.concat(kalimat2);
        console.log(`saya suka sekali adalah: ${kalimat2}` )
    }) 
} )