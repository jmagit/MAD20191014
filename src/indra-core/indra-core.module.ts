import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PIPES_CADENAS } from './pipes/cadenas.pipe';
import { IndraSizerComponent } from './components/indra-sizer.component';



@NgModule({
  declarations: [
    PIPES_CADENAS, IndraSizerComponent,
  ],
  exports: [
    PIPES_CADENAS, IndraSizerComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class IndraCoreModule { }
