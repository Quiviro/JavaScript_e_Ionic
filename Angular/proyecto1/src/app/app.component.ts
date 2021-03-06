import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto1';
  items: Observable<any[]>;
  constructor(private db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
    console.log("items: ", this.items);
  }
}
