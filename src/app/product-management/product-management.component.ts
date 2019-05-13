import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service.service';
import { Inventory } from '../inventory';
import { icons } from '../fas-icons';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {
  products: Inventory[];
  added: Object;
  clickedId: String; 
  submitted:boolean = false; 
  fasIcons = icons;
  addItem:String;
  removeItem:String;
  quantity:Number;
  
  constructor(private productService:ProductService) {}

  ngOnInit() {
    this.displayProducts();
  }
  onSubmit(d,cost:string){
    if(typeof(parseInt(cost)) == "number"){
      this.submitted = true;
      console.log(d)
    }

  }
  getId(id) {
    this.clickedId = id;
  }
  addProduct(picture, description, cost) {
    let addItem = 'Add';
    let removeItem = 'Remove';
   let quantity = 0;
   let totalAmount = 0;
   let totalCost = 0;
    const productObj = {picture: picture, description: description, cost: cost,addItem,removeItem,quantity,totalAmount, totalCost};
    console.log(productObj)
    this.productService.addProduct(productObj).subscribe(() => {
      this.displayProducts();
    });

  }
  displayProducts() {
    return this.productService.getProducts().subscribe((data: Inventory[]) => this.products = data);
  }
  removeProduct(id) {
    this.productService.removeProduct(id).subscribe(() => {
      this.displayProducts();
    });
  }
  editProduct(picture, description, cost,) {
   let addItem = 'Add';
    let removeItem = 'Remove';
   let quantity = 0;
   let totalAmount = 0;
   let totalCost = 0;
    const productObj = {picture: picture, description: description, cost: cost,addItem,removeItem,quantity, totalAmount,totalCost};
    this.productService.editProduct(this.clickedId, productObj).subscribe(() => {
      this.displayProducts();
    });
  }
}

