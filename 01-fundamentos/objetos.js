let personaje = {
  nombre: "cesar",
  codeName: 'Iroman',
  vivo: true,
  cordenadas: { latitud: 0.123, long: -1284 },
  trajes:['make','rola','mani','percanti']
};

console.log(personaje.cordenadas.latitud);
console.log(personaje.trajes.length);

console.log(personaje.trajes[personaje.trajes.length-1]);

const x = 'vivo'
console.log(personaje[x]);
