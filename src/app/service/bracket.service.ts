import { Injectable } from '@angular/core';
import { CloneObject } from '../helper/helper';
import { htmlTages as htmlTags } from '../helper/htmlTages';
import { Colors } from '../model/colors';
import { Tag } from '../model/tag';
import { TagType } from '../model/tagType';

@Injectable({
  providedIn: 'root',
})
export class BracketService {
  private openers = ['{', '[', '('];
  private closers = ['}', ']', ')'];
  private allBrackets = ['[', '(', ']', ')', '{', '}'];
  private match = {
    '}': '{',
    ']': '[',
    ')': '(',
  };

  private htmlText: string;
  private colors = Colors;
  constructor() {}

  isValidOpenClosedBrackets(text: string) {
    if (text && text.length > 0) {
      let lastOpener = [];
      for (let i = 0; i < text.length; i++) {
        if (this.openers.includes(text[i])) {
          lastOpener.push(text[i]);
        }
        if (this.closers.includes(text[i])) {
          const last = lastOpener.pop();
          if (last !== this.match[text[i]]) {
            return false;
          }
        }
      }
      return lastOpener.length == 0;
    }

    return true;
  }

  formatTag(tag: Tag, type: TagType): string {
    return this.replaceTag(tag, type);
  }

  private replaceTag(tag: Tag, type: TagType): string {
    return this.addGreenSpan(tag?.FieldName, type);
  }
  private addGreenSpan(fieldName: string, type: TagType): string {
    if (type) {
      return `${htmlTags.openSpanTag(this.colors[type.color])}${fieldName}${
        htmlTags.closeSpan
      } `;
    }
    return fieldName;
  }
}
