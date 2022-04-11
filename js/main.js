document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.querySelector('.main__button-1');
  const removeButton = document.querySelector('.main__button-2');
  const mainH2 = document.querySelector('.main__h2');
  const startButton = document.querySelector('.main__button-3');
  let contador = 0;
  mainH2.textContent = `${contador} min`;

  const add = () => {
    contador += 5;
    mainH2.textContent = `${contador} min`;
  };

  const substract = () => {
    contador -= 5;
    if (contador < 0) contador = 0;
    mainH2.textContent = `${contador} min`;
  };

  const start = () => {
    addButton.disabled = true;
    removeButton.disabled = true;
    const interval = setInterval(() => {
      if (contador === 0) {
        clearInterval(interval);
        addButton.disabled = false;
        removeButton.disabled = false;
      } else {
        contador -= 1;
        mainH2.textContent = `${contador} min`;
      }
    }, 1000);
  };


  addButton.addEventListener('click', add);
  removeButton.addEventListener('click', substract);
  startButton.addEventListener('click', start);

})
