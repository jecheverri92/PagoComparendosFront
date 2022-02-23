import { TestBed } from '@angular/core/testing';

import { AsistenciaCursoService } from './asistencia-curso.service';

describe('AsistenciaCursoService', () => {
  let service: AsistenciaCursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsistenciaCursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
