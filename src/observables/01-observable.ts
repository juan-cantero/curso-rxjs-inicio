import { Observable } from 'rxjs';

const observable$ = new Observable<string>(subscriber => {
  subscriber.next('hello');
  subscriber.next('world');
});

observable$.subscribe(console.log);
observable$.subscribe({
  next: value => console.log(value),
  error: error => console.warn(error),
  complete: () => console.log('complete'),
});

const intervalos$ = new Observable<number>(subscriber => {
  let n = 0;
  const interval = setInterval(() => {
    n++;
    subscriber.next(n);
  }, 1000);

  //este codigo se ejecuta luego del unsubscribe y sirve para limpiar la emision de valores de observable. (con rxjs no hace falta hacerlo a mano )
  return () => {
    clearInterval(interval);
    console.log('intervalo destruido');
  };
});

const subs = intervalos$.subscribe(num => console.log('Num: ', num));

setTimeout(() => {
  subs.unsubscribe();
}, 3000);
