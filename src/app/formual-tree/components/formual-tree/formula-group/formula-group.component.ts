import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormArray, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { Group, Rule } from 'src/app/model/group';

@Component({
  selector: 'formula-group',
  templateUrl: './formula-group.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
  styleUrls: ['./formula-group.component.scss']
})
export class FormulaGroupComponent implements OnInit {

  @Input() group: Group = {} as Group;
  @Input() form: FormGroup = {} as FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

  onAddGroup(group: Group) {
    if (!this.group.groups) {
      this.group.groups = [];
    }
    this.group.groups.push(group);
    this.form.addControl(this.group.id.toString(), new FormGroup({'rules': new FormArray([])}));
  }

  onAddRule(rule: Rule) {
    if (!this.group.rules) {
      this.group.rules = [];
    }
    this.group.rules.push(rule);
    const formArray = this.form.get('rules') as FormArray;
    formArray.push(new FormGroup({}));
  }


  getFormGroup(i: number): FormGroup {
    return (this.form.get('rules') as FormArray).controls[i] as FormGroup;
  }

}
