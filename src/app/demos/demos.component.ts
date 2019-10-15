import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../common-app';
import { LoggerService } from 'src/indra-core';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemosComponent implements OnInit {
  nombre = 'mundo';
  listado = [
    {id: 1, nombre: 'Madrid'},
    {id: 2, nombre: 'barcelona'},
    {id: 3, nombre: 'SEVILLA'},
    {id: 4, nombre: 'a coruña'},
  ];
  idProvincia = 2;

  resultados: string = null;
  visible = true;
  estetica = { importante: true, error: false, urgente: true };

  constructor(public notify: NotificationService, private out: LoggerService) { }

  saluda() {
    this.resultados = `Hola ${this.nombre}`;
  }
  despide() {
    this.resultados = `Adios ${this.nombre}`;
  }
  di(algo: string) {
    this.resultados = `Dice ${algo}`;
  }

  cambia() {
    this.visible = !this.visible;
    this.estetica.importante = !this.estetica.importante;
    this.estetica.error = !this.estetica.error;
  }

  calcula(a: number, b: number): number { return a + b; }

  public add(provincia: string) {
    if (!provincia || provincia === '') {
      this.out.error('Falta la provincia.');
      return;
    }
    const id = this.listado.length > 0 ? (this.listado[this.listado.length - 1].id + 1) : 1;
    this.listado.push({ id, nombre: provincia });
    this.idProvincia = id;
  }

  ngOnInit() {
  }

}
