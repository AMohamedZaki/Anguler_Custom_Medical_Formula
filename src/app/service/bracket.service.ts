import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CloneObject } from '../helper/helper';
import { htmlTags } from '../helper/htmlTages';
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
  colors = Colors;
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
      if (
        this.htmlText.indexOf(element) > -1 &&
        this.allBrackets.includes(element)
      ) {
        this.htmlText = this.replaceBrackets(this.htmlText, element);
      }
    });
    return this.htmlText;
  }

  private replaceBrackets(text: string, bracket: string) {
    return text.split(bracket).join(this.addSpan(bracket, true));
  }
  private addSpan(
    bracket: string,
    newLine = false,
    color: Colors = Colors.green
  ) {
    const newLineBr = newLine ? '<br /> &nbsp;&nbsp;&nbsp;&nbsp;' : '';
    return `${newLineBr}${htmlTags.openSpanTag(
      this.colors[color].toString()
    )}${bracket}${htmlTags.closeSpan}${newLineBr}`;
  }

  private addSpanOpenBracket(
    bracket: string,
    newLine = false,
    color: Colors = Colors.green
  ) {
    const newLineBr = newLine ? '<br /> &nbsp;&nbsp;&nbsp;&nbsp;' : '';
    return `${newLineBr}${htmlTags.openSpanTag(
      this.colors[color].toString()
    )}${bracket}${htmlTags.closeSpan}${newLineBr}`;
  }

  private addSpanCloseBracket(
    bracket: string,
    newLine = false,
    color: Colors = Colors.green
  ) {
    const newLineBr = newLine ? '<br /> &nbsp;&nbsp;&nbsp;&nbsp;' : '';
    return `${newLineBr}${htmlTags.openSpanTag(
      this.colors[color].toString()
    )}${bracket}${htmlTags.closeSpan}${newLineBr}`;
  }




}
