function startCounter(initialValue, cb) {
  let counter = initialValue;
  const token = setInterval(() => {
    counter += 1;
    cb(counter);
  }, 200);

  return () => {
    clearInterval(token);
  };
}

const counter = document.getElementById('counter1');
counter.innerHTML = `<h1>Counter 1</h1>
    <div>Counter: <span id="counter1Value">0</span></div>
    <div class="btn-group">
      <button type="button" class="btn btn-primary" id="counter1Start">Start</button>
      <button type="button" class="btn btn-danger" id="counter1Stop">Stop</button>
    </div>`;

const counterValue = document.getElementById('counter1Value');
const startBtn = document.getElementById('counter1Start');
const stopBtn = document.getElementById('counter1Stop');

let isRunning = false;
let stopCounter;
let value = 0;

function start() {
  if (!isRunning) {
    isRunning = true;
    stopCounter = startCounter(value, val => {
      value = val;
      counterValue.textContent = val;
    });
  }
}

function stop() {
  if (stopCounter) {
    isRunning = false;
    stopCounter();
  }
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
