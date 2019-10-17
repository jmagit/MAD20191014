import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../main/home/home.component';
import { DemosComponent } from '../demos/demos.component';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { PersonasFormComponent } from '../personas-form/personas-form.component';
import { PersonasComponent } from '../personas';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.css'],
  entryComponents: [
    HomeComponent, DemosComponent, CalculadoraComponent, 
    PersonasFormComponent, PersonasComponent,
  ]
})
export class DinamicoComponent implements OnInit {
  menu = [
    { texto: 'personas', componente: PersonasComponent},
    { texto: 'inicio', componente: HomeComponent},
    { texto: 'demos', componente: DemosComponent},
    { texto: 'calculadora', componente: CalculadoraComponent},
    { texto: 'personas form', componente: PersonasFormComponent},
  ];
  seleccionado = this.menu[0].componente;

  constructor() { }

  selecciona(index: number) {
    this.seleccionado = this.menu[index].componente;
  }
  
  ngOnInit() {
  }

}
