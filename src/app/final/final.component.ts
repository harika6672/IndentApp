import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {
  result:number=0;
  todaysDate;
  data:any;
     constructor(private router:Router) {
     }

  ngOnInit(): void {
    // this.data=this.router.getCurrentNavigation().extras.state;
    this.data=history.state.data;
    this.todaysDate=new Date()
    this.todaysDate=this.todaysDate.getDate()+'-'+(this.todaysDate.getMonth()+1)+'-'+this.todaysDate.getFullYear()+" "+this.todaysDate.getHours() + ":" + this.todaysDate.getMinutes();
    console.log(this.data[0].name)
    for (let i = 0; i < this.data.length; i++) {
    this.result =this.result + this.data[i].quantity * this.data[i].price;
    }

   
  }

}
