import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input()
  DataSource: any[] = [];

  @Input()
  FieldName = '';

  @Input()
  FieldValue = null;

  @Input()
  formControlName = '';

  @Input()
  id = '';
  constructor() { }

  ngOnInit(): void {
  }

}
