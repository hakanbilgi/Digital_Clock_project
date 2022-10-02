
const clockDviv = document.querySelector("#clock");
const dateDiv = document.querySelector("#date");

setInterval(() => {
  clockDviv.innerText = new Date().toLocaleTimeString("tr-TR");
}, 1000);
setInterval(() => {
  dateDiv.innerText = new Date().toLocaleDateString("tr-TR");
}, 1000);
