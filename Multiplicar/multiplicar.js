/**
 * 
 */

const fs = require('fs'); //require propio de Nodejs
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('-------------------------------------'.green);
    console.log(`----------tabla del ${base}----------`.yellow);
    console.log('-------------------------------------'.blue);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base*i}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => { //Promesa 

        /** 
         * verifica que la base sea un numero 
         */
        if (!Number(base)) {
            reject(`el valor de la base: ${base} no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`el valor del limite: ${limite} no es un numero`);
            return;
        }

        /**
         * Logica de la multiplicacion
         */
        let data = 'ko n i chi wa.js \n';
        data += `tabla de multiplicar del ${base} al ${limite}\n`;

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base*i}\n`;
        }
        /**
         * Escritura del resultado de la multiplicacion en un archivo de texto.
         * El primer parametro de la funcion writeFile es la ruta del archivo que sea creado
         */
        fs.writeFile(`Tablas/tablaDeMultimplicar-${ base }-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err); // Error 
            else
                resolve(`tablaDeMultimplicar-${ base }-al-${limite}.txt`);
        });

    });
}

/**
 * Mediante la propiedad exports del objeto Module, indicamos
 * que funciones queremos hacer globales para uso de todo el proyecto.
 * 
 * Ojo: para hacer uso de estas funciones en otro archivo .js  es necesario 
 * hacer el require de este archivo.
 * 
 */

module.exports = {
    crearArchivo,
    listarTabla
}