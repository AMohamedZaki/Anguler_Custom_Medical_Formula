export class Tag {
  Name: string;
  FieldName: string;
  TypeId?: number;
  id: number;

  constructor() {
    this.Name = '';
    this.FieldName = '';
    this.TypeId = null;
    this.id = 0;
  }
}
