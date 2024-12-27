let i = 0;

const msgInterval = setInterval(() => {
  i++;
  console.log(`message ${i}`);
  if (i >= 5) {
    clearInterval(msgInterval);
  }
}, 1000);

// ==============================1==================================

const box = document.getElementById('box1');

function anim() {
  box.style.width = '100px';
  setTimeout(() => {
    box.style.width = '200px';
  }, 1000);
}

setInterval(() => {
  anim();
}, 3000);

// =======================================2==============================

const start = document.getElementById('btn');
const clickNum = document.getElementById('clicks');
const timeLeft = document.getElementById('time_left');
const clicker = document.getElementById('clicker');

let time = 10;
let clicks = 0;

start.addEventListener('click', (e) => {
  e.preventDefault();
  const timer = setInterval(() => {
    time--;
    timeLeft.textContent = time;
    if (time == 0) {
      clearInterval(timer);
      clicker.style.display = 'none';
    }
  }, 1000);
  clicker.addEventListener('click', () => {
    clicks++;
    clickNum.textContent = clicks;
  });
});

// ======================================3=========================================

const input = document.getElementById('sec');
const submit = document.getElementById('submit');
const timer = document.getElementById('timer');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  sec = parseInt(input.value);
  const interval = setInterval(() => {
    sec--;
    timer.textContent = sec;
    if (sec == 0) {
      timer.textContent = 'Час вичерпано';
      clearInterval(interval);
    }
  }, 1000);
});
