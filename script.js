const futureDate = new Date("December 31, 2024 12:00:00");
const timeNowDiv = document.getElementById("timeNow");
const timeLeftDiv = document.getElementById("timeLeft");

getTimeNow = () => {
  let date = new Date();
  let h = date.getHours(); // 0 - 23
  let m = date.getMinutes(); // 0 - 59
  let s = date.getSeconds(); // 0 - 59
  let session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let time = h + ":" + m + ":" + s + " " + session;
  return time;
};

getTimeLeft = () => {
  let seconds = Math.floor((futureDate - new Date()) / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  let weeks = Math.floor(days / 7);

  hours = hours - days * 24;
  minutes = minutes - days * 24 * 60 - hours * 60;
  seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;

  let timeLeft =
  "Year Left: " +
  (100.0 * days / 365).toFixed(2) +
  "%⏳\n" +
  weeks +
  " Weekend📆 \n OR \n" +
  days +
  " Days🗓️\n" +
  hours +
  " Hours " +
  minutes +
  ":" +
  seconds +
  " Minutes ";

  return timeLeft;
};

setInterval(() => {
  timeNowDiv.innerText = getTimeNow();
  timeLeftDiv.innerText = getTimeLeft();
}, 500);

setInterval();