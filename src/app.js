/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let Quien = ["Un marciano", "Mi Abuela", "Mi hijo", "Mi pez"];
  let Accion = ["rompió", "comió", "quemó", "mojó"];
  let Que = ["mi proyecto", "las llaves", "el coche"];
  let Cuando = [
    "por la noche",
    "antes de comer",
    "en la siesta",
    "en la ducha",
    "mientras hacía la comida"
  ];

  function generateExcuse() {
    let randomQuien = Quien[Math.floor(Math.random() * Quien.length)];
    let randomAccion = Accion[Math.floor(Math.random() * Accion.length)];
    let randomQue = Que[Math.floor(Math.random() * Que.length)];
    let randomCuando = Cuando[Math.floor(Math.random() * Cuando.length)];

    return (
      randomQuien + " " + randomAccion + " " + randomQue + " " + randomCuando
    );
  }

  let excuseElement = document.getElementById("excusa");
  excuseElement.innerHTML = generateExcuse();

  console.log("Hello Rigo from the console!");
};
