let hours = 00 ;
let minutes = 00 ;
let seconds = 00 ;
let milliSeconds = 00 ;
let interval;

const hoursContainer = document.getElementById('hours');
const minutesContainer = document.getElementById('minutes');
const secondsContainer = document.getElementById('seconds');
const milliSecondsContainer = document.getElementById('milliseconds');

const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

const startTimer = () => {
    clearInterval(interval);
    interval=setInterval(startCount , 10);
}

const stopTimer = () => {
    clearInterval(interval);
}

const resetTimer = () =>{
    milliSeconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    milliSecondsContainer.textContent = "00";
    secondsContainer.textContent = "00";
    minutesContainer.textContent = "00";
    hoursContainer.textContent = "00";
    clearInterval(interval);
}

function startCount(){
    milliSeconds++;
    if(milliSeconds < 10){
        milliSecondsContainer.innerHTML=`0${milliSeconds}`;
    }
        else{
    milliSecondsContainer.innerHTML=`${milliSeconds}`;
    }
    if(milliSeconds > 99){
    milliSeconds=0;
    milliSecondsContainer.innerHTML="00";
    seconds++;
    }
    else{
        milliSeconds.innerHTML=milliSeconds;
    }

    if(seconds < 10){
        secondsContainer.innerHTML=`0${seconds}`;
    }
    else if(seconds > 59){
    minutes++;
    seconds=0;
    secondsContainer.innerHTML="00";
    }
    else {
    secondsContainer.innerHTML=seconds;
    }    

    if(minutes < 10 ){
    minutesContainer.innerHTML=`0${minutes}`;
    }
    else if(minutes > 59){
        hours++;
        minutes=0;
        minutesContainer.innerHTML=minutes;
    }
    else{
        minutesContainer.innerHTML=minutes;
    }

    if(hours < 10){
        hoursContainer.innerHTML=`0${hours}`;
    }
    else{
        hoursContainer.innerHTML=hours;
    }
}

start.addEventListener("click" , startTimer);
stop.addEventListener("click" , stopTimer);
reset.addEventListener("click" , resetTimer);

