import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';

@Component({
  selector: 'app-comparendo',
  templateUrl: './comparendo.component.html',
  styleUrls: ['./comparendo.component.css']
})
export class ComparendoComponent implements OnInit {

  constructor() { }

  public serviciosComparendoItems: MenuItem[] = [
    { url: './registrar', nombre: 'Registrar Comparendo' },
    { url: './listar', nombre: 'Listar Comparendos' }
    
  ];

  ngOnInit(): void {
  }

}
