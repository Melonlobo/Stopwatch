let hrText = document.querySelector(".hour");
let minText = document.querySelector(".minute");
let secText = document.querySelector(".second");
let msText = document.querySelector(".milli-second");
let startTime = document.querySelector(".start");
let stopTime = document.querySelector(".stop");
let reset = document.querySelector(".reset");

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

function timer() {
  clearInterval(interval);
  interval = setInterval(() => {
    milliseconds++;
    if (milliseconds > 99) {
      milliseconds = 0;
      seconds++;
    }
    if (seconds > 59) {
      seconds = 0;
      minutes++;
    }
    if (minutes > 59) {
      minutes = 0;
      hours++;
    }
    hrText.innerText = `${hours.toString().padStart(2, 0)} hr`;
    minText.innerText = `${minutes.toString().padStart(2, 0)} min`;
    secText.innerText = `${seconds.toString().padStart(2, 0)} s`;
    msText.innerText = `${milliseconds.toString().padStart(2, 0)} ms`;
  }, 10);
}

startTime.addEventListener("click", timer);
stopTime.addEventListener("click", () => clearInterval(interval));
reset.addEventListener("click", () => {
  clearInterval(interval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  hrText.innerText = `${hours.toString().padStart(2, 0)} hr`;
  minText.innerText = `${minutes.toString().padStart(2, 0)} min`;
  secText.innerText = `${seconds.toString().padStart(2, 0)} s`;
  msText.innerText = `${milliseconds.toString().padStart(2, 0)} ms`;
});
