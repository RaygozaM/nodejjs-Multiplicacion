const fs = require('fs');

let listarTabla = (base, limite = 10) => {
for(let i = 1; i<=limite; i++){
    console.log(`${base} x ${i} = ${base * i}`);
}
}

// let crearArchivo = (base) => {
//     return new Promise ((resolve, reject) => {
//         let base = 1;
//         let i = 1;
//         let f = 1;

//         while(f <= 8){
//             for (i = 1; i <= 10; i++){
//                 fs.appendFileSync('Tabla del '+base+'.txt',  `${i}.- ${base} x ${i} = ${base * i} \n `, (error) => {
//                 if(error) {
//                     reject(error);
//                 }else{
//                     resolve(`tabla del ${base}.txt`);
//                 }
//                 console.log("el archivo tabla del "+base+".txt ha sido creado con exito");
//     });
// }
// base = base + 1;
// i = 0;
// f = f +1;
// }
//     });
// }
module.exports = {
    //crearArchivo,
    listarTabla
}