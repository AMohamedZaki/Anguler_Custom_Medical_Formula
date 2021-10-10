import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormualTreeRoutingModule } from './formual-tree-routing.module';
import { FormualTreeComponent } from './components/formual-tree/formual-tree.component';
import { AddRuleGroupComponent } from './components/formual-tree/formula-group/buttons/add-rule-group/add-rule-group.component';
import { RuleComponent } from './components/formual-tree/formula-group/rule/rule.component';
import { AndOrComponent } from './components/formual-tree/formula-group/buttons/and-or/and-or.component';
import { FormulaGroupComponent } from './components/formual-tree/formula-group/formula-group.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnumToArrayPipe } from '../pipe/enumToArray.pipe';
import { ClinicalGroupTestComponent } from './components/formual-tree/formula-group/rule/controls/clinical-group-test/clinical-group-test.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { AddRuleButtonComponent } from './components/formual-tree/formula-group/buttons/add-rule-button/add-rule-button.component';


@NgModule({
  declarations: [
    FormualTreeComponent,
    AddRuleGroupComponent,
    AndOrComponent,
    RuleComponent,
    FormulaGroupComponent,
    EnumToArrayPipe,
    ClinicalGroupTestComponent,
    AddRuleButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    ReactiveFormsModule,
    FormualTreeRoutingModule
  ],
  exports: [
    FormualTreeComponent
  ]
})
export class FormualTreeModule { }
