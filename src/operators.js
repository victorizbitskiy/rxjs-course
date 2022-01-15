import { interval } from 'rxjs'
import { map, filter, tap, take } from 'rxjs/operators'

const stream$ = interval(1000)
  .pipe(
    tap(v => console.log('Tap:', v)),
    map(v => v * 2),
    filter(v => v % 2 === 0),
    take(5)
  )

stream$.subscribe({
  next: v => console.log('Next:', v),
  complete: () => console.log('Complete')
})