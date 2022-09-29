const digital = document.querySelector("#clock");
digital.innerText = new Date().toLocaleTimeString("en-GB");

setInterval(() => {
  digital.innerText = new Date().toLocaleTimeString("en-GB");
}, 150);
