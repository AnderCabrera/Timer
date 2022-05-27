document.addEventListener('DOMContentLoaded', function () {

    // Days
    const sumDays = document.getElementById('sumDaysBtn');
    const substractDays = document.getElementById('substractDaysBtn');
    const dayH2 = document.getElementById('day');
    // Hours
    const sumHours = document.getElementById('sumHoursBtn');
    const substractHours = document.getElementById('substractHoursBtn');
    const hourH2 = document.getElementById('hour');
    // Minutes
    const sumMinutes = document.getElementById('sumMinutesBtn');
    const substractMinutes = document.getElementById('substractMinutesBtn');
    const minuteH2 = document.getElementById('minute');
    // Seconds 
    const sumSeconds = document.getElementById('sumSecondsBtn');
    const substractSeconds = document.getElementById('substractSecondsBtn');
    const secondH2 = document.getElementById('second');
    // Buttons 
    const startBtn = document.getElementById('startButton');
    const stopBtn = document.getElementById('stopButton');
    const resetBtn = document.getElementById('resetButton');
    const buttons = document.querySelectorAll('button');

    let time = 0;

    function updateTime() {
        // * Calculating the days, hours, minutes and seconds left
        let days = Math.floor(time / (1000 * 60 * 60 * 24));
        let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((time % (1000 * 60)) / 1000);

        // * Displaying the days, hours, minutes and seconds left
        dayH2.innerHTML = days;
        hourH2.innerHTML = hours;
        minuteH2.innerHTML = minutes;
        secondH2.innerHTML = seconds;
    }

    function addTime(type) {
        if (type === 'days') time += 1 * (1000 * 60 * 60 * 24);
        if (type === 'hours') time += 1 * (1000 * 60 * 60);
        if (type === 'minutes') time += 5 * (1000 * 60);
        if (type === 'seconds') time += 10 * (1000);

        updateTime();
    }

    function substractTime(type) {
        if (type === 'days') time -= 1 * (1000 * 60 * 60 * 24);
        if (type === 'hours') time -= 1 * (1000 * 60 * 60);
        if (type === 'minutes') time -= 1 * (1000 * 60);
        if (type === 'seconds') time -= 5 * (1000);
        if (time <= 0) {
            time = 0;
            updateTime();
        }
        updateTime();
    }

    function showButtons() {
        for (let i = 0; i < 8; i++) {
            buttons[i].disabled = false;
        }
    }
    
    function unshowButtons() {
            for (let i = 0; i < 8; i++) {
                buttons[i].disabled = true;
        }
    }

    startBtn.onclick = function startTimer() {
        unshowButtons();
        startBtn.disabled = true;
        timeInterval = setInterval(() => {
            time -= 1000;
            updateTime();
            if (time <= 0) {
                time = 0;
                clearInterval(timeInterval);
                startBtn.disabled = false;
                startBtn.textContent = "Start"
                showButtons();
                updateTime();
            }
        }, 1000);
    }

    stopBtn.onclick = function stopTimer() {
        clearInterval(timeInterval);
        showButtons();
        startBtn.disabled = false;
        startBtn.textContent = "Resume"
    }

    resetBtn.onclick = function resetTimer() {
        clearInterval(timeInterval);
        startBtn.textContent = "Start"
        startBtn.disabled = false;
        time = 0;
        showButtons();
        updateTime();
    }

    // * Displaying the days
    sumDays.onclick = () => addTime('days');
    substractDays.onclick = () => substractTime('days');

    // * Displaying the hours
    sumHours.onclick = () => addTime('hours');
    substractHours.onclick = () => substractTime('hours');

    // * Displaying the minutes
    sumMinutes.onclick = () => addTime('minutes');
    substractMinutes.onclick = () => substractTime('minutes');

    // * Displaying the seconds
    sumSeconds.onclick = () => addTime('seconds');
    substractSeconds.onclick = () => substractTime('seconds');
})