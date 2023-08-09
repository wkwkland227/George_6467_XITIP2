const { log } = require('console');
const readline =  require('readline');
const rl       =  readline.createInterface({
    input : process.stdin,
    output: process.stdout
});

rl.question ('masukan sebuah kalimat:', (kalimat1) => {
    rl.question (`masukan kalimat yang ingin adna cari:`, (katacari) => {
        const indekskata = kalimat1.lastIndexOf(katacari);
        if (indekskata !== -1) {
            console.log(`kata ${katacari} yang adana cari ada pada index ${indekskata}`);
        } else {
            console.log(`kata ${katacari} tidak ditemukan pada index ${indekskata}`);
        }
    })
})