import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  hamburgerMenuClases = false
  hamburgerIcon = "../../../assets/menu/icons8-menu.svg"
  mostrar = false
  ocultar = true

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.mostrar = true
      this.ocultar = false
    }, 2500);
  }

  hamburguerMenu(){
   if(this.hamburgerMenuClases == false){
    this.hamburgerMenuClases = true
    
   }
   else{
    this.hamburgerMenuClases = false
   }
  }

 scroll(skills:any){
  skills.scrollIntoView({ block: 'start',  behavior: 'smooth', inline: 'nearest' })
 }

 scrollALaSeccion(data:string){
   document.getElementById(data)?.scrollIntoView()
 }
}
