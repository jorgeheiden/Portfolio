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

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    HomeComponent,
    NavBarComponent,
    AcercaDeComponent,
    SkillsComponent,
    ProyectosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
