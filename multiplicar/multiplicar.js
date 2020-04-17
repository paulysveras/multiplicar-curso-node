//requireds

const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {

        return new Promise((resolve, reject) => {

            if (!Number(base)) {
                reject(`El valor ingresado ${base} no es un numero`);
                return;
            }

            let data = '';

            for (let i = 1; i <= limite; i++) {

                data += `${base} * ${i} = ${base*i} \n`;
            }

            fs.writeFile(`tabla/tabla-${base}.txt`, data, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(`tabla-${base}.txt`);
                }

            })

        })

    }
    //limite = 10 se asigna por defecto si no recibe nada
let listarTabla = (base, limite = 10) => {


    return new Promise((resolve, reject) => {


        if (!Number(base)) {
            reject(`El valor de Base ingresado ${base} no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor de limite ingresado ${limite} no es un numero`);
            return;
        }

        let tabla = '';

        for (let i = 1; i <= limite; i++) {

            tabla += `${base} * ${i} = ${base*i} \n`;
        }

        if (!tabla) {
            reject(`no se pudo listar tabla de ${base}`);
        } else {
            resolve(tabla);
        }


    })

}

module.exports = {
    crearArchivo,
    listarTabla
}