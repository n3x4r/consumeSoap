import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {NgxSoapModule} from 'ngx-soap';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    NgxSoapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
