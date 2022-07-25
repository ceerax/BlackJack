const crearPersona=(nombre,apellido)=> ({nombre,apellido})

console.log(crearPersona('cesar','moreno'));

//////////////////////////

function imprimeArgumentos() {
    console.log(arguments);    
}

imprimeArgumentos(10,true,false,'Cesar','Hola')

const saludar = (edad,...arg) => {    
    console.log(arg);
};

saludar(10,true,false,'Cesar','Hola')

////////////////////////////////////
 const trabajarArgumentos=(...arg)=>{
     return arg
 }

 const [edad,casado,vivo,nombre,saludo] =trabajarArgumentos(10,true,false,'Cesar','Hola')
console.log({edad,casado,vivo,nombre,saludo});

const {apellido:nuevoApellido}=crearPersona("Austin","Moreno")
console.log({nuevoApellido});

///////Destructuracion/////////

const personaje={
    /* nombre:'cesar', */
    codeName:'el pro',
    vivo:true,
    edad:31,
    trajes:['aspero','prota','lol']
}

const imprimePropiedades = ({nombre = "Axel",codeName,vivo,edad=10 ,trajes})=>{
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades(personaje)




 