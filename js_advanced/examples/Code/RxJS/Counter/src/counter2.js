import { Observable } from 'rxjs/Observable';

function startCounter(initialValue) {
  console.log('initialize');
  let counter = initialValue;
  return new Observable(observer => {
    console.log('subscribe');
    const token = setInterval(() => {
      counter += 1;
      observer.next(counter);
    }, 200);

    return () => {
      console.log('unsubscribe');
      clearInterval(token);
    };
  });
}

const counter = document.getElementById('counter2');
counter.innerHTML = `<h1>Counter 2</h1>
    <div>Counter: <span id="counter2Value">0</span></div>
    <div class="btn-group">
      <button type="button" class="btn btn-primary" id="counter2Start">Start</button>
      <button type="button" class="btn btn-danger" id="counter2Stop">Stop</button>
    </div>`;

const counterValue = document.getElementById('counter2Value');
const startBtn = document.getElementById('counter2Start');
const stopBtn = document.getElementById('counter2Stop');

let isRunning = false;
let stopCounter;
let value = 0;

function start() {
  if (!isRunning) {
    isRunning = true;
    stopCounter = startCounter(value).subscribe(val => {
      value = val;
      counterValue.textContent = val;
    });
  }
}

function stop() {
  if (stopCounter) {
    isRunning = false;
    stopCounter.unsubscribe();
  }
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
