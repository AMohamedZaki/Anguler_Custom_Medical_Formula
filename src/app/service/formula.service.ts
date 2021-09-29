import { Injectable } from '@angular/core';
import { IsObject } from '../helper/helper';
import { Tag } from '../model/tag';

@Injectable({
  providedIn: 'root',
})
export class FormulaService {
  private formulaList: Tag[] = [];

  constructor() {}

  getTags(tags: Tag[]): void {
    this.formulaList = tags;
  }

  createFormulaObject(formula: string): Tag[] {
    let word = '';
    const formulaList: Tag[] = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < formula.length; i++) {
      word += formula[i];

      if (this.formulaList && this.formulaList.length > 0) {
        const tag = this.formulaList.find(
          (item) => item.FieldName.toLowerCase() == word.toLowerCase()
        );
        if (IsObject(tag)) {
          // is stored tag
          formulaList.push(tag);
          word = '';
        }
        // not stored tag like (service, number)
        else if (tag) {
        }
      }
    }

    return formulaList;
  }
}
