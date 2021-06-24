import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-sub-componenet *ngIf="hide"></app-sub-componenet>`
})
export class AppComponent {
  hide = false;

  constructor() {
    setInterval(() => this.hide = !this.hide, 50);
  }
}
