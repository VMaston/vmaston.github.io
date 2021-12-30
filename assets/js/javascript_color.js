let i = 0;
const colors = ['yellowgreen', 'lightcoral', 'gold'];

function colorPick() {
  if (i >= 0 && i < colors.length - 1) {
    i++;
  } else {
    i = 0;
  }
  document.documentElement.style.setProperty('--accent', `${colors[i]}`);
}
