let ten = 0;
let sec = 0;
let min = 0;
const tens = document.querySelector('.stopwatch .tens');
const seconds = document.querySelector('.stopwatch .second');
const minutes = document.querySelector('.stopwatch .min');

const startBtn = document.querySelector('.startBtn');
const stopBtn = document.querySelector('.stopBtn');

const resetBtn = document.querySelector('.resetBtn');

let timer;

startBtn.addEventListener('click', () => {
  console.log('click Event trigger', startBtn);
  timer = setInterval(showTimer, 10);
});

function showTimer() {
  ten++;
  if (ten <= 9) {
    tens.textContent = '0' + ten;
  } else if (ten <= 99) {
    tens.innerHTML = ten;
  }
  if (ten > 99) {
    sec++;
    seconds.textContent = ('0' + sec).slice(-2);
    ten = 0;
    if (sec >= 60) {
      min++;
      minutes.textContent = ('0' + min).slice(-2);
      sec = 0;
    }
  }
}

stopBtn.addEventListener('click', () => {
  clearInterval(timer);
});

resetBtn.addEventListener('click', () => {
  ten = '00';
  sec = '00';
  min = '00';
  tens.textContent = ten;
  seconds.textContent = sec;
  minutes.textContent = min;
});
