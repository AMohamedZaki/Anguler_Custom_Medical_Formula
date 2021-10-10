import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Rule } from 'src/app/model/group';

@Component({
  selector: 'add-rule-button',
  templateUrl: './add-rule-button.component.html',
  styleUrls: ['./add-rule-button.component.scss']
})
export class AddRuleButtonComponent implements OnInit {
  @Output()
  onAddRule = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onAddRuleClick(): void {
    this.onAddRule.emit({} as Rule);
  }
}
