import { Subject, BehaviorSubject, ReplaySubject} from 'rxjs'

// document.addEventListener('click', () => {
//   const stream$ = new Subject()
//   stream$.subscribe(v => console.log('Value:', v))
//   stream$.next('Hello')
//   stream$.next('Rx')
//   stream$.next('JS')
// })

// document.addEventListener('click', () => {
//   const stream$ = new BehaviorSubject('First')
//   stream$.subscribe(v => console.log('Value:', v))
//   stream$.next('Hello')
//   stream$.next('Rx')
//   stream$.next('JS')
// })

document.addEventListener('click', () => {
  const stream$ = new ReplaySubject(2)

  stream$.next('Hello')
  stream$.next('Rx')
  stream$.next('JS')

  // Сохраняет предыдущие значения, которые мы диспачили до подписки
  stream$.subscribe(v => console.log('Value:', v))
})