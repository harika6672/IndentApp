import { Injectable } from "@angular/core";


@Injectable({
  providedIn: "root",
})
export class IndentService {
  heritageProducts = [
    { name: "TM", quantity: null, price: 49.5 },
    { name: "FCM", quantity: null, price: 67 },
    { name: "STD", quantity: null, price: 55 },
    { name: "Family", quantity: null, price: 47.5 },
    { name: "COW", quantity: null, price: 49.5 },
    { name: "Curd(150gms)", quantity: null, price: 38.25 },
    { name: "Curd(200gms)", quantity: null, price: 62 },
    { name: "Curd(500gms)", quantity: null, price: 61 },
  ];
  othersProducts=[
    { name: "Vij", quantity: null, price: 46 },
    { name: "He", quantity: null, price: 47 },
    { name: "Small", quantity: null, price: 9 },
    { name: "VWM", quantity: null, price: 60 },
    { name: "JeWM", quantity: null, price: 65 },
    { name: "ButterMilk", quantity: null, price:  22.5},
    { name: "Lassi", quantity: null, price: 42.5 },
    { name: "Curd(150gms)", quantity: null, price: 38.25 },
    { name: "Curd(200gms)", quantity: null, price: 62 },
    { name: "Curd(500gms)", quantity: null, price: 61 }
  ]
  products= [];
  constructor() {}
  getProducts(name) {
    if(name=="others"){
      return this.othersProducts
    }
    else
    return this.heritageProducts;
  }
  setProducts(index, amount) {
    this.heritageProducts[index].price = amount;
    console.log("set", this.heritageProducts);
    return this.heritageProducts;
  }
}
