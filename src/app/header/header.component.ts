import {Component, Inject, Input, OnInit} from '@angular/core';
import {CartService} from "../cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  totalItemsInCart = 0;

  constructor(@Inject('') private cartService: CartService) { }

  ngOnInit(): void {
  }

}
