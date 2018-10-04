import { Component, OnInit } from '@angular/core';

import { BbddService } from '../conexion/bbdd.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleados:any;
  constructor(conexion:BbddService) 
  { 
    conexion.muestraPersonas().subscribe(empleado => {this.empleados = empleado});
  }

  ngOnInit() {
  }

}
