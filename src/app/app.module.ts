import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {  ToastModule, MessageService, ButtonModule } from 'primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';
import { BasicToastComponent } from './basic-toast/basic-toast.component';
import { ToastHtmlComponent } from './toast-html/toast-html.component';
import { ToastPositionComponent } from './toast-position/toast-position.component';

@NgModule({
  imports:      [ AppRoutingModule,BrowserModule,BrowserAnimationsModule, ToastModule,ButtonModule],
  declarations: [ AppComponent,BasicToastComponent,ToastHtmlComponent, ToastPositionComponent,ToastPositionComponent],
  bootstrap:    [ AppComponent ],
  providers:[MessageService],
  exports:[BasicToastComponent,ToastHtmlComponent,ToastPositionComponent]
})
export class AppModule { }
