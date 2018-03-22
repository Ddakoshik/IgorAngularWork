import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-firebase-realtime',
  templateUrl: './firebase-realtime.component.html',
  styleUrls: ['./firebase-realtime.component.css']
})
export class FirebaseRealtimeComponent implements OnInit {



  itemRef: AngularFireObject<any>;
  item: Observable<any>;

  constructor(db: AngularFireDatabase) {

    this.itemRef = db.object('item');
    this.item = this.itemRef.valueChanges();
  }

  ngOnInit() {
  }

}

