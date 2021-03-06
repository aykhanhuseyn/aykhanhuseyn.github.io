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
function turnDarkOn() {
  timeLine
    .add({
      targets: '.sun',
      d: [{ value: dark ? sunPath : moonPath }]
    })
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
  if (dark) {
    dark = false;
    setCookie('color', 'light', 60);
  } else {
    dark = true;
    setCookie('color', 'dark', 60);
  }
}
function labelShow() {
  document.querySelector('.darkLabel').classList.toggle('darkRiver');
}

const darkModeOn = window.matchMedia('(prefers-color-scheme: dark)').matches;

//This section checkes cookie and os preferences and applies modes

if (getCookie('color') === 'dark') {
  if (darkModeOn) {
    timeLine.add({
      targets: '.sun',
      d: [{ value: moonPath }]
    });
    document.querySelector('label.darkLabel').innerText = 'Light Mode';
    dark = true;
    setCookie('color', 'dark', 60);
  } else {
    dark = false;
    turnDarkOn();
  }
} else if (getCookie('color') === 'light') {
  if (darkModeOn) {
    dark = true;
    turnDarkOn();
  } else {
    timeDark.add({
      targets: '.sun',
      d: [{ value: sunPath }]
    });
    document.querySelector('label.darkLabel').innerText = 'Dark Mode';
    dark = false;
    setCookie('color', 'light', 60);
  }
} else {
  if (darkModeOn) {
    timeLine.add({
      targets: '.sun',
      d: [{ value: moonPath }]
    });
    document.querySelector('label.darkLabel').innerText = 'Light Mode';
    dark = true;
    setCookie('color', 'dark', 60);
  }
}

//This section listens window.matchMedia change events and applies moon/sun pathes
window.matchMedia('(prefers-color-scheme: dark)').addListener(e => {
  e.matches &&
    (dark =
      true &&
      setCookie('color', 'dark', 60) &&
      (document.querySelector('label.darkLabel').innerText = 'Dark Mode') &&
      timeLine.add({
        targets: '.sun',
        d: [{ value: moonPath }]
      }));
});
window.matchMedia('(prefers-color-scheme: light)').addListener(e => {
  e.matches &&
    (dark =
      false &&
      setCookie('color', 'light', 60) &&
      (document.querySelector('label.darkLabel').innerText = 'Light Mode') &&
      timeLine.add({
        targets: '.sun',
        d: [{ value: sunPath }]
      }));
});
