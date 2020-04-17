const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite)
            .then(tabla => console.log(tabla))
            .catch(err => console.log(err));
        break;

    case 'crear':
        console.log('==========================='.green);
        console.log(`==tabla de ${argv.base}==`.green);
        console.log('==========================='.green);
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.red}`))
            .catch(err => console.log(err));

        break;

    default:
        console.log('comando no reconocido');
}

//let base = 'A';

//console.log(argv);
//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];

//console.log(argv.base);
//console.log(argv2);

//console.log('Limite', argv.limite);

//crearArchivo(base)
//    .then(archivo => console.log(`Archivo creado: ${archivo}`))
//    .catch(err => console.log(err));