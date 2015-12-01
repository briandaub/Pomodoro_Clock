var breakLength = 5;
var sessionLength = 25;
var timeRemaining = sessionLength;
var sessionName = 'Session';

function setBreakLength(time){
    breakLength += time;
    if(breakLength < 1){
        breakLength = 1;
    }
    document.getElementById('breakTime').innerHTML = breakLength;
}

function setSessionLength(time){
    sessionLength += time;
    if(sessionLength < 1){
        sessionLength = 1;
    }
    document.getElementById('sessionTime').innerHTML = sessionLength;
}

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.strokeStyle = '#28d1fa';
ctx.lineWidth = 17;
ctx.lineCap = 'round';

function degToRad(degree){
    var factor = Math.PI/180;
    return degree*factor;
}

var secs = timeRemaining * 60;
var hours = 0;
var minutes = 0;
var seconds = 0;
var milliseconds = seconds*1000;
var newSeconds = seconds+(milliseconds/1000);

function convertSeconds(secs){
    hours = Math.floor(seconds / 3600);
    
    var minDivisor = seconds % 3600;
    minutes = Math.floor(minDivisor / 60);
    
    var secDivisor = minDivisor & 60;
    seconds = Math.ceil(secDivisor);
    
    return (
      (hours > 0 ? hours + ":" + (minutes < 10 ? "0" : "") : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds
    );
}

function renderTimer(){
    
    // Background
    ctx.fillStyle = '#333333';
    ctx.fillRect(0, 0, 500, 500);
    
    //hours
    ctx.beginPath();
    ctx.arc(250, 250, 180, degToRad(270), degToRad((hours*15)-90));
    ctx.stroke();
    
    //minutes
    ctx.beginPath();
    ctx.arc(250, 250, 150, degToRad(270), degToRad((minutes*6)-90));
    ctx.stroke();
    
    //seconds
    ctx.beginPath();
    ctx.arc(250, 250, 120, degToRad(270), degToRad(seconds*6)-90);
    ctx.stroke();
    
    
    // Display
    ctx.fillText(convertSeconds())
}
setInterval(renderTimer, 40);