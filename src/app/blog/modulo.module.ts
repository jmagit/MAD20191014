import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BLOG_COMPONENTES } from './componente.component';
import { FormsModule } from '@angular/forms';
import { IndraCoreModule } from 'src/indra-core';
import { CommonAppModule } from '../common-app';
import { RouterModule } from '@angular/router';
import {EditorModule} from 'primeng/editor';
import {InplaceModule} from 'primeng/inplace';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    BLOG_COMPONENTES
  ],
  exports: [
    BLOG_COMPONENTES
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([]), 
    IndraCoreModule, CommonAppModule,
    NgbModule, EditorModule, InplaceModule,
  ]
})
export class BlogModule { }
