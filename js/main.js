window.addEventListener('DOMContentLoaded', event => {
    setTime();
});

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
    document.getElementById('date').innerText = (d + "/" + m + "/" + y);
    setTimeout(setTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i;
}
