import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup2',
  template: `
  <p>Вводит при кейАп</p>
  <input #box (keyup)="onKey(box.value)">
  <p>{{values}}</p>
  `
})
export class Keyup2Component {
  values = '';
  onKey(value: string) {
    this.values += value + ' | ';
  }

  constructor() { }

  ngOnInit() {
  }

}
