"use strict";


let start = function () {
  let myData = new Date();
  let timediv1 = document.querySelector('.time1');
  let timediv2 = document.querySelector('.time2');
  let t = myData;
  let hour = t.getHours();
  let min = t.getMinutes();
  let sec = t.getSeconds();
  let y = t.getFullYear();
  let d = t.getDate();
  let mon = t.getMonth();
  let s;

  switch (mon) {
    case 0:
      s = " января ";
      break;
    case 1:
      s = " февраля ";
      break;
    case 2:
      s = " марта ";
      break;
    case 3:
      s = " апреля ";
      break;
    case 4:
      s = " мае ";
      break;
    case 5:
      s = " июня ";
      break;
    case 6:
      s = " июля ";
      break;
    case 7:
      s = " августа ";
      break;
    case 8:
      s = " сентября ";
      break;
    case 9:
      s = " октября ";
      break;
    case 10:
      s = " ноября ";
      break;
    case 11:
      s = " декабря ";
      break;
  }




  function getWeekDay(date) {
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return days[date.getDay()];
  }

  function addNumber(n) {
    let resultd = n.length < 2 ? n = '0' + n : false;
    return n;
  }
  d = String(d);
  mon = String(mon);
  sec = String(sec);
  min = String(min);
  hour = String(hour);

  let date = new Date();


  timediv1.innerHTML = ("Сегодня " + getWeekDay(date) + ", " + d + s + y + ", " + hour + "ч. " + min + "мин. " + addNumber(sec) + "сек. ");
  timediv2.innerHTML = (addNumber(d) + "." + addNumber(mon) + "." + addNumber(y) + " - " + addNumber(hour) + "." + addNumber(min) + "." + addNumber(sec));
  console.log(1);
};
setInterval(start, 1000);