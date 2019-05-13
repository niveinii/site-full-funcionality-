import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products;
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      const id = params['id'];
      this.productService.getProductById(id).subscribe(res => this.products = res, err => console.log(err));
    })
  }

}
