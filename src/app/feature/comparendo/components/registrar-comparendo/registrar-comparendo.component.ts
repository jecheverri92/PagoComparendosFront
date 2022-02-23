import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistarComparendo } from '@comparendo/shared/model/registrarComparendo';
import { ComparendoService } from '@comparendo/shared/service/comparendo.service';

import { DatePipe } from '@angular/common';


import Swal from 'sweetalert2'

@Component({
  selector: 'app-registrar-comparendo',
  templateUrl: './registrar-comparendo.component.html',
  styleUrls: ['./registrar-comparendo.component.css']
})
export class RegistrarComparendoComponent implements OnInit {

  reactiveForm: FormGroup;

  registroComparendo: RegistarComparendo = RegistarComparendo.unRegistroComparendo({}); 

  public maxDate: Date;

  myDatepipe!: any;

  constructor(private _fb: FormBuilder,
              private comparendoService: ComparendoService,
              private datepipe: DatePipe){
  }

  ngOnInit(): void {
    this.reactiveForm = this._fb.group({
      numeroComparendo:[this.registroComparendo.numeroComparendo,[Validators.required, Validators.minLength(4), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
      identificacionInfractor:[this.registroComparendo.identificacionInfractor,[Validators.required, Validators.maxLength(30)]],
      tipoInfraccion:[this.registroComparendo.tipoInfraccion,[Validators.required]],
      fechaComparendo:[this.registroComparendo.fechaComparendo,[Validators.required]]
    })
  
    this.reactiveForm.valueChanges.subscribe(value => {
      this.registroComparendo = value;
      this.registroComparendo.fechaComparendo = this.datepipe.transform(this.reactiveForm.value.fechaComparendo, 'yyyy-MM-dd HH:mm:ss')
    });

    this.maxDate = new Date()
  }

  registrarComparendo(registroComparendo: RegistarComparendo):void {
    console.log(this.registroComparendo);
    this.comparendoService.registrarComparendo(registroComparendo).subscribe(
    resp => {
      console.log('success', resp)
        Swal.fire({
          icon: 'success',
          title: 'Exito',
          text: 'El comparendo ha sido registrado correctamente'
        })
        this.reactiveForm.reset();
    },
    error => {
      console.log('oops', error)
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.error?.['mensaje']
      })
    })
    
  }
    

  submitForm(){
    console.log(this.reactiveForm);
    this.registrarComparendo(this.registroComparendo);
  }


}
