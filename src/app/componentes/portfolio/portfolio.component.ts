import { PreloaderComponent } from './../preloader/preloader.component';
import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  preload= true
  overflowHidden= true
  
  constructor() { }

  ngOnInit(): void {

    setTimeout( () => {
      this.preload = false
      this.overflowHidden = false
    }, 1700)

  }


}
