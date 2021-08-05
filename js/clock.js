const clock = document.querySelector("#clock");
const days = document.querySelector(".day");

function lessThenTen(value) {
  if (value < 10) {
    return `0${value}`;
  } else {
    return value;
  }
}

function realTime() {
  const curTime = new Date();
  const hour = curTime.getHours();
  const minutes = curTime.getMinutes();
  clock.innerText = `${lessThenTen(hour)}:${lessThenTen(minutes)}`;
  const year = curTime.getFullYear();
  const mon = curTime.getMonth();
  const day = curTime.getDay();
  days.innerText = `${year}년 ${lessThenTen(mon + 1)}월 ${lessThenTen(day + 1)}일`;
}

realTime();
setInterval(realTime, 1000);
