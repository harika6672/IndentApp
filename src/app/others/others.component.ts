import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndentService } from "../indent.service";

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {
  todaysDate;
  name:String;
  product= [];
  result: number;
  flag: boolean = false;
  errorStatus:boolean=false
  error=[];
  amounts=[]
  finalist=[]
  constructor(private service: IndentService, private router:Router) {}
 
 

  ngOnInit(): void {
    console.log(this.router.url)
    this.todaysDate=new Date()
    this.todaysDate=this.todaysDate.getDate()+'-'+(this.todaysDate.getMonth()+1)+'-'+this.todaysDate.getFullYear()+" "+this.todaysDate.getHours() + ":" + this.todaysDate.getMinutes();
    this.name="others"
    this.product=this.service.getProducts(this.name)
  }
  submitIndent() {

    this.flag = true;
    for (let i = 0; i < this.product.length; i++) {
      this.amounts[i]=this.product[i].quantity * this.product[i].price
     
      console.log(this.amounts[i]);
      this.finalist[i]={
        "name":this.product[i].name,
        "quantity":this.product[i].quantity,
        "price":this.product[i].price,
        "amount":this.amounts[i]
      }
      this.router.navigate(['/final'], {state: {data: this.finalist}});

    }
   
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
