import {
  Observable,
  of,
  fromEvent,
  range,
  asyncScheduler,
  interval,
  timer,
  from,
} from 'rxjs';

/**
 * of = toma argumentos y genera una secuencia
 * from = array, promise, iterable, observable
 */

const observer = {
  next: val => console.log(val),
  complete: () => console.log('complete'),
};

const source$ = from(fetch('https://api.github.com/users/klerith'));

source$.subscribe(async resp => {
  const data = await resp.json();
  console.log(data);
});

const miGenerador = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const miIterable = miGenerador();

from(miIterable).subscribe(observer);
