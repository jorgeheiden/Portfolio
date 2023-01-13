import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { PreloaderComponent } from './componentes/preloader/preloader.component';
import { Proyectos2Component } from './componentes/proyectos2/proyectos2.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ProyectosDestacadosComponent } from './componentes/proyectos-destacados/proyectos-destacados.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    HomeComponent,
    NavBarComponent,
    AcercaDeComponent,
    SkillsComponent,
    ProyectosComponent,
    ContactoComponent,
    PreloaderComponent,
    Proyectos2Component,
    FooterComponent,
    ProyectosDestacadosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
