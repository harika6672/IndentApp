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
    { name: "Curd(150gms)", quantity: null, price: 49 },
    { name: "Curd(200gms)", quantity: null, price: 65 },
    { name: "Curd(500gms)", quantity: null, price: 69 },
  ];
  othersProducts=[
    { name: "Vij", quantity: null, price: 58 },
    { name: "Amul", quantity: null, price: 51},
    { name: "He", quantity: null, price: 59 },
    { name: "Small", quantity: null, price: 9 },
    { name: "VWM", quantity: null, price: 72 },
    { name: "JeWM", quantity: null, price: 73 },
    { name: "HeWM", quantity: null, price: 38.5},
    { name: "ButterMilk", quantity: null, price: 35},
    { name: "Lassi", quantity: null, price: 43 },
    { name: "Curd(150gms)", quantity: null, price: 39 },
    { name: "Curd(200gms)", quantity: null, price: 69 },
    { name: "Curd(500gms)", quantity: null, price: 78 },
    { name: "Nandini curd", quantity: null, price: 63 }
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
    return this.heritageProducts;
  }
}
