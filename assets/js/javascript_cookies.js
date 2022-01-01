function getCookie(name) {
  var item = localStorage.getItem(name);
  if (item) {
    return item;
  } else {
    return null;
  }
}

function setCookie(name, value) {
  localStorage.setItem(name, value);
}
