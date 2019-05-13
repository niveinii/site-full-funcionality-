import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service.service';
import { Inventory } from '../inventory';
import { CartService } from '../cart-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products;
  searchTerm: string;
  p: number = 1;
  costSum: number;
  numberOfItems: number;
  itemStorage = (localStorage.getItem("numOfItems") ? this.numberOfItems = parseFloat(localStorage.getItem("numOfItems")) : localStorage.setItem("numOfItems","0"));
  costStorage = (localStorage.getItem("sumCost") ? this.costSum = parseFloat(localStorage.getItem("sumCost")) : localStorage.setItem("sumCost","0"));
  cart: Object[] = [];

  constructor(private productService:ProductService, private cartService: CartService) { }

  clearCart() {
    localStorage.setItem("numOfItems","0");
    localStorage.setItem("sumCost","0");
    this.numberOfItems = 0;
    this.costSum = 0;
    this.cart = [];
    return this.productService.getProducts().subscribe((data:Inventory[]) => {
      this.products = data;
      this.products.forEach(product => {
        if(localStorage.getItem(`${product._id}`)) localStorage.removeItem(`${product._id}`);
      });
    });
  }

  sumCostAndNumOfItems(product,quantity) {
    let q = parseFloat(quantity);
    this.costSum += (q * product.cost); //Sum of ALL items cost
    this.numberOfItems += q; //Sum of ALL number of items
    product.totalAmount += q; //Changing visual amount of the product
    product.totalCost = (product.totalAmount * product.cost) //Changing visual cost of the product
    localStorage.setItem('sumCost', this.costSum.toString());
    localStorage.setItem('numOfItems', this.numberOfItems.toString());
    localStorage.setItem(`${product._id}`, JSON.stringify({totalAmount: product.totalAmount, totalCost: product.totalCost}));
  }

  removeItemsFromCart(product, quantity) {
    let q = parseFloat(quantity);
    if(product.totalAmount < q) return; //Check for values bigger than totalAmount
    this.costSum -= (q * product.cost); //Sum of ALL items cost
    this.numberOfItems -= q; //Sum of ALL number of items
    product.totalAmount -= q; //Changing visual amount of the product
    product.totalCost = (product.totalAmount * product.cost) //Changing visual cost of the product
    localStorage.setItem('sumCost', this.costSum.toString());
    localStorage.setItem('numOfItems', this.numberOfItems.toString());
    localStorage.setItem(`${product._id}`, JSON.stringify({totalAmount: product.totalAmount, totalCost: product.totalCost}));
  }

  sendToCart() {
    this.products.forEach(product => {
      if(product.totalAmount != 0 || product.totalCost != 0) {
        this.cart.push(product);
      }
    });
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  ngOnInit() {
      return this.productService.getProducts().subscribe((data:Inventory[]) => {
        this.products = data;
        this.products.forEach(product => {
          let e;
          localStorage.getItem(`${product._id}`) ? e = JSON.parse(localStorage.getItem(`${product._id}`)) : e = {totalAmount:0, totalCost:0};
          product.totalAmount = e.totalAmount;
          product.totalCost = e.totalCost;
        });
      });
  }
}
