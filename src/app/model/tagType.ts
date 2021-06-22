import { Colors } from './colors';

export class TagType {
  color: Colors;
  type: TagTypeEnum;
  id: number;

  constructor() {
    this.id = 0;
    this.color = Colors.red;
    this.type = TagTypeEnum.condition;
  }
}

export enum TagTypeEnum {
  numbers,
  mathMethods,
  signs,
  logicalOperators,
  customService,
  clinicalMethods,
  condition,
  loginType,
}
