import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ComparendoService } from './shared/service/comparendo.service';
import { ListarComparendoComponent } from './components/listar-comparendo/listar-comparendo.component';
import { ComparendoComponent } from './components/comparendo/comparendo.component';
import { ComparendoRoutingModule } from './comparendo-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { RegistrarComparendoComponent } from './components/registrar-comparendo/registrar-comparendo.component';
import { DatePipe } from '@angular/common';



@NgModule({
  declarations: [
    ListarComparendoComponent,
    ComparendoComponent,
    RegistrarComparendoComponent
  ],
  imports: [
    SharedModule,
    ComparendoRoutingModule,
    MaterialModule
  ],
  providers: [ComparendoService, DatePipe],
})
export class ComparendoModule { }
