import { Component, OnInit } from '@angular/core';
// importo jquery después de haberlo instalado en angular
import * as $ from 'jquery';

@Component({
  selector: 'app-micomponente',
  templateUrl: './micomponente.component.html',
  styleUrls: ['./micomponente.component.css']
})
export class MicomponenteComponent implements OnInit {
  
  texto:String = "esto es una variable de texto creada por mí y llamada desde mi componente";
  puntuacion:Number = 9;

  // creando unas variables y alguna función
  textoUser:String = null;
  botonPulsado:Boolean = false;
  // ME FALTA CREAR LA CLASE "Alumno" con su constructor y tal (día 2oct)
/*   alumnos:Alumno[] = [
    new Alumno(1, "Juan", "Gómez", "Madrid"),
    new Alumno2(2, "Pedro", "Jiménez", "Guelva")
  ]; */


  constructor() { }

  ngOnInit() {
    document.getElementById("test").onclick = function(){
      $("h3").append("<p> Has pulsado </p>");
    };
    
  }

  getPuntuacion()
  {
    return this.puntuacion;
  }

  getName(nombre)
  {
    return console.log(nombre);
  }
  
  

}
