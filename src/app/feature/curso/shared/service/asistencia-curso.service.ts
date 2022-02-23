import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { AsistenciaCurso } from '../model/asistenciaCurso';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaCursoService {

  
  constructor(protected http: HttpService) {}


  public registrarAsistencia(asistenciaCurso: AsistenciaCurso) {
    return this.http.doPost<AsistenciaCurso, boolean>(`${environment.endpoint}/cursos`, asistenciaCurso,
                                                this.http.optsName('registrar asistencia curso'));
  }



}
