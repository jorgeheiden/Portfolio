import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  ocultar = true
  mostrar = false

  @ViewChild('proyecto') proyecto!:ElementRef

  constructor() { }

  ngAfterViewInit(){
    const threshold = 1
    const observer = new IntersectionObserver(
      (entradas) =>{
        entradas.forEach( entrada => {
          if (entrada.isIntersecting){
            this.ocultar = false
            this.mostrar = true
            observer.disconnect()
          }
        })
      }, {threshold}
    )
    observer.observe(this.proyecto.nativeElement)
  }

  ngOnInit(): void {
  }

}
