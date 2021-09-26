import { Colors } from './colors';

export class TagType {
  color: Colors;
  type?: TagTypeEnum;
  id: number;

  constructor() {
    this.id = 0;
    this.color = Colors.red;
    this.type = null;
  }
}

export enum TagTypeEnum {
  numbers = 1,
  mathMethods = 2,
  logicalOperators = 3,
  clinicalMethods = 4
}
