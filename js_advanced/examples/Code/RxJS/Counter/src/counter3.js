import { interval } from 'rxjs/observable/interval';
import { scan } from 'rxjs/operators';

function startCounter(initialValue) {
  return interval(200).pipe(scan(counter => counter + 1, initialValue));
}

const counter = document.getElementById('counter3');
counter.innerHTML = `<h1>Counter 3</h1>
    <div>Counter: <span id="counter3Value">0</span></div>
    <div class="btn-group">
      <button type="button" class="btn btn-primary" id="counter3Start">Start</button>
      <button type="button" class="btn btn-danger" id="counter3Stop">Stop</button>
    </div>`;

const counterValue = document.getElementById('counter3Value');
const startBtn = document.getElementById('counter3Start');
const stopBtn = document.getElementById('counter3Stop');

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
