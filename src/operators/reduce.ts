import { interval, reduce, take } from 'rxjs';

const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acc, total) => acc + total;

const total = numbers.reduce(totalReducer, 0);

console.log(total);

interval(1000)
  .pipe(take(3), reduce(totalReducer, 0))
  .subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete'),
  });
