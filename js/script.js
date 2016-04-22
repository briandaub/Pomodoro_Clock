var breakLength = 5;
var sessionLength = 25;
var timeRemaining = sessionLength;
var currentTime = sessionLength;
var sessionName = 'Session';
var running = false;
document.getElementById("sessionTime").innerHTML = sessionLength;
document.getElementById("breakTime").innerHTML = breakLength;
document.getElementById("session-name").innerHTML = sessionName;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.strokeStyle = '#28d1fa';
ctx.lineWidth = 17;
ctx.lineCap = 'butt';

//Convert degrees to radians for the purpose of our Arcs
function degToRad(degree) {
  var factor = Math.PI / 180;
  return degree * factor;
}

var totalSecs = Math.floor(currentTime * 60);
var hours, minutes, seconds, result;

//Convert total seconds into HH:MM:SS format
function secondsToTime() {
  hours = Math.floor(totalSecs / 3600);
  minutes = Math.floor(totalSecs % 3600 / 60);
  seconds = Math.floor(totalSecs % 3600 % 60);
  result = (hours > 0 ? hours + ":" + (minutes < 10 ? "0" : "") : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  return result;
}
secondsToTime();

//Increment or decrement the length of the Break 
function setBreakLength(time) {
  if (!running) {
    breakLength += time;
    if (breakLength < 0) {
      breakLength = 0;
    }
    renderTimer();
    document.getElementById('breakTime').innerHTML = breakLength;
  }
}

//Increment or decrement the length of the Session
function setSessionLength(time) {
  if (!running) {
    sessionLength += time;
    if (sessionLength < 0) {
      sessionLength = 0;
    }
    document.getElementById('sessionTime').innerHTML = sessionLength;
    currentTime = sessionLength;
    totalSecs = 60 * currentTime;
    renderTimer();
  }
}

//Draw the timer to the canvas
function renderTimer() {
  // Background
  ctx.fillStyle = '#333333';
  ctx.fillRect(0, 0, 500, 500);

  //hours
  ctx.strokeStyle = "#03A9F4";
  ctx.beginPath();
  ctx.arc(250, 250, 150, degToRad(270), degToRad((hours * 15) - 90));
  ctx.stroke();

  //minutes
  ctx.strokeStyle = "#FFEB3B";
  ctx.beginPath();
  ctx.arc(250, 250, 170, degToRad(270), degToRad((minutes * 6) - 90));
  ctx.stroke();

  //seconds
  ctx.strokeStyle = "#E91E63";
  ctx.beginPath();
  ctx.arc(250, 250, 190, degToRad(270), degToRad((seconds * 6) - 90));
  ctx.stroke();

  // Display
  ctx.font = "36px sans-serif";
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.fillText(secondsToTime(), 250, 260);
}
renderTimer();

var timer;

canvas.addEventListener('click', startPause);

function startPause() {
  if (!running) {
    timer = setInterval(runTimer, 1000);
  } else {
    clearInterval(timer);
    running = false;
  }
}

function runTimer() {
  running = true;
  if (totalSecs > 0) {
    totalSecs--;
    secondsToTime();
    renderTimer();
  } else {
    if (sessionName === "Break!") {
      currentTime = sessionLength;
      sessionName = "Session";
      document.getElementById("session-name").innerHTML = sessionName;
    } else if (sessionName === "Session") {
      currentTime = breakLength;
      sessionName = "Break!";
      document.getElementById("session-name").innerHTML = sessionName;
    }
    
    var notify = 'http://www.mediacollege.com/downloads/sound-effects/beep/beep-01.wav';
    var audio = new Audio(notify);
  	audio.play();
    
    
    totalSecs = Math.floor(currentTime * 60);
  }
}