import { Component } from '@angular/core';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IndentApp';
  sidebar:boolean=false;
 constructor(private service:SidebarService){

 }
  ngOnInit(){
    this.service.sidebarVisibilityChange.subscribe(result =>{
      
      this.sidebar=result;
      console.log(this.sidebar)
      
    });
   
  }
  closenav(){
    if(this.sidebar==true){
      this.service.toggleSidebarVisibility()
    }
  }
}
