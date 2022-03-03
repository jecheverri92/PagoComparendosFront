
import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PagoComparendo } from '@comparendo/shared/model/pagoComparendo';
import { DialogComponent } from '@shared/components/dialog/dialog.component';
import { AsistenciaCurso } from 'src/app/feature/curso/shared/model/asistenciaCurso';
import { AsistenciaCursoService } from 'src/app/feature/curso/shared/service/asistencia-curso.service';

import { Comparendo } from '../../shared/model/comparendo';
import { ComparendoService } from '../../shared/service/comparendo.service';


@Component({
  selector: 'app-listar-comparendo',
  templateUrl: './listar-comparendo.component.html',
  styleUrls: ['./listar-comparendo.component.css']
})
export class ListarComparendoComponent implements OnInit {

  public listaComparendos:Comparendo[] = [];

  public identificacionInfractor:string;

  displayedColumns: string[] = ['numeroComparendo', 'tipoInfraccion', 'fechaComparendo', 'valorComparendo', 'acciones'];
  dataSource = new MatTableDataSource<Comparendo>(this.listaComparendos);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(protected comparendoService: ComparendoService, 
    private asistenciaCursoService: AsistenciaCursoService,
    public  dialog: MatDialog,
    private datepipe: DatePipe) { 
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    
  }

  buscarPorInfractor(): void{
    console.log(this.identificacionInfractor)
    this.comparendoService.consultarPorInfractor(this.identificacionInfractor).subscribe(data =>{
      this.listaComparendos = data;
      this.dataSource.data = this.listaComparendos;
      console.log(this.listaComparendos);
    });
  }

  openDialogPago(comparendo: Comparendo):void{
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '30%',
      data:`¿Esta seguro que desea registrar el pago del comparendo N° ${comparendo.numeroComparendo}
      por un valor de $ ${comparendo.valorComparendo} ?`
    })
    dialogRef.afterClosed().subscribe(res=>{
      if(res){
        let pagoComparendo: PagoComparendo[] = [PagoComparendo.unPagoComparendo(
          {...comparendo,
          valorPagado:comparendo.valorComparendo}
        )];
        this.comparendoService.pagarComparendos(pagoComparendo).subscribe(data =>{      
          console.log(data);
        });
      }
    })
  }

  openDialogCurso(comparendo: Comparendo):void{
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '30%',
      data:`¿El Infractor con identificacion:  ${comparendo.identificacionInfractor} 
      asistió al curso para recibir beneficios por el comparendo N° ${comparendo.numeroComparendo} ?`
    })
    dialogRef.afterClosed().subscribe(res=>{
      if(res){
        let asistenciaCurso: AsistenciaCurso = AsistenciaCurso.crearAsistencia({
          ...comparendo,
          fechaAsistencia: this.datepipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss')
        })
        this.asistenciaCursoService.registrarAsistencia(asistenciaCurso).subscribe(data =>{
          console.log(data);
        })
      }
    })
  }



}
