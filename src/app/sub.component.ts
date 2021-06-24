import { Component, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { publish, publishBehavior, publishLast, publishReplay, shareReplay, tap, takeUntil } from 'rxjs/operators';


@Component({
  selector:'app-sub',
  template: 'Child componenet {{rand}}'
})
export class SubComponent implements OnDestroy {
  rand = Math.random();
  rand2 = 0;

  arr = [];


  constructor() {
    for (let i = 0; i < 100000; ++i) {
      this.arr.push(Math.random());
    }

    
  }

  ngOnDestroy(): void {
      
  }

}
