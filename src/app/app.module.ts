import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material-module/material.module';
import { CommonModule } from '@angular/common';
import { UserInputModule } from './user-input/user-input.module';
import { NotFoundModule } from './not-found/not-found.module';
import { AppRoutingModule } from './app.routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CheckerComponent } from './checker/checker.component';
import { LoginFormsComponent } from './login-forms/login-forms.component';


@NgModule({
  declarations: [

    AppComponent,
    CartComponent,
    CheckerComponent,
    LoginFormsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CommonModule,
    UserInputModule,
    NotFoundModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
