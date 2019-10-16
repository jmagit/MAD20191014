import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../main/home/home.component';
import { DemosComponent } from '../demos/demos.component';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.css'],
  entryComponents: [
    HomeComponent, DemosComponent,
  ]
})
export class DinamicoComponent implements OnInit {
  menu = [
    { texto: 'inicio', componente: HomeComponent},
    { texto: 'demos', componente: DemosComponent},
  ];
  seleccionado = this.menu[0].componente;

  constructor() { }

  selecciona(index: number) {
    this.seleccionado = this.menu[index].componente;
  }
  
  ngOnInit() {
  }

}
