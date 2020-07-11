var hours = document.getElementById("hrs");
var minutes = document.getElementById("min");
var seconds = document.getElementById("sec");
var milliSeconds = document.getElementById("milli");
var hr = 0;
var min = 0;
var sec = 0;
var milli = 0;
var interval;

var a = document.getElementById("start");
function timer(){
    milli++
    milliSeconds.innerHTML = milli;
    if(milli >= 100){
        sec++;
        milli = 0;
        seconds.innerHTML = sec;
    }else if(sec >= 60){
        sec = 0;
        min++;
        minutes.innerHTML = min;
    }else if(min >= 60){
        min = 0;
        hr++;
        hours.innerHTML = hr;
    }
}
function start(){
    interval = setInterval(timer,10);
    a.disabled = true;
}

function pause(){
    clearInterval(interval);
    a.disabled = false;
}

function reset(){
    min = "00";
    sec = "00";
    hr = "00";
    milli = "00";
    seconds.innerHTML = sec;
    milliSeconds.innerHTML = milli;
    minutes.innerHTML = min;
    hours.innerHTML = hr;
    pause()
}