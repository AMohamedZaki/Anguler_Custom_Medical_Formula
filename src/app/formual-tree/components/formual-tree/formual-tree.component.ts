import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AssginGroupsToForms as CreateFormUsingGroups, getGroupes } from 'src/app/helper/helper';
import { Group } from 'src/app/model/group';

@Component({
  selector: 'app-formual-tree',
  templateUrl: './formual-tree.component.html',
  styleUrls: ['./formual-tree.component.scss']
})
export class FormualTreeComponent implements OnInit {

  form: FormGroup;
  group = new Group();
  constructor() {
    this.form = new FormGroup({});
    CreateFormUsingGroups(this.group, this.form);
   }

  ngOnInit(): void {
    // define if it add or edit
    this.form = this.createForm();
  }

  createForm(): FormGroup{
    return new FormGroup({
      groups: new FormArray([]),
      id: new FormControl(0),
      operator: new FormControl(1),
      rules: new FormArray([])
    });
  }

}
