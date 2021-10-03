import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Rule } from 'src/app/model/group';

@Component({
  selector: 'rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.scss']
})
export class RuleComponent implements OnInit {
  @Input()
  rule: Rule;

  @Input()
  form: FormGroup = {} as FormGroup;

  constructor() {
    this.rule = {} as Rule;
  }

  ngOnInit(): void {
  }

}
