import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material-module/material.module';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CheckerComponent } from './checker/checker.component';
import { LoginFormsComponent } from './login-forms/login-forms.component';

import { environment } from './../environments/environment';
// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { FirebaseTestComponent } from './firebase-test/firebase-test.component';

@NgModule({
  declarations: [

    AppComponent,
    CartComponent,
    CheckerComponent,
    LoginFormsComponent,
    FirebaseTestComponent
  ], 
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CommonModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
