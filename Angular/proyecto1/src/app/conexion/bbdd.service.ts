import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
// import map

export interface Empleado {
  // ojo con las mayúsculas y tal en los nombres de los campos en la bb.dd.
  nombre:string,
  apellidos:string,
  ciudad:string
}

@Injectable({
  providedIn: 'root'
})
export class BbddService {

  private elementosColeccion:AngularFirestoreCollection<Empleado>;

  // esto es para conectar el servicio, el componente y la bb.dd.
  persona: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.elementosColeccion = db.collection<Empleado>('empleados');
    this.persona = this.elementosColeccion.valueChanges();
  }

  anadeEmpleado(nuevoEmpleado:Empleado)
  {
    this.elementosColeccion.add(nuevoEmpleado);
  }
  borraUser()
  {}
  actualizaUser()
  {}

  public muestraPersonas()
  {
    return this.persona;
  }
}
