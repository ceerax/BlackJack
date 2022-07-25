function saludar(e, edad, pais) {
  console.log(arguments);
  console.log("nombre" + " " + e, "edad" + " " + edad, "pais" + " " + pais);

  return [1, 2, 3];
}

const persona = (e, edad, pais) => {
  console.log("nombre" + " " + e, "edad" + " " + edad, "pais" + " " + pais);
};

/* saludar("Cesar", 30, "Colombia", true);
persona("Axel",12,'Colombia',false) */

const retornoSaludar = saludar("Cesar", 30, "Colombia", true);

console.log({ retornoSaludar });

// funcion de flecha se utiliza si solo se retorna un valor y no hay mas lineas dentro
const suma = (a, b) => a + b;

console.log(suma(4, 2));

const numAleatorio = () =>  Math.random();

console.log(numAleatorio());
