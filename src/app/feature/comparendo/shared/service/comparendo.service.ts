import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Comparendo } from '../model/comparendo';
import { PagoComparendo } from '../model/pagoComparendo';
import { RegistarComparendo } from '../model/registrarComparendo';


@Injectable({
  providedIn: 'root'
})
export class ComparendoService {


  constructor(protected http: HttpService) {}

  public consultarPorInfractor(identificacionInfractor: String){
    return this.http.doGet<Comparendo[]>(`${environment.endpoint}/comparendos/idInfractor/${identificacionInfractor}`, this.http.optsName('consultar comparendos por infractor'))
  }


  public registrarComparendo(registroComparendo: RegistarComparendo) {
    return this.http.doPost<RegistarComparendo, boolean>(`${environment.endpoint}/comparendos`, registroComparendo,
                                                this.http.optsName('registrar comparendos'));
  }

  public pagarComparendos(pagoComparendo: PagoComparendo[]){
    return this.http.doPut<PagoComparendo[], boolean>(`${environment.endpoint}/comparendos/pago`, pagoComparendo,
    this.http.optsName('registrar pago comparendos'));
  }

}
