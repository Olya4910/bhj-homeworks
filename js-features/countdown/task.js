let delay = document.getElementById("timer");
let time = 10;

setInterval(updateDelay, 1000);

function updateDelay() {
    if (time > -1){
    let seconds = time;
    seconds  = seconds < 10 ? "0" + seconds : seconds;
    delay.innerHTML = `${seconds}`;
    time--; 
    } else {
    alert("Вы победили в конкурсе!");
    }
}