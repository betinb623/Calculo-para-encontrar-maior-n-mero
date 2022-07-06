function calcularMaior() {
  let numero1 = document.getElementById('numero1').value;
  let numero2 = document.getElementById('numero2').value;
  let p1 = document.getElementById ('p1');
  let p2 = document.getElementById ('p2');
  

  if (numero1 > numero2) {
    p1.classList.remove("d-none");
  } else {
     p2.classList.remove("d-none");
  }
}
