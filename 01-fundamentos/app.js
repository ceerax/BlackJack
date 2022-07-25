let a = 10,
  b = 20,
  c = "hola",
  d = "Spiderman",
  x = a + b;

const saludo = c + d;

/* console.log({ a });
console.log({ b });
console.log({ c }); */

c = "Hola mundo";

/* console.table({ a, b, c, d, x }) */ let juegos = [
  "mario",
  "contra",
  "zelda",
];

/* console.log('largo',juegos.length ); */

juegos.forEach((elemento, num, arr) => {
  console.log(elemento, num, arr);
});

let nuevosJuego = juegos.push("pokemon");
nuevosJuego = juegos.unshift("lala");


console.log({ nuevosJuego, juegos });

let juegoBorrado = juegos.pop()
console.log(juegoBorrado,juegos);

let pocicioDeJuego = juegos.indexOf('contra')

console.log(pocicioDeJuego);