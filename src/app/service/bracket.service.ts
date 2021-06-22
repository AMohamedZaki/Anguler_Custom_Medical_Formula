import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CloneObject } from '../helper/helper';
import { htmlTages as htmlTags } from '../helper/htmlTages';
import { Colors } from '../model/colors';

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
  private simpleText: string;

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

  formatText(text: string): string {
    this.htmlText = CloneObject(text);
    this.allBrackets.forEach((element) => {
      if (this.htmlText.indexOf(element) > -1 && this.openers.includes(element)) {
        this.htmlText = this.replaceBrackets(this.htmlText, element);
      }
    });
    return this.htmlText;
  }

  private replaceBrackets(text: string, bracket: string) {
    return text.split(bracket).join(this.addGreenSpan(bracket));
  }
  private addGreenSpan(bracket: string, color: Colors = Colors.green) {
    return `${htmlTags.openSpanTag(color)}${bracket}${htmlTags.closeSpan}`;
  }
}
