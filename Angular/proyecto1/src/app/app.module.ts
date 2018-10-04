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

// creo las rutas necesarias
const rutas: Routes = [
  // si la ruta es "contacto", ejecuta el componente "Contacto"
  {path:"contacto", component:ContactoComponent},
  // normalmente, por SEO y eso, mandaríamos a una página 404
  {path:"**", redirectTo:"/", pathMatch:"full"}
];

@NgModule({
  declarations: [
    AppComponent,
    MicomponenteComponent,
    NavbarComponent,
    ContactoComponent,
    PatronComponent,
    DirectivaPropiaDirective
  ],
  imports: [
    BrowserModule,
    // le indico el tema de la ruta
    RouterModule.forRoot(rutas),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
