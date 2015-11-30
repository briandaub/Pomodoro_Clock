var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function renderTimer(){
    var mil = 0;
    var sec = 0; 
    var min = 0; 
    var hour = 0;  
    
}

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