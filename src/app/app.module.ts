import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material-module/material.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CheckerComponent } from './checker/checker.component';
import { LoginFormsComponent } from './login-forms/login-forms.component';


import { ClickMeComponent } from './user-input/click-me/click-me.component';
import { KeyupComponent } from './user-input/keyup/keyup.component';
import { UserInputComponent } from './user-input/user-input.component';
import { LoopBackComponent } from './user-input/loop-back/loop-back.component';



@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CheckerComponent,
    LoginFormsComponent,
    ClickMeComponent,
    KeyupComponent,
    UserInputComponent,
    LoopBackComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
