import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Tag } from '../../../../model/tag';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {
  @Input() tag: Tag = {} as Tag;
  @Output('onTagClick') onTagClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  setTag(tag: Tag): void {
    this.onTagClick.emit(tag);
  }
}
