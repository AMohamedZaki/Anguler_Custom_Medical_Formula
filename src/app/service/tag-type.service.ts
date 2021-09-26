import { Injectable } from '@angular/core';
import { getNames, getTypes } from '../helper/helper';
import { TagType, TagTypeEnum } from '../model/tagType';

@Injectable({
  providedIn: 'root'
})
export class TagTypeService {
  tagTypeEnum = TagTypeEnum;
  categoryNames = getNames();
  constructor() { }


  getType(id: number): TagType {
    return getTypes().find((tag) => tag.id == id);
  }


  getTypeNameById(id: number): string {
    const type = this.getType(id)?.type;
    return getNames()[type];
  }
}
