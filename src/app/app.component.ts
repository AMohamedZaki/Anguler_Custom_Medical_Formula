import { Component, OnInit } from '@angular/core';
import {
  CloneObject,
  getTags,
  IsNumber,
  LoadFormula,
  RandomNumber,
} from './helper/helper';
import { Tag } from './model/tag';
import { TagTypeEnum } from './model/tagType';
import { FormulaService } from './service/formula.service';
import { TagTypeService } from './service/tag-type.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'editor';
  textAreaText: string;
  tags: Tag[] = [];
  tagsByType: { id: [string]; tags: Tag[] } = {} as {
    id: [string];
    tags: Tag[];
  };
  keys: string[] = [];

  formulaList: Tag[] = [];
  undoList: Tag[] = [];
  redoList: Tag[] = [];

  constructor(
    private formulaService: FormulaService,
    private tagTypeService: TagTypeService
  ) {
    this.tags = getTags();
  }

  ngOnInit(): void {
    this.getObjectProps();
  }

  private getObjectProps(): void {
    this.tagsByType = this.groupByTagType(this.tags);
    this.keys = Object.keys(this.tagsByType);
  }

  groupByTagType(tags: Tag[]): any {
    return tags.reduce((r, a) => {
      r[a.TypeId] = r[a.TypeId] || [];
      r[a.TypeId].push(a);
      return r;
    }, Object.create(null));
  }

  AppendText(event: Tag): void {
    const type = this.tagTypeService.getType(event?.TypeId)?.type;
    if (type == TagTypeEnum.numbers) {
      this.handleNumberTag(event);
    } else {
      this.formulaList.push(event);
    }
    this.textAreaText = this.formulaList
      .map((it) => it.FieldName)
      .join(' ');
  }

  getTypeNameById(id: number): string {
    return this.tagTypeService.getTypeNameById(id);
  }

  handleNumberTag(event: Tag): Tag {
    const length = this.formulaList?.length;
    if (length && length > 0) {
      const tag = this.formulaList[length - 1];
      if (IsNumber(tag.FieldName)) {
        tag.FieldName += event.FieldName;
        tag.Name += event.Name;
        return;
      }
    }
    const updatedEvent = CloneObject(event) as Tag;
    updatedEvent.id = RandomNumber();
    updatedEvent.TypeId = TagTypeEnum.numbers;
    this.formulaList.push(updatedEvent);
  }

  loadText(): void {
    this.textAreaText = LoadFormula();
    this.formulaService.getTags(this.tags);
    this.formulaList = this.formulaService.getFormulaTags(this.textAreaText);
  }

  setTextArea(tags: Tag[]): void {
    if (tags && tags.length > 0) {
      this.textAreaText = tags.map((it) => it.FieldName).join('');
    }
  }
}
