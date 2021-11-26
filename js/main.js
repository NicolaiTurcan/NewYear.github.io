'use strict'
const daySelector = document.querySelector('.day');
const hourSelector = document.querySelector('.hour');
const minuteSelector = document.querySelector('.minute');
const secondSelector = document.querySelector('.second');

const timer = () =>{
  const countDate = new Date('Jan 01, 2022 00:00:00').getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  if (textDay < 10){
    daySelector.innerText = ("0" + textDay);
  } else daySelector.innerText = textDay;

  if (textHour < 10){
    hourSelector.innerText = ("0" + textHour);
  } else hourSelector.innerText = textHour;

  if (textMinute < 10){
    minuteSelector.innerText = ("0" + textMinute);
  } else minuteSelector.innerText = textMinute;

  if (textSecond < 10){
    secondSelector.innerText = ("0" + textSecond);
  } else secondSelector.innerText = textSecond;
}

setInterval(timer, 1000);
