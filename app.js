const loadText = document.querySelector(".loading-text"),
  background = document.querySelector(".bg");

let load = 0;
const interval = setInterval(blurring, 60);

// función de stackoverflow para mapear un rango de números a otro rango de números
// asigné valores por default: in_ (min y max) refiere al rango de 0 a 100 que recorre load
const scale = (num, outMin = 1, outMax = 0, inMin = 0, inMax = 100) =>
  ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

function blurring() {
  load++;
  if (load > 99) clearInterval(interval);

  loadText.innerText = `${load}%`;
  //en la opacidad del texto, los valores de salida serán entre 1 (outMin) y 0 (outMax)
  loadText.style.opacity = scale(load);
  //en el blur del fondo, los valores de salida serán entre 30px (outMin) y 0 (outMax)
  background.style.filter = `blur(${scale(load, 30)}px)`;
}
