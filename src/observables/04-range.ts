import {
  Observable,
  of,
  fromEvent,
  range,
  asyncScheduler,
  interval,
} from 'rxjs';

const src$ = of(1, 2, 3, 4, 5);
//comienza en el numero uno y son 100 emisiones
const src1$ = range(1, 100);

src1$.subscribe(console.log);
