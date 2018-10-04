import { Component, OnInit, HostBinding, HostListener, Directive } from '@angular/core';

@Component({
  selector: 'app-patron',
  templateUrl: './patron.component.html',
  styleUrls: ['./patron.component.css']
})

@Directive({
  selector: "[appDirectivaPropia]";
})
export class DirectivaPropiaDirective implements OnInit {

  constructor() { }

@HostBinding("class.color") cambio:Boolean = false;
@HostListener("mouseover") onOver{
  this.cambio = true;
}
@HostListener("mouseout") onOver{
  this.cambio = false;
}


  ngOnInit() {
  }

}
