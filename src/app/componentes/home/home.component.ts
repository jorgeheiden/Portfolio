import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mostrar = false
  ocultar = true
  constructor() { }

  ngOnInit(): void {
    setTimeout( () =>{
      this.mostrar = true
      this.ocultar = false
    }, 2500)
  }



}
