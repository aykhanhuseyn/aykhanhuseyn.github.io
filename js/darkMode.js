const sunPath =
  'M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50Z';

const moonPath =
  'M28 48C28 84 50 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C50 0 28 13.5 28 48Z';

const darkMode = document.querySelector('#darkMode');
let dark = false;

const timeLine = anime.timeline({
  duration: 750,
  easing: 'easeOutExpo'
});

function turnDarkOn() {
  timeLine
    .add({
      targets: '.sun',
      d: [{ value: dark ? sunPath : moonPath }]
    })
    .add(
      {
        targets: '#darkMode',
        rotate: dark ? -320 : 320
      },
      '-= 350'
    )
    .add(
      {
        targets: '.main',
        backgroundColor: dark ? 'rgb(222,222,222)' : 'rgb(22,22,22)',
        color: dark ? 'rgb(22,22,22)' : 'rgb(222,222,222)'
      },
      '-= 700'
    )
    .add(
      {
        targets: 'body',
        backgroundColor: dark ? '#333333' : '#111111'
      },
      '-= 700'
    )
    .add(
      {
        targets: 'a',
        color: dark ? '#212529' : 'rgb(222,253,134)'
      },
      '-= 700'
    );

  document.querySelector('label.darkLabel').innerText = dark
    ? 'Dark Mode'
    : 'Light Mode';
  dark = dark ? false : true;
  setCookie('color', dark ? 'dark' : 'light', 60);
}
function labelShow() {
  document.querySelector('.darkLabel').classList.toggle('darkRiver');
}
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}
function getCookie(cname) {
  var name = cname + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

const darkModeOn = window.matchMedia('(prefers-color-scheme: dark)').matches;
const lightModeOn = window.matchMedia("(prefers-color-scheme: light)").matches;
const notSpecified = window.matchMedia("(prefers-color-scheme: no-preference)").matches;
const notSupported = !isDarkMode && !isLightMode && !isNotSpecified;


if (getCookie('color') !== '') {
  if (darkModeOn) {
    dark = false;
    turnDarkOn();
  } else if(lightModeOn || notSpecified || notSupported) {
    dark = true;
    turnDarkOn();
  }
} else if (getCookie('color') === 'dark') {
  dark = false;
  turnDarkOn();
} else if (getCookie('color') === 'light') {
  dark = true;
  turnDarkOn();
}

window.matchMedia("(prefers-color-scheme: dark)").addListener(e => {
  e.matches && ( 
    dark=false && 
    turnDarkOn() 
    );
});
window.matchMedia("(prefers-color-scheme: light)").addListener(e => {
  e.matches && ( 
    dark=true &&
    turnDarkOn()
    );
});
