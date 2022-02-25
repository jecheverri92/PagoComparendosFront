import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Comparendo } from '@comparendo/shared/model/comparendo';
import { ComparendoService } from '@comparendo/shared/service/comparendo.service';
import { HttpService } from '@core/services/http.service';
import { SharedModule } from '@shared/shared.module';
import { of } from 'rxjs';
import { AsistenciaCursoService } from 'src/app/feature/curso/shared/service/asistencia-curso.service';

import { ListarComparendoComponent } from './listar-comparendo.component';

describe('ListarComparendoComponent', () => {
  let component: ListarComparendoComponent;
  let fixture: ComponentFixture<ListarComparendoComponent>;
  let comparendoService: ComparendoService
  let listaComparendos: Comparendo[] =[
    Comparendo.unComparendo({
      numeroComparendo: '0001',
      identificacionInfractor: '123456789',
      tipoInfraccion: '1',
      fechaComparendo: '2021-01-01',
      valorComparendo:10000
    }),
    Comparendo.unComparendo({
      numeroComparendo: '0002',
      identificacionInfractor: '123456789',
      tipoInfraccion: '1',
      fechaComparendo: '2021-01-01',
      valorComparendo:10000
    })
  ]
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarComparendoComponent ],
      imports: [
        CommonModule,
        SharedModule,
        HttpClientModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      providers: [ComparendoService, AsistenciaCursoService, 
        DatePipe, HttpService, ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarComparendoComponent);
    component = fixture.componentInstance;
    comparendoService = TestBed.inject(ComparendoService);
    spyOn(comparendoService, 'consultarPorInfractor').and.returnValue(
      of(listaComparendos)
    );
    spyOn(comparendoService, 'pagarComparendos').and.callFake(() =>{
      return of(true)
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia listar comparendos por infractor', ()=>{
    component.buscarPorInfractor()
    expect(2).toBe(component.listaComparendos.length)
    expect(comparendoService.consultarPorInfractor).toHaveBeenCalled();
  });

  it('Deberia Pagar un comparendo', ()=>{
    component.openDialogPago( Comparendo.unComparendo({
      numeroComparendo: '001',
      identificacionInfractor:'123456789',
      tipoInfraccion: 1,
      fechaComparendo: '2020-01-01',
      valorComparendo: 10000
    }))

  });

  
});
