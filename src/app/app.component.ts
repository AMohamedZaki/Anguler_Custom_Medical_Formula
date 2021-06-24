import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {
  CloneObject,
  getTags,
  getTypes,
  IsNumber,
  RandomNumber,
} from './helper/helper';
import { Tag } from './model/tag';
import { TagType, TagTypeEnum } from './model/tagType';
import { BracketService } from './service/bracket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'editor';
  textAreaText: SafeHtml;
  paragraphText: SafeHtml;
  innerParagraphText = '';
  tags: Tag[] = [];
  tagsByType: { id: [string]; tags: Tag[] } = {} as {
    id: [string];
    tags: Tag[];
  };
  keys: string[] = [];
  tagTypeEnum = TagTypeEnum;

  formulaList: Tag[] = [];
  undoList: Tag[] = [];
  redoList: Tag[] = [];

  constructor(
    private sanitizer: DomSanitizer,
    private bracketService: BracketService
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

  handleText(tag: Tag): void {
    let innerParagraphText = this.innerParagraphText
      ? CloneObject(this.innerParagraphText)
      : '';
    const _type = this.getType(tag.TypeId);
    this.innerParagraphText = innerParagraphText +=
      this.bracketService.formatTag(tag, _type);
    this.paragraphText =
      this.sanitizer.bypassSecurityTrustHtml(innerParagraphText);
  }

  groupByTagType(tags: Tag[]): any {
    return tags.reduce((r, a) => {
      r[a.TypeId] = r[a.TypeId] || [];
      r[a.TypeId].push(a);
      return r;
    }, Object.create(null));
  }

  getTypeNameById(id: number): string {
    const type = this.getType(id)?.type;
    return this.tagTypeEnum[type];
  }

  getType(id: number): TagType {
    return getTypes().find((tag) => tag.id == id);
  }

  AppendText(event: Tag): void {
    const type = this.getType(event?.TypeId)?.type;
    if (type == TagTypeEnum.numbers) {
      this.handleNumberTag(event);
    } else {
      this.formulaList.push(event);
    }
    this.textAreaText = this.formulaList.map((it) => it.FieldName).join('');
    this.handleText(event);
  }

  setTextArea(tags: Tag[]): void {
    if (tags && tags.length > 0) {
      this.textAreaText = tags.map((it) => it.FieldName).join('');
      this.innerParagraphText = '';
      tags.forEach((tag) => {
        this.handleText(tag);
      });
    }
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
}
