import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { RESTDAOService } from '../base-code/dao';
import { HttpClient } from '@angular/common/http';
import { NotificationService, NotificationType } from '../common-app';

@Injectable({providedIn: 'root'})
export class PersonasDAOService extends RESTDAOService<any, number> {
  constructor(http: HttpClient) {
    super(http, 'personas');
   }
}

@Component({
  selector: 'app-personas-form',
  templateUrl: './personas-form.component.html',
  styleUrls: ['./personas-form.component.css'],
  // providers: [NotificationService]
})
export class PersonasFormComponent implements OnInit {
  VM = {
    //Elemento: null
    Elemento: {  }
    // Elemento: { id: 1, nombre: 'Pepito', apellidos: 'Grillo', edad: 101 }
  }
  constructor(private dao: PersonasDAOService, private notify: NotificationService) { }

  ngOnInit() {
    this.dao.get(101).subscribe(
      data => this.VM.Elemento = data,
      err => this.notify.add(err.message)
    );
  }
  send() {
    // this.dao.add(this.VM.Elemento).subscribe(
    //   data => this.notify.add('Creado', NotificationType.info),
    //   err => this.notify.add(err.message)
    // )
    this.dao.change(this.VM.Elemento['id'], this.VM.Elemento).subscribe(
      data => this.notify.add('OK', NotificationType.info),
      err => this.notify.add(err.message)
    )
  }

}
