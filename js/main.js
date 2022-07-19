window.onload = () => {
  "use strict";

  const YEAR = 1000 * 60 * 60 * 24 * 365.25;
  const BIRTH_DATE = new Date("1995-03-21");

  year.innerText = new Date().getFullYear();
  age.innerText = parseInt((new Date() - BIRTH_DATE) / YEAR);

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
  }
};
