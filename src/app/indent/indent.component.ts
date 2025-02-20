import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';


import { IndentService } from "../indent.service";

@Component({
  selector: "app-indent",
  templateUrl: "./indent.component.html",
  styleUrls: ["./indent.component.css"],
})
export class IndentComponent implements OnInit {
  product= [];
  others=[];
  result: number;
  flag: boolean = false;
  todaysDate;
  errorStatus:boolean=false
  constructor(private service: IndentService, private router:Router) {}
  name="heritage";
  error=[]
  
  ngOnInit() {
    console.log(this.router.url)
    this.todaysDate=new Date()
    this.todaysDate=this.todaysDate.getDate()+'-'+(this.todaysDate.getMonth()+1)+'-'+this.todaysDate.getFullYear()+" "+this.todaysDate.getHours() + ":" + this.todaysDate.getMinutes();
    

    this.product = this.service.getProducts(this.name);
    
    console.log(this.product);

  }
  submitIndent() {
    this.result = 0;
    this.flag = true;
    for (let i = 0; i < this.product.length; i++) {
      this.result =
        this.result + this.product[i].quantity * this.product[i].price;
      
    }
    console.log(this.result);
  }

  

//   onKeyup(e,i){
//     let isnum = /^\d+$/.test(e.target.value);
// console.log(isnum)
    
//     if(isnum){
//       this.errorStatus=false
//       console.log("yes")
//     }
//     else{
//       console.log("no");
//       this.errorStatus=true
//       this.error[i]="**only numbers are allowed"
//     }
//     if(e.target.value===""){
//       this.errorStatus=false
//     }
//   }
}
