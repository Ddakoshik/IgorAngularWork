import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartModel } from '../cartModel'

@Component({
  selector: 'app-checker',
  templateUrl: './checker.component.html',
  styleUrls: ['./checker.component.css']
})
export class CheckerComponent implements OnInit {

  @Input() cart: CartModel;
  @Output() idEvent = new EventEmitter<any>(); 

  allOkFlag = false;
  allOkFlagRed = false;

  constructor() { }

  ngOnInit() {
  }

  itemId(item){
    this.cart.status = !this.cart.status;
  //  console.log(this.cart.status);

    this.idEvent.emit({
      status:this.cart.status,
      item:item
      });
  }

  checkStatus() {
     if (this.cart.status) {
        this.allOkFlag = true;
       } else {
        this.allOkFlag = false;
       }
  }
  checkStatusRed() {
    if (this.cart.status) {
       this.allOkFlagRed = true;
      } else {
       this.allOkFlagRed = false;
      }
 }
}
