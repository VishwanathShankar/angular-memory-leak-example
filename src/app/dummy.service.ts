import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  behavior$ = new BehaviorSubject(2);


  constructor() {
    (window as any).dummyService = this;
  }

}
