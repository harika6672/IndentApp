import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  
  open: boolean=false;


  sidebarVisibilityChange: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

 

  toggleSidebarVisibility() {
      this.open=!this.open
      console.log("service open var", this.open)
      this.sidebarVisibilityChange.next(this.open);
      
 console.log("sidebar service")
  }

  getStatus() {
    console.log("get status",this.open)
    return this.open;
  }
  // setStatus(status) {
  //   this.open=status
  //   console.log("set sidebar in service",this.open)
    
  // }
}



