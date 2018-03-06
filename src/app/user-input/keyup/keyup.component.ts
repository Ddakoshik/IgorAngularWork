import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup',
  template: `
  <input (keyup)="onKey($event)">
    <p>{{values}}</p>
  `
})
export class KeyupComponent implements OnInit {
  values = '';

  constructor() { }

  ngOnInit() {
  }

  // onKey(event: any) { // without type info
  //   this.values += event.target.value + ' | ';
  // }
  onKey(event: KeyboardEvent) { // with type info
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }
}
