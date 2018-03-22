import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-firebase-colection',
  templateUrl: './firebase-colection.component.html',
  styleUrls: ['./firebase-colection.component.css']
})
export class FirebaseColectionComponent implements OnInit {

  items: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.items = db.collection('test', ref => ref.orderBy('id')).valueChanges();
   }

  ngOnInit() {
  }

}
