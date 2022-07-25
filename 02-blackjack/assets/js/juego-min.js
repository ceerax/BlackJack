(() => {
  "use strict";
  let e = [],
    f = ["C", "D", "H", "S"],
    g = ["A", "J", "Q", "K"],
    a = document.getElementById("btnNuevo"),
    b = document.getElementById("btnPedir"),
    c = document.getElementById("btnDetener"),
    h = document.querySelectorAll("small"),
    i = document.querySelector("#jugador-cartas"),
    j = document.querySelector("#computadora-cartas"),
    k = 0,
    l = 0,
    d = () => {
      for (let a = 2; a <= 10; a++) for (let b of f) e.push(a + b);
      for (let c of f) for (let d of g) e.push(d + c);
      return (e = _.shuffle(e));
    };
  d();
  let m = () => {
      if (0 === e) throw "no hay mas cartas ";
      return e.pop();
    },
    n = (b) => {
      let a = b.substring(0, b.length - 1);
      return isNaN(a) ? ("A" === a ? 11 : 10) : 1 * a;
    },
    o = (b) => {
      do {
        let c = m();
        (l += n(c)), (h[1].innerText = l);
        let a = document.createElement("img");
        if (
          ((a.src = `assets/cartas/${c}.png`), (a.classList = "carta"), l > 21)
        )
          break;
        j.append(a);
      } while (l < b && b <= 21);
      setTimeout(() => {
        l === b
          ? alert("esto fue un empate")
          : b > 21
          ? alert("Computadora gana")
          : l > 21
          ? alert("Jugador Gana")
          : alert("Computadora gana");
      }, 100);
    };
  b.addEventListener("click", () => {
    let d = m();
    (k += n(d)), (h[0].innerText = k);
    let a = document.createElement("img");
    (a.src = `assets/cartas/${d}.png`),
      (a.classList = "carta"),
      i.append(a),
      k > 21
        ? ((b.disabled = !0), (c.disabled = !0), o(k))
        : 21 === k && ((b.disabled = !0), (c.disabled = !0), o(k));
  }),
    c.addEventListener("click", () => {
      (c.disabled = !0), (b.disabled = !0), o(k);
    }),
    a.addEventListener("click", () => {
      (e = []),
        (e = d()),
        (l = 0),
        (k = 0),
        (h[0].innerText = 0),
        (h[1].innerText = 0),
        (j.innerHTML = ""),
        (i.innerHTML = ""),
        (c.disabled = !1),
        (b.disabled = !1);
    });
})();
