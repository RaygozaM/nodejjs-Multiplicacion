//Esteb programa sirve para aprender a multiplicar, y tambien pra saber que Armando es Gay
const {listarTabla} = require('./multiplicar/multiplicacion');
const argumentos = require('yargs')
.command('listar', 'Imprime en consola la tabla de multiplicacion', {
    base: {
        demand: true,
        alias: 'b'

    },
    limite: {
        alias: 'l',
        default: 10
    }
})
.help()
.argv;
let base = 7;
let comando = argumentos._[0];
switch(comando){
    case 'listar':
        listarTabla(argumentos.base, argumentos.limite);
    break;
    default:
        console.log(`comando no reconocido: ${comando}`);
    
}
// crearArchivo(base)
// .then(respuesta => console.log(`Archivo creado: ${respuesta}`))
// .catch(errot => console.log(error));
