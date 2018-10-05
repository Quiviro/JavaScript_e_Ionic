import { Component, OnInit } from '@angular/core';

import { BbddService } from '../conexion/bbdd.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleados:any;
  // hemos convertido conexion en propiedad mediante "private".
  // esta línea ya sobra
  // conexion:BbddService;
  nuevoEmpleado:any = {
    nombre:"",
    apellidos:"",
    ciudad:""
  }
  constructor(private conexion:BbddService) 
  { 
    this.conexion.muestraPersonas().subscribe(empleado => {this.empleados = empleado});
  }

  ngOnInit() {
  }

  agregarEmpleado()
  {
    this.conexion.anadeEmpleado(this.nuevoEmpleado);
  }
  borrarEmpleado(empleado)
  {
    this.conexion.borraUser(empleado);
  }
  cambiarEmpleado(empleado)
  {
    this.conexion.actualizaUser(empleado);
  }

}
