import { Component, OnInit } from '@angular/core';
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
  tags: Tag[] = [];
  tagsByType: { id: [string]; tags: Tag[] } = {} as {
    id: [string];
    tags: Tag[];
  };
  keys: string[] = [];
  tagTypeEnum = TagTypeEnum;

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

  blur(event: any) {
    let textAreaText = CloneObject(event.value);
    textAreaText = this.bracketService.formatText(textAreaText);
    this.textAreaText = this.sanitizer.bypassSecurityTrustHtml(textAreaText);
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
    console.log(event);
  }
}
