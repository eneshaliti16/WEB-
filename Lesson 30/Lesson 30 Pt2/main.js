var wakeup;
var dstime;
var sleeptime;
var noon = 12;

function showCurrentTime(){
    var clock = document.getElementById('clock');
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var meridian = "AM"; 

    if(hours >= noon){
        meridian = "PM";
    }

    var clockTIme = hours + ":" + minutes + ":" + seconds + "" + meridian;

    clock.innerText = clockTime;
    changeImage();

};

var oneSecond = 1000;

setInterval(showCurrentTime,oneSecond);

function changeImage(){
    var time = new Date().getHours();
    console.log(time);

    var image = "img/ds_click.png";
    var imageHTML = document.getElementById("timeImage");


    if(time == wakeuptime){
        image = "img/morning.gif";
    }
    else if(time == dstime){
        image = "img/class.gif";
    }
    else if(time == sleeptime){
        image = "img/night.gif";
    }

    imageHTML.src = image;
};

function updateClock(){
    var wakeupTimeSelector = document.getElementById('wakeupTimeSelector');
    wakeupTimeSelector = wakeupTimeSelector.value;

    var dsTimeSelector = document.getElementById('dsTimeSelector');
    dsTimeSelector = dsTimeSelector.value;

    var sleepTimeSelector = document.getElementById('sleepTimeSelector');
    sleepTimeSelector = sleepTimeSelector.value;
}

var saveButton = document.getElementById('saveButton');

saveButton.addEventListener("click", updateClock)
