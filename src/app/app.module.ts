import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularWrapperKendoUiModule } from 'angular-wrapper-kendo-ui'; 

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularWrapperKendoUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
