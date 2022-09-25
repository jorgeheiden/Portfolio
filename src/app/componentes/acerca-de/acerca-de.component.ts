import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.scss']
})
export class AcercaDeComponent implements OnInit {

  @ViewChild('elemento') elemento!:ElementRef

  constructor() { }

  ocultar = true
  mostrar = false

  ngAfterViewInit(){
    console.log(this.elemento.nativeElement)
    const threshold = 0.5
    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach( (entrada) =>{
          if(entrada.isIntersecting){
            this.ocultar = false
            this.mostrar = true
            observer.disconnect()

          }
        })
      }, {threshold}
    )
    observer.observe(this.elemento.nativeElement)
  }

  ngOnInit(): void {
  }

  
}
