import { Component, OnInit } from '@angular/core';
import {SidebarService} from '../sidebar.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // sidebar_open:boolean=false;
  constructor(private sidebarService:SidebarService) { }

  ngOnInit() {
  }

  open(){

    // this.sidebar_open=true;
    console.log("nav btn")
    this.sidebarService.toggleSidebarVisibility()
    
  }

}
