import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HwLes1Component } from './hw-les1/hw-les1.component';
import { HwLes2Component } from './hw-les2/hw-les2.component';
import { HwLes3Component } from './hw-les3/hw-les3.component';

@NgModule({
  declarations: [
    AppComponent,
    HwLes1Component,
    HwLes2Component,
    HwLes3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
