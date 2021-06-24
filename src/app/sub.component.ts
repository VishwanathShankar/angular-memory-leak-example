import { Component, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { DummyService } from './dummy.service';
import { publish, publishBehavior, publishLast, publishReplay, shareReplay, tap, takeUntil } from 'rxjs/operators';


@Component({
  selector:'app-sub',
  template: 'mega {{rand}}'
})
export class SubComponent implements OnDestroy {
  rand = Math.random();
  rand2 = 0;
  subject = new BehaviorSubject(42);
  subVariable;

  arr = [];


  constructor(private dummyService: DummyService) {
    for (let i = 0; i < 100000; ++i) {
      this.arr.push(Math.random());
    }


    /*
    this.dummyService.behavior$.subscribe(value => {
      //Assign the value to a new variable
      const foo =value;
    })
    */

    
    this.dummyService.behavior$.subscribe(value => {
      //Assing the value to the component variable
      this.rand =value;
    })
    
    
    
  }

  ngOnDestroy(): void {
    
  }

}
