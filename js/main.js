let overlay = document.getElementById("loadingScreen");
let dustingDiv = function(){overlay.style.display = 'none'};
window.addEventListener('load', function(){
    overlay.classList.add("disappear");
    setTimeout( dustingDiv,2000 );
});
window.addEventListener('DOMContentLoaded', function() {
    setTime();
    batteryManager();
    marginCalculator();
});
window.addEventListener("onresize",function(){ marginCalculator(); });

function setTime() {
    var today = new Date();
    let monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let y = today.getFullYear();
    let m = monthList[today.getMonth()];
    let d = today.getDate();
    let h = today.getHours();
    let min = today.getMinutes();
    min = checkTime(min);
    document.getElementById('time').innerText = (h + ":" + min);
    document.getElementById('mobileTime').innerText = (h + ":" + min);
    document.getElementById('date').innerText = (d + " " + m + " " + y);
    setTimeout(setTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i;
}

// Set the date we're counting down to
const endDate = new Date("May 28, 2019 20:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function () {
    // Get todays date and time
    let today = new Date().getTime();
    // Find the distance between now and the count down date
    let distance = endDate - today;
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Display the result in the element with id="demo"
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = checkTime(hours);
    document.getElementById("minutes").innerText = checkTime(minutes);
    document.getElementById("seconds").innerText = checkTime(seconds);
    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".timer").innerHTML = "COUNTDOWN IS FINISHED";
    }
}, 1000);

/////////////////////////////////////////////////////////
function batteryManager() {
    setInterval(function () {
        navigator.getBattery().then(function (battery) {
            let batteryManager = document.getElementById('batteryManager');
            let batteryLevel = battery.level * 100;
            if(batteryLevel>75){
                batteryManager.classList = "fas fa-battery-full px-1";
            }else if (batteryLevel>50) {
                batteryManager.classList = "fas fa-battery-three-quarters px-1";
            }else if (batteryLevel>25) {
                batteryManager.classList = "fas fa-battery-half px-1";
            }else if (batteryLevel>0) {
                batteryManager.classList = "fas fa-battery-quarter px-1";
            }else {
                batteryManager.classList = "fas fa-battery-empty px-1";
            }
            batteryManager.innerText = " "+batteryLevel+"%";
        });
    }, 500);
}

window.addEventListener("orientationchange", function (e) {
    console.log(e.screen.angle);
});

function marginCalculator() {
    let w = window.innerWidth;
    let customMargin;
    let homeIcons = document.querySelectorAll("div.homeIcons")
    if (w > 330 && w <= 420) {
        customMargin = ((w-320)/8)+10;
        marginSetter(homeIcons,customMargin);
    } else if (w > 420 && w <= 700) {
        customMargin = ((w-480)/10)+10;
        marginSetter(homeIcons,customMargin);
    } else if (w > 700 && w <= 1000) {
        customMargin = ((w-560)/14)+10;
        marginSetter(homeIcons,customMargin);
    }
}
function marginSetter(homeIcons,customMargin) {
    for(let homeIcon of homeIcons){
        homeIcon.style.marginRight = (customMargin + "px");
        homeIcon.style.marginLeft = (customMargin + "px");
        homeIcon.style.marginTop = ("10px");
        homeIcon.style.marginBottom = ("10px");
    }
}
// window.addEventListener("on")