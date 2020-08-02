/**
 * 
 * tabla de multiplicar 
 * 
 */

/**
 * require del paquete yargs
 */

const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

/**
 * Decostruccion   
 * require local - empieza por "./" 
 */
const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');

//console.log(process.argv);
//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log("listar");
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
        break;
}