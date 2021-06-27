import { Injectable } from '@angular/core';
import { getTypes } from '../helper/helper';
import { TagType, TagTypeEnum } from '../model/tagType';

@Injectable({
  providedIn: 'root'
})
export class TagTypeService {
  tagTypeEnum = TagTypeEnum;

  constructor() { }


  getType(id: number): TagType {
    return getTypes().find((tag) => tag.id == id);
  }


  getTypeNameById(id: number): string {
    const type = this.getType(id)?.type;
    return this.tagTypeEnum[type];
  }
}
