const clock = document.querySelector("#clock");
const date = document.querySelector("#date");

setInterval(() => {
  clock.innerText = new Date().toLocaleTimeString("tr-TR");
}, 1000);

setInterval(() => {
  date.innerText = new Date().toLocaleDateString("tr-TR");
}, 1000);
