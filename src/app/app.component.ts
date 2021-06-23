import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CloneObject, getTags, getTypes } from './helper/helper';
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

  ngOnInit() {
    this.getObjectProps();
  }

  private getObjectProps() {
    this.tagsByType = this.groupByTagType(this.tags);
    this.keys = Object.keys(this.tagsByType);
  }

  // handleText(handleText: string) {
  //   let paragraphText = CloneObject(this.textAreaText);
  //   paragraphText = this.bracketService.formatText(paragraphText);
  //   this.paragraphText = this.sanitizer.bypassSecurityTrustHtml(paragraphText);
  // }

  handleText(tag: Tag) {
    let innerParagraphText = this.innerParagraphText
      ? CloneObject(this.innerParagraphText)
      : '';
    const _type = this.getType(tag.TypeId);
    this.innerParagraphText = innerParagraphText += this.bracketService.formatTag(tag, _type);
    this.paragraphText = this.sanitizer.bypassSecurityTrustHtml(innerParagraphText);
  }

  groupByTagType(tags: Tag[]) {
    return tags.reduce(function (r, a) {
      r[a.TypeId] = r[a.TypeId] || [];
      r[a.TypeId].push(a);
      return r;
    }, Object.create(null));
  }

  getTypeNameById(id: number) {
    const type = this.getType(id)?.type;
    return this.tagTypeEnum[type];
  }

  getType(id: number): TagType {
    return getTypes().find((tag) => tag.id == id);
  }

  AppendText(event: Tag) {
    this.formulaList.push(event);
    this.textAreaText = this.formulaList.map((it) => it.FieldName).join('');
    this.handleText(event);
  }

  setTextArea(tags: Tag[]) {
    if (tags && tags.length > 0) {
      this.textAreaText = tags.map((it) => it.FieldName).join('');
      this.innerParagraphText = '';
      tags.forEach((tag) => {
        this.handleText(tag);
      });
    }
  }
}
