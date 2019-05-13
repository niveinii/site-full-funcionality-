import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart-service.service'

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})

export class CheckOutComponent implements OnInit {
  cart: Object[] = [];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem('cart'));
  }
  checkOut(){
    this.cartService.sendOrder(this.cart).subscribe(success => console.log(success),err => console.log(err));

  }
  

}
