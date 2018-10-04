import { Component, OnInit } from '@angular/core';

import { BbddService } from '../conexion/bbdd.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleados:any;
  conexion:BbddService;
  nuevoEmpleado:any = {
    nombre:"",
    apellidos:"",
    ciudad:""
  }
  constructor(conexion:BbddService) 
  { 
    conexion.muestraPersonas().subscribe(empleado => {this.empleados = empleado});
  }

  ngOnInit() {
  }

  agregarEmpleado()
  {
    this.conexion.anadeEmpleado(this.nuevoEmpleado);
  }

}
