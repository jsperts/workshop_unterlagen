import { interval } from 'rxjs/observable/interval';
import { scan, mapTo, switchMap, takeUntil } from 'rxjs/operators';
import { merge } from 'rxjs/observable/merge';
import { fromEvent } from 'rxjs/observable/fromEvent';

function startCounter(initialValue) {
  return interval(200).pipe(scan(counter => counter + 1, initialValue));
}

const counter = document.getElementById('counter4');
counter.innerHTML = `<h1>Counter 4</h1>
    <div>Counter: <span id="counter4Value">0</span></div>
    <div class="btn-group">
      <button type="button" class="btn btn-primary" id="counter4Start">Start</button>
      <button type="button" class="btn btn-danger" id="counter4Stop">Stop</button>
      <button type="button" class="btn btn-danger" id="counter4Reset">Reset</button>
    </div>`;

const counterValue = document.getElementById('counter4Value');
const startBtn = document.getElementById('counter4Start');
const stopBtn = document.getElementById('counter4Stop');
const resetBtn = document.getElementById('counter4Reset');

let value = 0;

const start$ = fromEvent(startBtn, 'click');
const stop$ = fromEvent(stopBtn, 'click');
const reset$ = fromEvent(resetBtn, 'click');

const inner$ = () => startCounter(value).pipe(takeUntil(stop$));

this.subscription = merge(
  start$.pipe(switchMap(inner$)),
  reset$.pipe(mapTo(0)),
).subscribe(val => {
  value = val;
  counterValue.textContent = val;
});
