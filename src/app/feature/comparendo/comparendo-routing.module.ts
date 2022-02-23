import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComparendoComponent } from './components/comparendo/comparendo.component';
import { ListarComparendoComponent } from './components/listar-comparendo/listar-comparendo.component';
import { RegistrarComparendoComponent } from './components/registrar-comparendo/registrar-comparendo.component';

const routes: Routes = [
  {
    path: '',
    component: ComparendoComponent,
    children: [
      {
        path: 'listar',
        component: ListarComparendoComponent
      },
      {
        path: 'registrar',
        component: RegistrarComparendoComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComparendoRoutingModule { }
