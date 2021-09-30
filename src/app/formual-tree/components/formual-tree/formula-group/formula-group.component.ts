import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'formula-group',
  templateUrl: './formula-group.component.html',
  styleUrls: ['./formula-group.component.scss']
})
export class FormulaGroupComponent implements OnInit {

  @Input() showParent = false;
  constructor() { }

  ngOnInit(): void {
  }

}
