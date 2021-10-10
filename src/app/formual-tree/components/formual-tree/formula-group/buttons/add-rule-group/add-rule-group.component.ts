import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { Group, LogicalOperators, Rule } from 'src/app/model/group';

@Component({
  selector: 'add-rule-group',
  templateUrl: './add-rule-group.component.html',
  styleUrls: ['./add-rule-group.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
})
export class AddRuleGroupComponent implements OnInit {
  @Output() 
  onAddGroup = new EventEmitter();

  @Output()
  onDelete = new EventEmitter();

  @Input()
  Index?: number = null;

  constructor() { }

  ngOnInit(): void {
  }

  onAddGroupClick(): void {
    this.onAddGroup.emit({ rules: [{} as Rule], operator: LogicalOperators.AND } as Group)
  }

  onDeleteClick(): void {
    this.onDelete.emit(null);
  }

}
