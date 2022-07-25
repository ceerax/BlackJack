let cesar = { nombre: "Cesar" };
let erika = { ...cesar };
erika.nombre = "Erika";

console.log({ cesar, erika });

const cambiaNombre = ({...persona}) => {
    persona.nombre = 'Nuevo nombre';
    return persona
};

let austin = {nombre:'Austin'}
let axel = cambiaNombre(austin);

console.log({austin,axel });

////////arreglo////////

const frutas =['manzana','peras','piñas']

const otrasFrutas= [...frutas]

otrasFrutas.push('Mango','fresas')

console.table({frutas,otrasFrutas})
