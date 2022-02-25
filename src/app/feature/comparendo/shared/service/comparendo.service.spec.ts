import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Comparendo } from '../model/comparendo';
import { PagoComparendo } from '../model/pagoComparendo';
import { RegistarComparendo } from '../model/registrarComparendo';

import { ComparendoService } from './comparendo.service';

describe('ComparendoService', () => {
  let service: ComparendoService;
  let httpMock: HttpTestingController;
  const apiEndpointComparendosPorInfractor = `${environment.endpoint}/comparendos/idInfractor`;
  const apiEndpointRegistrarComparendo = `${environment.endpoint}/comparendos`;
  const apiEndpointPagarrComparendo = `${environment.endpoint}/comparendos/pago`;
 
  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ComparendoService, HttpService]
    });
    service = TestBed.inject(ComparendoService);
    httpMock = injector.inject(HttpTestingController);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deberia listar comparendos por infractor', () => {
    const dummyComparendos = [
      Comparendo.unComparendo({
        numeroComparendo: '001',
        identificacionInfractor:'123456789',
        tipoInfraccion: 1,
        fechaComparendo: '2020-01-01',
        valorComparendo: 10000
      }), 
      Comparendo.unComparendo({
        numeroComparendo: '002',
        identificacionInfractor:'123456789',
        tipoInfraccion: 1,
        fechaComparendo: '2020-01-01',
        valorComparendo: 10000
      })
    ];
    service.consultarPorInfractor('123456789').subscribe(comparendos => {
      expect(comparendos.length).toBe(2);
      expect(comparendos).toEqual(dummyComparendos);
    });
    const req = httpMock.expectOne(`${apiEndpointComparendosPorInfractor}/123456789`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyComparendos);
  });

  it('deberia crear un comparendo', () => {
    const dummyComparendo = 
      RegistarComparendo.unRegistroComparendo({
        numeroComparendo: '001',
        identificacionInfractor:'123456789',
        tipoInfraccion: 1,
        fechaComparendo: '2020-01-01'
      })
    service.registrarComparendo(dummyComparendo).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointRegistrarComparendo);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia pagar un comparendo', () => {
    const dummyPagoComparendo = [
      PagoComparendo.unPagoComparendo({
        numeroComparendo: '001',
        valorComparendo: 1000,
      })]
    service.pagarComparendos(dummyPagoComparendo).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointPagarrComparendo);
    expect(req.request.method).toBe('PUT');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
