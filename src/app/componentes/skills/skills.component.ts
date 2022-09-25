import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @ViewChild('skills') skills!:ElementRef

  ocultar = true
  mostrar = false

  constructor() { }

  ngAfterViewInit(){
    
    const threshold = 0.75
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
    observer.observe(this.skills.nativeElement)
  }

  ngOnInit(): void {
  }

}
