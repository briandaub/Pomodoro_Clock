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

function degToRad(degree){
    var factor = Math.PI/180;
    return degree*factor;
}

function renderTimer(){
    var mil = 0;
    var sec = 0; 
    var min = 0; 
    var hour = 0;  
    
    //hours
    ctx.beginPath();
    ctx.arc(250, 250, 200, degToRad, degToRad(180));
    ctx.stroke();
    
    //minutes
    ctx.beginPath();
    ctx.arc(250, 250, 170, 0, degToRad(180));
    ctx.stroke();
    
    //seconds
    ctx.beginPath();
    ctx.arc(250, 250, 140, 0, degToRad(180));
    ctx.stroke();
    
}
renderTimer();