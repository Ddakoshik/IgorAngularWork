import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup3',
  template: `
  <p>Вводит при ентере</p>
  <input #box (keyup.enter)="onEnter(box.value)">
  <p>{{value}}</p>
`
})
export class Keyup3Component implements OnInit {

  value = '';
  onEnter(value: string) { this.value = value; }

  constructor() { }

  ngOnInit() {
  }

}
