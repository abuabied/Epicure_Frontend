export function createCookie(name, value, days=30) {
  var expires;
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toGMTString();
  } else {
    expires = "";
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

export function getCookie(c_name) {
  if (document.cookie.length > 0) {
    let c_start = document.cookie.indexOf(c_name + "=");
    if (c_start !== -1) {
      c_start = c_start + c_name.length + 1;
      let c_end = document.cookie.indexOf(";", c_start);
      if (c_end === -1) {
        c_end = document.cookie.length;
      }
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return "";
}

export function listenCookieChange(callback, interval = 1000) {
  let lastCookie = document.cookie;
  setInterval(() => {
    let cookie = document.cookie;
    if (cookie !== lastCookie) {
      try {
        callback({ oldValue: lastCookie, newValue: cookie });
      } finally {
        lastCookie = cookie;
      }
    }
  }, interval);
}