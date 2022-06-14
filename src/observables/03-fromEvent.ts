import { Observable, of, fromEvent } from 'rxjs';

// eventos del dom

const obs$ = fromEvent(document, 'click');
const obs2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
  next: val => console.log(val),
};

obs$.subscribe(observer);
obs2$.subscribe(e => {
  console.log(e.key);
});
