function getCookie(name) {
  var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) {
    return match[2];
  } else {
    return null;
  }
}

function setCookie(name, value) {
  document.cookie = `${name}=${value}; expires=2147483647; path=/;`;
}
