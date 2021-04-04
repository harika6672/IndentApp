import { Component, OnInit } from "@angular/core";
import { IndentService } from "../indent.service";
// import { Product } from "src/product.model";
import { Heritage } from "src/heritage.model";
import { Router } from '@angular/router';

@Component({
  selector: "app-price",
  templateUrl: "./price.component.html",
  styleUrls: ["./price.component.css"],
})
export class PriceComponent implements OnInit {
  products: Heritage[] = [];
  editable: boolean = false;
  index: number;
  name="heritage";
  constructor(private service: IndentService, private router:Router) {}

  ngOnInit() {
    console.log(this.router.url)
    
    if(this.router.url!=="/price"){
      console.log("others")
      this.name="others"
      this.products=this.service.getProducts(this.name)
    }
    else{
    this.products = this.service.getProducts(this.name);
    }
    console.log(this.products);

  }
  editPrice(i) {
    this.editable = true;
    this.index = i;
  }
  EditPriceAmount(amount) {
    this.products = this.service.setProducts(this.index, amount);
    console.log(this.products);
    return this.products;
  }
}
