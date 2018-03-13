import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loop-back',
  template: `
  <p>Обносвляет через переменную box</p>
    <input #box (keyup)="0">
    <p>{{box.value}}</p>
  `
})

export class LoopBackComponent  {

  values = '';
  onKey(value: string) {
    this.values += value + ' | ';
  }
  constructor() { }

  ngOnInit() {
  }

}
