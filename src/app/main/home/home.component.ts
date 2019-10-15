import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Hola Mundo';

  // constructor(out: LoggerService) {
  //   out.error('Esto es un error');
  //   out.warn('Esto es un warn');
  //   out.info('Esto es un info');
  //   out.log('Esto es un log');
  // }
  // constructor(notify: NotificationService) {
  //   notify.add('Esto es una notificación');
  //   notify.remove(0);
  //   notify.add('');
  //   notify.remove(0);
  // }

  constructor() { }

  ngOnInit() {
  }

}
