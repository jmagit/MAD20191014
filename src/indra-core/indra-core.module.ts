import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PIPES_CADENAS } from './pipes/cadenas.pipe';
import { IndraSizerComponent } from './components/indra-sizer.component';
import { PIPES_NUMERICOS } from './pipes/numericos.pipe';
import { MIS_VALIDADORES } from './directives/validadores.directive';



@NgModule({
  declarations: [
    PIPES_CADENAS, IndraSizerComponent, PIPES_NUMERICOS, MIS_VALIDADORES,
  ],
  exports: [
    PIPES_CADENAS, IndraSizerComponent, PIPES_NUMERICOS, MIS_VALIDADORES,
  ],
  imports: [
    CommonModule
  ]
})
export class IndraCoreModule { }
