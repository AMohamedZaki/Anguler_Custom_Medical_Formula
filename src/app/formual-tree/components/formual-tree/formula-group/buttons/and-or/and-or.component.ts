import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { LogicalOperators } from 'src/app/model/group';

@Component({
  selector: 'and-or',
  templateUrl: './and-or.component.html',
  styleUrls: ['./and-or.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
})
export class AndOrComponent implements OnInit {
  logicalOperator = LogicalOperators;

  @Input()
  Index?: number = null;
  constructor() { }

  ngOnInit(): void {
  }

}
