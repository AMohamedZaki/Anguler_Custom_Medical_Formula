import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Group, LogicalOperators, Rule } from 'src/app/model/group';

@Component({
  selector: 'add-rule-group',
  templateUrl: './add-rule-group.component.html',
  styleUrls: ['./add-rule-group.component.scss']
})
export class AddRuleGroupComponent implements OnInit {
  @Output()
  onAddGroup = new EventEmitter();
  
  @Output()
  onAddRule = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onAddGroupClick() {
    this.onAddGroup.emit({ rules: [{} as Rule], operator: LogicalOperators.AND} as Group)
  }

  onAddRuleClick() {
    this.onAddRule.emit({} as Rule)
  }
}
