import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormualTreeRoutingModule } from './formual-tree-routing.module';
import { FormualTreeComponent } from './components/formual-tree/formual-tree.component';


@NgModule({
  declarations: [
    FormualTreeComponent
  ],
  imports: [
    CommonModule,
    FormualTreeRoutingModule
  ]
})
export class FormualTreeModule { }
