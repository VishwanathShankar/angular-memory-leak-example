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

  arr = [];

  /** Emits when the component is destroyed */
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private dummyService: DummyService) {
    for (let i = 0; i < 100000; ++i) {
      this.arr.push(Math.random());
    }

    this.dummyService.behavior$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.rand2 = 33
    });
   
  }

  ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
  }

}
