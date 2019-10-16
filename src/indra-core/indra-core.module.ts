import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PIPES_CADENAS } from './pipes/cadenas.pipe';
import { IndraSizerComponent } from './components/indra-sizer.component';
import { PIPES_NUMERICOS } from './pipes/numericos.pipe';



@NgModule({
  declarations: [
    PIPES_CADENAS, IndraSizerComponent, PIPES_NUMERICOS,
  ],
  exports: [
    PIPES_CADENAS, IndraSizerComponent, PIPES_NUMERICOS,
  ],
  imports: [
    CommonModule
  ]
})
export class IndraCoreModule { }
