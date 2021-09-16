import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags-test',
  templateUrl: './tags-test.component.html',
  styleUrls: ['./tags-test.component.scss']
})
export class TagsTestComponent implements OnInit {

  itemsAsObjects = [{id: 0, name: 'Angular'}, {id: 1, name: 'React'}];
  constructor() { }

  ngOnInit(): void {
  }

}
