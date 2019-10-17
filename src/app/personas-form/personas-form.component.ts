import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas-form',
  templateUrl: './personas-form.component.html',
  styleUrls: ['./personas-form.component.css']
})
export class PersonasFormComponent implements OnInit {
  VM = {
    //Elemento: null
    Elemento: {  }
    // Elemento: { id: 1, nombre: 'Pepito', apellidos: 'Grillo', edad: 101 }
  }
  constructor() { }

  ngOnInit() {
  }

}
