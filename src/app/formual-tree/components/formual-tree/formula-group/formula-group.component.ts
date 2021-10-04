import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ControlContainer, FormArray, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { Group, Rule } from 'src/app/model/group';

@Component({
  selector: 'formula-group',
  templateUrl: './formula-group.component.html',
  styleUrls: ['./formula-group.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class FormulaGroupComponent implements OnInit {

  @Input()
  group: Group = {} as Group;

  @Input()
  form: FormGroup = {} as FormGroup;

  @Input()
  index?: number = null;

  @Output()
  onDelete = new EventEmitter();

  get getGroupFormArray(): FormArray {
    return (this.form.get('groups') as FormArray);
  }

  get getRuleFormArray(): FormArray {
    return (this.form.get('rules') as FormArray);
  }

  constructor() { }

  ngOnInit(): void {
  }

  onAddGroup(group: Group): void {
    if (!this.group.groups) {
      this.group.groups = [];
    }
    this.group.groups.push(group);
    this.getGroupFormArray.push(this.createGroupForm());
  }

  onAddRule(rule: Rule): void {
    if (!this.group.rules) {
      this.group.rules = [];
    }
    this.group.rules.push(rule);
    this.getRuleFormArray.push(this.createRuleForm());
  }

  onDeleteGroup(): void {
    this.onDelete.emit(null);
  }

  deleteGroup(index: number): void {
    if (this.group.groups) {
      this.group.groups.splice(index, 1);
      this.getGroupFormArray.removeAt(index);
    }
  }
  deleteRule(index: number): void {
    if (this.group.rules) {
      this.group.rules.splice(index, 1);
      this.getRuleFormArray.removeAt(index);
    }
  }

  getRuleFormGroup(i: number): FormGroup {
    return this.getRuleFormArray.controls[i] as FormGroup;
  }

  getGroupFormGroup(i: number): FormGroup {
    return this.getGroupFormArray.controls[i] as FormGroup;
  }


  createGroupForm(): FormGroup {
    return new FormGroup({
      groups: new FormArray([]),
      id: new FormControl(null),
      operator: new FormControl(1),
      rules: new FormArray([this.createRuleForm()])
    });
  }

  createRuleForm(): FormGroup {
    return new FormGroup({
      operator: new FormControl(null),
      value: new FormControl(null),
    });
  }


}
