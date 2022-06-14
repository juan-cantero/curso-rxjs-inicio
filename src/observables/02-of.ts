import { Observable, of } from 'rxjs';

const obs$ = of(1, 2, 3, 4, 5, 6);
const obs2$ = of(
  [1, 2],
  { a: 1, b: 2 },
  function () {},
  true,
  Promise.resolve(true)
);

obs2$.subscribe({
  next: val => console.log(val),
  complete: () => console.log('complete'),
});
