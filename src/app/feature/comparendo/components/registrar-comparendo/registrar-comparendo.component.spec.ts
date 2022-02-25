import { DatePipe } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ComparendoRoutingModule } from '@comparendo/comparendo-routing.module';
import { ComparendoService } from '@comparendo/shared/service/comparendo.service';
import { HttpService } from '@core/services/http.service';
import { SharedModule } from '@shared/shared.module';
import { of, throwError } from 'rxjs';

import { RegistrarComparendoComponent } from './registrar-comparendo.component';

describe('RegistrarComparendoComponent', () => {
  let component: RegistrarComparendoComponent;
  let service: ComparendoService;
  let fixture: ComponentFixture<RegistrarComparendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        RegistrarComparendoComponent
      ],
      imports: [
        SharedModule,
        ComparendoRoutingModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [ComparendoService, DatePipe, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarComparendoComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ComparendoService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe retornar formulario invalido cuando esta vacio',()=>{
    expect(component.reactiveForm.invalid).toBeTrue();
  })

  it('Registrando comparendo',()=>{
    expect(component.reactiveForm.invalid).toBeTrue();
    component.reactiveForm.controls.numeroComparendo.setValue('0001');
    component.reactiveForm.controls.identificacionInfractor.setValue('11111');
    component.reactiveForm.controls.tipoInfraccion.setValue(1);
    component.reactiveForm.controls.fechaComparendo.setValue('2022-02-15');
    expect(component.reactiveForm.invalid).toBeFalse();

    spyOn(service, 'registrarComparendo').and.callFake(() =>{
      return of(true)
    });
    component.submitForm();
    expect(service.registrarComparendo).toHaveBeenCalled();
  }) 

  it('Registrando un comparendo fallidamente', ()=>{
    spyOn(service, 'registrarComparendo').and.returnValue(throwError({
      "nombreExcepcion": "ExcepcionDuplicidad",
      "mensaje": "El comparendo ya exite en el sistema"
    }))
    component.submitForm();
    expect(service.registrarComparendo).toHaveBeenCalled();
  })


});
