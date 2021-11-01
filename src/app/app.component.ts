import { Component } from '@angular/core';
import {DUMMY_DATA} from "./dummy-data";
import {Item} from "./dto/item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  getTotalItemsInCart(): number{
    let totalItems = 0;

    this.cartItems.forEach(item => totalItems += item.qty);
    return totalItems;
  }
}
