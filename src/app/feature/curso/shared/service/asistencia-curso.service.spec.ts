import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { AsistenciaCurso } from '../model/asistenciaCurso';

import { AsistenciaCursoService } from './asistencia-curso.service';

describe('AsistenciaCursoService', () => {
  let httpMock: HttpTestingController;
  let service: AsistenciaCursoService;

  const apiEndpointCursos = `${environment.endpoint}/cursos`;

  beforeEach(() => {
    const injector =TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AsistenciaCursoService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(AsistenciaCursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('deberia crear una asistencia curso', () => {
    const dummyAsistenciaCruso = AsistenciaCurso.crearAsistencia({
      numeroComparendo:'0001',
      identificacionINfractor:'123456789',
      fechaAsistencia:'2021-02-12'
    })
    service.registrarAsistencia(dummyAsistenciaCruso).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointCursos);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
