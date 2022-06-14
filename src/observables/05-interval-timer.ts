import {
  Observable,
  of,
  fromEvent,
  range,
  asyncScheduler,
  interval,
  timer,
} from 'rxjs';

const observer = {
  next: val => console.log(val),
  complete: () => console.log('complete'),
};

const timer$ = timer(2000);

const interval$ = interval(1000);

interval$.subscribe(observer);
timer$.subscribe(observer);
