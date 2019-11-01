window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
  }

  if (darkModeOn) {
    timeLine
      .add({
        targets: '.sun',
        d: [{ value: moonPath }]
      })
      .add({
        targets: '#darkMode',
        rotate: 320
      });
    document.querySelector('label.darkLabel').innerText = 'Dark Mode';
    dark = true;
    setCookie('color', 'dark', 60);
  } else if (lightModeOn || notSpecified || notSupported) {
    timeLine
      .add({
        targets: '.sun',
        d: [{ value: sunPath }]
      })
      .add({
        targets: '#darkMode',
        rotate: -320
      });
    document.querySelector('label.darkLabel').innerText = 'Light Mode';
    dark = false;
    setCookie('color', 'light', 60);
  }
};
