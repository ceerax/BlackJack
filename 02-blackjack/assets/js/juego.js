/**
 * 2C two of clubs
 * 2D two of Diamonds
 * 2H two of Hearts
 * 2S two of Spades
 *  */


(()=>{
'use strict'
let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

let btnNuevo = document.getElementById("btnNuevo");
let btnPedir = document.getElementById("btnPedir");
let btnDetener = document.getElementById("btnDetener");
let puntosHtml = document.querySelectorAll("small");
const divCartasJugador = document.querySelector("#jugador-cartas");
const divCartasComputadora = document.querySelector("#computadora-cartas");

let puntosJugador = 0;
let puntosComputadora = 0;

// Esta funcion crea una nueva baraja
const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }
  for (const tipo of tipos) {
    for (const esp of especiales) {
      deck.push(esp + tipo);
    }
  }

  //._suffle es una libreri que utilize para mesclar el arreglo de deck
  deck = _.shuffle(deck);
  return deck;
};

crearDeck();

// esta funcion me permite tomar una carta

const pedirCarta = () => {
  if (deck === 0) {
    throw "no hay mas cartas ";
  }

  let carta = deck.pop();
  return carta;
};

/* pedirCarta() */ //Valor carta

const valorCarta = (carta) => {
  //en esta parte para quitarle la ultima letra a la carta que venga y solo obtener el valor
  const valor = carta.substring(0, carta.length - 1);

  /* TERNARIO */
  return isNaN(valor)
    ? //si el valor de la carta es A vale 10 si no es A sino otra letra vale 10
      valor === "A"
      ? 11
      : 10
    : //hacemos esto para convertir el string que vienen en un numero
      valor * 1;
};

const turnoComputadora = (puntosMinimos) => {
  do {
    const carta = pedirCarta();
    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHtml[1].innerText = puntosComputadora;
    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList = "carta";

    if (puntosComputadora > 21) {
      break;
    }

    divCartasComputadora.append(imgCarta);
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("esto fue un empate");
    } else if (puntosMinimos > 21) {
      alert("Computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador Gana");
    } else alert("Computadora gana");
  }, 100);
};

//Elementos

btnPedir.addEventListener("click", () => {
  const carta = pedirCarta();
  puntosJugador = puntosJugador + valorCarta(carta);
  puntosHtml[0].innerText = puntosJugador;
  
  {
    /* <img class="carta" src="assets/cartas/10D.png" alt="">   */
  }

  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`;
  imgCarta.classList = "carta";

  divCartasJugador.append(imgCarta);

  if (puntosJugador > 21) {
   
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
  } else if (puntosJugador === 21) {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosJugador);
  }
});

btnDetener.addEventListener("click", () => {
  btnDetener.disabled = true;
  btnPedir.disabled = true;
  turnoComputadora(puntosJugador);
});

btnNuevo.addEventListener("click", () => {
  deck = [];
  deck = crearDeck();

  puntosComputadora = 0;
  puntosJugador = 0;

  puntosHtml[0].innerText = 0;
  puntosHtml[1].innerText = 0;

  divCartasComputadora.innerHTML = "";
  divCartasJugador.innerHTML = "";

  btnDetener.disabled = false;
  btnPedir.disabled = false;
});


})();


