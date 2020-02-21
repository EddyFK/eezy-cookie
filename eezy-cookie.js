/**
**  Eezy Cookie v1.0
**/

//Get Cookie
window.getCookie = function(name) {
  var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}

//Set Cookie
window.setCookie = function(name, value, days) {
  var d = new Date;
  d.setTime(d.getTime() + 24*60*60*1000*days);
  document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString()
}

//Delete Cookie
window.deleteCookie = function(name) { setCookie(name, '', -1); }
