import { first, fromEvent, map, take, tap } from 'rxjs';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
  .pipe(
    tap<MouseEvent>(),
    map(({ clientX, clientY }) => ({ clientY, clientX })),
    first(clients => clients.clientY >= 150)
  )
  .subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete'),
  });
