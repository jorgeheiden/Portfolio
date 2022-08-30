import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  hamburgerMenuClases = false
  hamburgerIcon = "../../../assets/menu/icons8-menu.svg"
  constructor() { }

  ngOnInit(): void {
  }

  hamburguerMenu(){
   if(this.hamburgerMenuClases == false){
    this.hamburgerMenuClases = true
    
   }
   else{
    this.hamburgerMenuClases = false
   }
  }
}
