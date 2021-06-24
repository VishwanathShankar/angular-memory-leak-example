import { Component, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { publish, publishBehavior, publishLast, publishReplay, shareReplay, tap, takeUntil } from 'rxjs/operators';


@Component({
  selector:'app-sub',
  template: 'Child component Random: {{rand}}'
})
export class SubComponent implements OnDestroy {
  rand = Math.random();
  rand2 = 0;
  subject = new BehaviorSubject(42);

  arr = [];


  constructor() {
    for (let i = 0; i < 100000; ++i) {
      this.arr.push(Math.random());
    }

    this.subject.subscribe( value => {
      this.arr.push(value);
    })

    setTimeout(() => {
      this.subject.next(10);
    }, 10);

    
  }

  ngOnDestroy(): void {
      
  }

}
