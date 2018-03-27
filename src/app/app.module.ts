import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material-module/material.module';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CheckerComponent } from './checker/checker.component';
import { LoginFormsComponent } from './login-forms/login-forms.component';


// firebase

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule} from 'angularfire2/storage';

import { FirebaseColectionComponent } from './firebase-colection/firebase-colection.component';
import { FirebaseRealtimeComponent } from './firebase-realtime/firebase-realtime.component';
import { FirebaseStorageComponent } from './firebase-storage/firebase-storage.component';


import { DropZoneDirective } from './firebase-storage/drop-zone.directive';


@NgModule({
  declarations: [

    AppComponent,
    CartComponent,
    CheckerComponent,
    LoginFormsComponent,
    FirebaseColectionComponent,
    FirebaseRealtimeComponent,
    FirebaseStorageComponent,
    DropZoneDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CommonModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
