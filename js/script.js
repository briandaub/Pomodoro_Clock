var breakLength = 5;
var sessionLength = 25;

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
ctx.strokeStyle = '28d1fa';

function degToRad(degree){
    var factor = Math.PI/180;
    return degree*factor;
}

function renderTimer(){
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    var milliseconds = 0;
    var newSeconds = seconds+(milliseconds/1000);
    
    // Background
    ctx.fillStyle = '333333';
    ctx.fillRect(0,0,500,500);
     
    
    //hours
    ctx.beginPath();
    ctx.arc(250, 250, 200, degToRad(270), degToRad((hours*15)-90));
    ctx.stroke();
    
    //minutes
    ctx.beginPath();
    ctx.arc(250, 250, 170, degToRad(270), degToRad((minutes*6)-90));
    ctx.stroke();
    
    //seconds
    ctx.beginPath();
    ctx.arc(250, 250, 140, degToRad(270), degToRad(seconds*6)-90);
    ctx.stroke();
    
}
setInterval(renderTimer, 40);