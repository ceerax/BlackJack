const hoy = new Date();
console.log({ hoy });
let dia = hoy.getDay();
//console.log({ dia });

if (dia === 0) {
  console.log("Domingo");
} else if (dia === 1) {
  console.log("Lunes");
} else if (dia === 2) {
  console.log("Martes");
} else if (dia === 3) {
  console.log("Miercoles");
} else if (dia === 4) {
  console.log("Jueves");
} else if (dia === 5) {
  console.log("Viernes");
}
/////este codigo es mas facil que hacer el if //////
//dia = 3;

const diasLetras = {
  0: "Domingo",
  1: "Lunes",
  2: "Martes",
  3: "Miercoles",
  4: "Jueves",
  5: "Viernes",
  6: "Sabado",
};

//console.log(diasLetras[dia]);

///////mas facil con arreglo ////////

const diasLetras2 = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado",];

console.log(diasLetras2[dia]);