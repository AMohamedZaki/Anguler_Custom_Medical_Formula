import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormualTreeRoutingModule } from './formual-tree-routing.module';
import { FormualTreeComponent } from './components/formual-tree/formual-tree.component';
import { AddRuleGroupComponent } from './components/formual-tree/add-rule-group/add-rule-group.component';
import { AndOrComponent } from './components/formual-tree/and-or/and-or.component';


@NgModule({
  declarations: [
    FormualTreeComponent,
    AddRuleGroupComponent,
    AndOrComponent
  ],
  imports: [
    CommonModule,
    FormualTreeRoutingModule
  ]
})
export class FormualTreeModule { }
