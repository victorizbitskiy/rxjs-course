import { Subject } from 'rxjs'

document.addEventListener('click', () => {
  const stream$ = new Subject()
  stream$.subscribe(v => console.log('Value', v))
  stream$.next('Hello')
  stream$.next('Rx')
  stream$.next('JS')
})