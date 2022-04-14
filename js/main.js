document.addEventListener('DOMContentLoaded', function () {
  const number = document.getElementById('main__h2')
  const addBtn = document.getElementById('main__button-1');
  const substractBtn = document.getElementById('main__button-2');
  const startBtn = document.getElementById('main__button-3');
  const stopBtn = document.getElementById('main__button-4');

  let pause = false;
  let count = 0;


  number.innerText = `${count} seg`;

  addBtn.onclick = () => {
    count += 5;
    number.innerText = `${count} seg`;
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
    startBtn.disabled = false;
    stopBtn.disabled = false;
    counter = setInterval(() => {
      if (count === 0) {
        addBtn.disabled = false;
        substractBtn.disabled = false;
        startBtn.disabled = false;
        stopBtn.disabled = true;
        clearInterval(counter);
      } else {
        count--;
        number.innerText = `${count} seg`;
      }
    }, 1000);
  }

  stopBtn.disabled = true;
  stopBtn.onclick = () => {
    pause = !pause;
    if (pause) {
      clearInterval(counter);
      stopBtn.innerText = 'Reanudar';
    } else {
      counter = setInterval(startBtn.onclick, 1000);
      stopBtn.innerText = 'Stop';
    }
  }


})
