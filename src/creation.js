import { of } from 'rxjs'

const stream$ = of(1, 2, 3, 4)

stream$.subscribe(val => {
  console.log('Value:', val)
})