const { log } = require('console');
const readline =  require('readline');
const rl       =  readline.createInterface({
    input : process.stdin,
    output: process.stdout
});

rl.question("masukan sebuah kalimat :", (kalimat) => {
    rl.question('masukan index awal :', (indexawal) => {
        rl.question('masukan index akhir :', (indexakhir) => {
            indexawal = Number(indexawal);
            indexakhir= Number(indexakhir);
            const substringResult = kalimat.substring(indexawal, indexakhir);
            console,log(`hasil subsring dari index ${indexawal} sampai ${indexakhir}: ${substringResult}`) 
        })
    })
})