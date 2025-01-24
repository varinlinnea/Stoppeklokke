let timer;
let centiseconds = 0;
let deciseconds = 0;
let seconds = 0;
let dekaseconds = 0;
let minutes = 0;
let lapRounds = 1;
let timeDisplay = document.getElementById("timeDisplay")
let lapDisplay = document.getElementById("lapDisplay")

function startTimer() { // function that starts the timer
    timer = setInterval(countTime, 10);
}

function countTime() { // gets passed to setInterval in startTimer function
    timeDisplay.innerHTML = `<div>${minutes}:${dekaseconds}${seconds}:${deciseconds}${centiseconds}</div>`;
    centiseconds++;
    if (centiseconds === 10) {
        deciseconds++;
        centiseconds = 0;
        if (deciseconds === 10) {
            seconds++;
            deciseconds = 0;
            if (seconds === 10) {
                dekaseconds++;
                seconds = 0;
                if (dekaseconds === 6) {
                    minutes++;
                    dekaseconds = 0;
                }
            }
        }
    }
}

function pauseTimer() { // function that pauses the timer and displays the laps on the webpage
    clearInterval(timer);
    lapDisplay.innerHTML += `<div>Lap ${lapRounds}: ${minutes}:${dekaseconds}${seconds}:${deciseconds}${centiseconds}</div>`;
    lapRounds++;
    centiseconds = 0;
    deciseconds = 0;
    seconds = 0;
    dekaseconds = 0;
    timeDisplay.innerHTML = seconds;
}
function stopTimer() { // function that resets the timer
    clearInterval(timer);
    lapDisplay.innerHTML = '';
    centiseconds = 0;
    deciseconds = 0;
    seconds = 0;
    dekaseconds = 0;
    timeDisplay.innerHTML = '0:00:00';
}
