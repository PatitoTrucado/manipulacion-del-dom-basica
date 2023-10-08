// CLASE 12

/* // h1 {color: red}
// .parrafito { ... }
// #pid { ... }

const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.querySelector(".parrafito")
const pid = document.getElementById("pid")
const input = document.querySelector("input")

console.log(input.value)

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = "Patito <br> Feo";
h1.innerText = "Patito <br> Feo";
/* console.log(h1.getAttribute("class"))
h1.setAttribute("class", "Rojo") */

/* h1.classList.add("Rojo");
h1.classList.remove("Amarillo"); */
// h1.classList.toggle("verde")
// h1.classList.contains("verde")

/* input.value = "456"

const img = document.createElement("img");
img.setAttribute("src", "https://pbs.twimg.com/media/Fzj-Nw1XoAIyKsV?format=jpg&name=large");

console.log(img)

pid.innerHTML = "";
pid.appendChild(img); */

/* h1.classList.add("Rojo");
h1.classList.remove("Amarillo"); */


// CLASE 13

const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btnCalcular = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

/* form.addEventListener('submit', sumarInputValues); */
btnCalcular.addEventListener('click', sumarInputValues);

function sumarInputValues(event){
    /* event.preventDefault(); */
    const resultado = (Number(input1.value) + Number(input2.value));
    pResult.innerText = "El resultado es: " + resultado;
}
