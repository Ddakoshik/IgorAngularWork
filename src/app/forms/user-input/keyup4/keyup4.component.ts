import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup4',
  template: `
  <p>Вводит при ентере и клике на другую область</p>
    <input #box
      (keyup.enter)="update(box.value)"
      (blur)="update(box.value)">

    <p>{{value}}</p>
  `
})
export class Keyup4Component implements OnInit {

  value = '';
  update(value: string) { this.value = value; }

  constructor() { }

  ngOnInit() {
  }

}
