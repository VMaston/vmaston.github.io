let i = 0;
const colors = ['lightcoral', 'yellowgreen', 'gold', 'lightblue'];

currentColor = getCookie('color');
if (currentColor !== null) {
  i = currentColor;
  console.log(i);
  setColor();
}

function colorPick() {
  if (i >= 0 && i < colors.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setColor();
}

function setColor() {
  document.documentElement.style.setProperty('--accent', `${colors[i]}`);
  setCookie('color', i);
}
