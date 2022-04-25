document.addEventListener("DOMContentLoaded", () => {
  const addButtonHour = document.querySelector(".main__button-addHour");
  const addButtonMin = document.querySelector(".main__button-addMin");
  const addButtonSec = document.querySelector(".main__button-addSec");
  const removeButtonHour = document.querySelector(".main__button-subsHour");
  const removeButtonMin = document.querySelector(".main__button-subsMin");
  const removeButtonSec = document.querySelector(".main__button-subsSec");
  const mainH2 = document.querySelector(".main__h2");
  const startButton = document.querySelector(".main__button-start");
  const resetButton = document.querySelector(".main__button-reset");
  const stopButton = document.querySelector(".main__button-stop");

  // commit
  let time = 0;
  let timer;

  const updatePomodoro = () => {
    const hours = String(Math.trunc(time / 60 / 60)).padStart(2, 0);
    const min = String(Math.trunc((time / 60) % 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    mainH2.textContent = `${hours}:${min}:${sec}`;
  };

  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////

  const startCount = () => {
    startButton.firstElementChild.textContent = "Start";

    if (time) {
      if (timer) clearInterval(timer);
      startButton.disabled = true;

      const tick = () => {
        if (time <= 0) {
          clearInterval(timer);
          time = 0;
        }
        updatePomodoro();
        if (time > 0) time -= 1;
      };

      tick();
      timer = setInterval(tick, 1000);

      return timer;
    }
  };

  const stopCount = () => {
    startButton.disabled = false;
    if (timer) clearInterval(timer);
    startButton.firstElementChild.textContent = "Continue";
  };

  const resetCount = () => {
    startButton.disabled = false;
    if (timer) clearInterval(timer);
    time = 0;
    updatePomodoro();
  };

  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////

  const add = (type) => () => {
    if (type === "hours") {
      time += 5 * 60 * 60;
    }
    if (type === "min") {
      time += 5 * 60;
    }
    if (type === "sec") {
      time += 5;
    }
    updatePomodoro();
  };

  const subs = (type) => () => {
    if (type === "hours") {
      time -= 5 * 60 * 60;
      if (time <= 0) resetCount();
    }
    if (type === "min") {
      time -= 5 * 60;
      if (time <= 0) resetCount();
    }
    if (type === "sec") {
      time -= 5;
      if (time <= 0) resetCount();
    }
    updatePomodoro();
  };

  startButton.addEventListener("click", startCount);
  stopButton.addEventListener("click", stopCount);
  resetButton.addEventListener("click", resetCount);

  addButtonHour.addEventListener("click", add("hours"));
  addButtonMin.addEventListener("click", add("min"));
  addButtonSec.addEventListener("click", add("sec"));

  removeButtonHour.addEventListener("click", subs("hours"));
  removeButtonMin.addEventListener("click", subs("min"));
  removeButtonSec.addEventListener("click", subs("sec"));
});
