import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubComponenetComponent } from './sub-componenet/sub-componenet.component';

@NgModule({
  declarations: [
    AppComponent,
    SubComponenetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
