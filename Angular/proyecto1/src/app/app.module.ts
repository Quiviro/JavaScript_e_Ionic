import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// importo paquete para ruta
import { Routes, RouterModule } from '@angular/router';

// importo otro paquete para ngModel
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MicomponenteComponent } from './micomponente/micomponente.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PatronComponent } from './patron/patron.component';
import { DirectivaPropiaDirective } from './patron/directiva-propia.directive';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { EmpleadosComponent } from './empleados/empleados.component';
import { BbddService } from './conexion/bbdd.service';

// creo las rutas necesarias
const rutas: Routes = [
  // si la ruta es "contacto", ejecuta el componente "Contacto"
  {path:"contacto", component:ContactoComponent},
  // normalmente, por SEO y eso, mandaríamos a una página 404
  {path:"**", redirectTo:"/", pathMatch:"full"},
  {path:"empleados", component:EmpleadosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MicomponenteComponent,
    NavbarComponent,
    ContactoComponent,
    PatronComponent,
    DirectivaPropiaDirective,
    EmpleadosComponent
  ],
  imports: [
    BrowserModule,
    // le indico el tema de la ruta
    RouterModule.forRoot(rutas),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [BbddService, AngularFireStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
