import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  oldPrice : number;
  newPrice : number;

  constructor() {
    this.oldPrice = 9000;
    this.newPrice = 4500;
  }

  ngOnInit(): void {
  }

}
