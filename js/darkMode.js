const sunPath =
    "M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50Z";

const moonPath =
    "M28 48C28 84 50 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C50 0 28 13.5 28 48Z";

const darkMode = document.querySelector('#darkMode');
let dark = false;

darkMode.addEventListener("click", () => {

    const timeLine = anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
    });

    timeLine
        .add({
            targets: ".sun",
            d: [{value: dark ? sunPath : moonPath}]
        })
        .add({
            targets: "#darkMode",
            rotate: dark ? -320 : 320
        }, "-= 350")
        .add({
            targets: ".main",
            backgroundColor: dark ? "rgb(222,222,222)" : "rgb(22,22,22)",
            color: dark ? "rgb(22,22,22)" : "rgb(222,222,222)"
        }, "-= 700")
        .add({
            targets: "body",
            backgroundColor: dark ? "#333333" : "#111111"
        }, "-= 700")
        .add({
            targets: "a",
            color: dark ? "#212529" : "rgb(222,253,134)"
        }, "-= 700");

    document.querySelector("label.darkLabel").innerText = dark?"Dark Mode":"Light Mode";
    dark = !dark;
});

//////////////////////////
function labelShow() {
    document.querySelector('.darkLabel').classList.toggle('darkRiver');
}