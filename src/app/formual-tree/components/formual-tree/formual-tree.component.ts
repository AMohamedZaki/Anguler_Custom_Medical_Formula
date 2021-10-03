import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AssginGroupsToForms, getGroupes } from 'src/app/helper/helper';
import { Group } from 'src/app/model/group';

@Component({
  selector: 'app-formual-tree',
  templateUrl: './formual-tree.component.html',
  styleUrls: ['./formual-tree.component.scss']
})
export class FormualTreeComponent implements OnInit {

  form: FormGroup;
  group: Group;
  constructor() {
    this.form = new FormGroup({});
    this.group = getGroupes();
    AssginGroupsToForms(this.group, this.form);
   }

  ngOnInit(): void {

  }

}
