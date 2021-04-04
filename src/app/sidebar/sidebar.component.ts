import { Component, OnInit , HostListener, ElementRef} from '@angular/core';

import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  
 
})
export class SidebarComponent implements OnInit {
sidebar:boolean=false;
  constructor(private service:SidebarService,private eRef: ElementRef) { }

  ngOnInit() {
  
    this.service.sidebarVisibilityChange.subscribe(result =>{
      console.log(result)
      this.sidebar=result;
      
    });
  }
  
toggle(){
  console.log("toggle")
  this.service.toggleSidebarVisibility()
}
 

}
