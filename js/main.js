window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
  }

  //This section checks if css applied mark mode, then applies dark mode moon and text to DOM
  const timeDark = anime.timeline({
    duration: 850,
    easing: 'easeOutExpo'
  });
  if (darkModeOn) {
    timeDark.add({
      targets: '.sun',
      d: [{ value: moonPath }]
    });
    document.querySelector('label.darkLabel').innerText = 'Dark Mode';
    dark = true;
    setCookie('color', 'dark', 60);
  } else {
    timeDark.add({
      targets: '.sun',
      d: [{ value: sunPath }]
    });
    document.querySelector('label.darkLabel').innerText = 'Light Mode';
    dark = false;
    setCookie('color', 'light', 60);
  }
};
