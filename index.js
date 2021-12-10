var clock = document.getElementById("clock");
window.addEventListener("load", time);

function time(){
  var date = new Date();
  var hour = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var ampm = hour >= 12 ? 'PM' : 'AM';

  hour = hour % 12;
  hour = hour ? hour : '12';
  hour = hour < 10 ? '0' + hour : hour;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0'+ seconds : seconds;

  clock.innerText = hour + ":" + minutes + ":" + seconds + " " + ampm;
}

setInterval(time, 1000);