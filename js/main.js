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

  let time = 0;
  let timer;

  const updatePomodoro = () => {
    const hours = String(Math.trunc(time / 60 / 60)).padStart(2, 0);
    const min = String(Math.trunc((time / 60) % 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    mainH2.textContent = `${hours}:${min}:${sec}`;
  };

  const startCount = () => {
    if (timer) clearInterval(timer);
    timer = setInterval(() => {
      updatePomodoro();
      if (time === 0) clearInterval(timer);

      time -= 1;
    }, 1000);

    return timer;
  };

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
    }
    if (type === "min") {
      time -= 5 * 60;
    }
    if (type === "sec") {
      time -= 5;
    }
    updatePomodoro();
  };

  startButton.addEventListener("click", startCount);

  addButtonHour.addEventListener("click", add("hours"));
  addButtonMin.addEventListener("click", add("min"));
  addButtonSec.addEventListener("click", add("sec"));

  removeButtonHour.addEventListener("click", subs("hours"));
  removeButtonMin.addEventListener("click", subs("min"));
  removeButtonSec.addEventListener("click", subs("sec"));
});
