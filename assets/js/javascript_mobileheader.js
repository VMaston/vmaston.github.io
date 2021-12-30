const windowWidth = window.matchMedia('(min-width: 768px)');
windowWidth.addEventListener('change', () => {
  if (windowWidth.matches) {
    dropdown();
  } else {
    return;
  }
});

window.onclick = function (event) {
  minimize(event);
};

function dropdown() {
  let x = document.getElementsByClassName('menu');

  let i;

  for (i = 0; i < x.length; i++) {
    x[i].classList.toggle('show');
  }
}

function minimize(event) {
  if (!event.target.matches('.mobile-dropdown') && !windowWidth.matches) {
    let x = document.getElementsByClassName('menu');
    let i;

    for (i = 0; i < x.length; i++) {
      x[i].classList.remove('show');
    }
  }
}
