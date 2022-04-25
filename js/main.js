  const number = document.getElementById('main__h2')
  const addBtn = document.getElementById('main__button-1');
  const substractBtn = document.getElementById('main__button-2');
  const startBtn = document.getElementById('main__button-3');
  const stopBtn = document.getElementById('main__button-4');
  const resetBtn = document.getElementById('main__button-5');

  let pause = false;
  let count = 0;

  number.innerText = `${count} seg`;

  addBtn.onclick = () => {
    count += 5;
    number.innerText = `${count} seg`;
    if (count === 0) {
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  }

  substractBtn.onclick = () => {
    count -= 5;
    number.innerText = `${count} seg`;
    if (count < 0) {
      count = 0;
      number.innerText = `${count} seg`;
    }
  }

  startBtn.onclick = () => {
    addBtn.disabled = true;
    substractBtn.disabled = true;
    startBtn.disabled = true;
    stopBtn.disabled = false;
    startBtn.innerText = 'Start';
    startBtn.style.display = 'none';
    stopBtn.style.display = 'block';
    pause = !pause
    counter = setInterval(() => {
      if (count === 0) {
        substractBtn.disabled = false;
        addBtn.disabled = false;
        startBtn.disabled = false;
        stopBtn.disabled = true;
        startBtn.innerText = 'Start';
        startBtn.style.display = 'block';
        stopBtn.style.display = 'none';
        clearInterval(counter);
      } else {
        count--;
        number.innerText = `${count} seg`;
      }
    }, 1000);
  }

  stopBtn.style.display = 'none';
  stopBtn.disabled = true;
  stopBtn.onclick = () => {
    //pause is false
    pause = !pause;
    if (!pause) { //pause is true by the !pause
      clearInterval(counter);
      stopBtn.innerText = 'Pause';
      startBtn.disabled = false;
      stopBtn.disabled = true;
      addBtn.disabled = false;
      substractBtn.disabled = false;
      startBtn.innerText = 'Reanudar';
      startBtn.style.display = 'block';
      stopBtn.style.display = 'none';
      resetBtn.disabled = false;
    }
  }

  resetBtn.disabled = true;
  resetBtn.onclick = () => {
    count = 0;
    number.innerText = `${count} seg`;
    addBtn.disabled = false;
    substractBtn.disabled = false;
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;
    startBtn.innerText = 'Start';
    startBtn.style.display = 'block';
    stopBtn.style.display = 'none';
    clearInterval(counter);
  }
