const windowWidth = window.matchMedia('(min-width: 768px)');
windowWidth.addEventListener('change', () => {
  if (windowWidth.matches) {
    dropdown();
  } else {
    return;
  }
});

function dropdown() {
  let x = document.getElementsByClassName('menu');

  let i;

  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'block';
  }
}

window.onclick = function (event) {
  if (!event.target.matches('.mobile-dropdown') && !windowWidth.matches) {
    let x = document.getElementsByClassName('menu');
    let i;

    for (i = 0; i < x.length; i++) {
      x[i].style.display = 'none';
    }
  }
};
