import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { InicioComponent } from './inicio/inicio.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { SobreComponent } from './sobre/sobre.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'contacto',
        component:  ContactoComponent
      },
      {
        path: 'habilidades',
        component: HabilidadesComponent
      },
      {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: 'portafolio',
        component: PortafolioComponent
      },
      {
        path: 'informacion',
        component: SobreComponent
      },
      {
        path: '**',
        redirectTo: 'inicio'
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
