import { PreloaderComponent } from './componentes/preloader/preloader.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SkillsComponent } from './componentes/skills/skills.component';

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full'},
  { path: 'home', component: PortfolioComponent},
  { path: 'acercade', component: AcercaDeComponent},
  //{ path: 'skills', component: SkillsComponent},
  { path: 'proyectos', component: ProyectosComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'preload', component: PreloaderComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
