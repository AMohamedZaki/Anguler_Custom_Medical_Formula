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

  handleText() {
    const paragraphText = CloneObject(this.textAreaText);
    this.paragraphText = this.bracketService.formatText(paragraphText);
    // this.textAreaText = this.sanitizer.bypassSecurityTrustHtml(textAreaText);
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
    this.handleText();
  }

  setTextArea(event: Tag[]) {
    if (event && event.length > 0) {
      this.textAreaText = event.map((it) => it.FieldName).join('');
      this.handleText();
    }
  }
}
