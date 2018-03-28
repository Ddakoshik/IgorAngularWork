import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-firebase-storage',
  templateUrl: './firebase-storage.component.html',
  styleUrls: ['./firebase-storage.component.css']
})
export class FirebaseStorageComponent implements OnInit {

  // ref: AngularFireStorageReference;
  // task: AngularFireUploadTask;

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  profileUrl: Observable<string | null>;

  constructor(private afStorage: AngularFireStorage) {
    // const ref = this.afStorage.ref('images/stars.jpg');
    // this.profileUrl = ref.getDownloadURL();
   }

  ngOnInit() {
  }

  // upload(event) {
  //   const id = Math.random().toString(32).substring(2);
  //   this.ref = this.afStorage.ref(id);
  //   this.task = this.ref.put(event.target.files[0]);

  //   console.log(event);
  // }

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = 'name-your-file-path-here';
    const task = this.afStorage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    this.downloadURL = task.downloadURL();
  }


}
