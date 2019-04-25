function setTime() {
    let today = new Date();
    let monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let y = today.getFullYear();
    let m = monthList[today.getMonth()];
    let d = today.getDate();
    let h = today.getHours();
    let min = today.getMinutes();
    min = checkTime(min);
    document.getElementById('time').innerText = (h + ":" + min);
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
const endDate = new Date("May 25, 2019 21:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

    // Get todays date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = endDate - now;

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
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);