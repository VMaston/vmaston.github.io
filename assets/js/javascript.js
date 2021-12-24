/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  var button = document.getElementById('button');
  var main = document.getElementById('main');
  var bio = document.getElementById('bio');

  button.onmouseout = '';
  bio.style.display = '';
  main.style.gridTemplateColumns = 'auto 0 25%';

  button.setAttribute('onClick', 'javascript: closeNav();');
  button.style.opacity = 0;
  button.style.marginRight = '';
  button.style.pointerEvents = 'none';
  button.style.backgroundImage = '';
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  var button = document.getElementById('button');
  var main = document.getElementById('main');
  var bio = document.getElementById('bio');

  bio.style.display = 'none';
  main.style.gridTemplateColumns = 'auto 30px 0';

  button.onmouseover = function () {
    main.style.gridTemplateColumns = 'auto 40px 0';
  };

  button.onmouseout = function () {
    main.style.gridTemplateColumns = 'auto 30px 0';
  };

  button.setAttribute('onClick', 'javascript: openNav();');
  button.style.opacity = 100;
  button.style.marginRight = '-5px';
  button.style.pointerEvents = 'auto';
  button.style.backgroundImage = 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6))';
  button.innerHTML = '<';
}
