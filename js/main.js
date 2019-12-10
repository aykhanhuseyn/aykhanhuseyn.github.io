window.onload = () => {
  'use strict';

  year.innerText = (new Date()).getFullYear();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
  }
};
