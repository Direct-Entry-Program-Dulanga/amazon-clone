import { Component, OnInit } from '@angular/core';
import {Item} from "../dto/item";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  item = new Item("I001",
    "assets/image/headset.jpg",
    "Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB",
    4,
    99,
    5);

  constructor() { }

  ngOnInit(): void {
  }

}
