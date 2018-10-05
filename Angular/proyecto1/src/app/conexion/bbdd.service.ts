import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
// import map
import { map } from 'rxjs/operators';

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

  private accesoElemento: AngularFirestoreDocument<Empleado>;

  // esto es para conectar el servicio, el componente y la bb.dd.
  persona: Observable<any[]>;
  constructor(private db: AngularFirestore) {
    // establece la conexión con la base de datos, como una tubería
    // pero no descarga la información, solo accede a ella
    this.elementosColeccion = db.collection<Empleado>('empleados');
    // snapshotChanges(): podemos conocer el id de los campos de la bb.dd.
    this.persona = this.elementosColeccion.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Empleado;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  anadeEmpleado(nuevoEmpleado:Empleado)
  {
    this.elementosColeccion.add(nuevoEmpleado);
  }
  borraUser(borraUser)
  {
    this.accesoElemento = this.db.doc<Empleado>(`empleados/${borraUser}`); 
    //sintaxis ECMAscript6
    this.accesoElemento.delete();
  }
  actualizaUser(actualizaUser)
  {
    this.accesoElemento = this.db.doc<Empleado>(`empleados/${this.actualizaUser}`);
  }

  public muestraPersonas()
  {
    return this.persona;
  }
}
