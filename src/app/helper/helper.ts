import { Colors } from '../model/colors';
import { Group, LogicalOperators } from '../model/group';
import { Tag } from '../model/tag';
import { TagType, TagTypeEnum } from '../model/tagType';

export function CloneObject<T>(object: T): T {
  return JSON.parse(JSON.stringify(object));
}

export function IsObject(object: any): boolean {
  return object && Object.keys(object).length > 0;
}

export function IsNumber(input: any): boolean {
  const regex = /^[0-9]+$/;
  return regex.test(input);
}

export function RandomNumber(): number {
  return Math.random() * 100;
}

export function getTypes(): TagType[] {
  const data = [
    { color: Colors.black, type: TagTypeEnum.numbers, id: 1 },
    { color: Colors.black, type: TagTypeEnum.mathMethods, id: 2 },
    { color: Colors.black, type: TagTypeEnum.logicalOperators, id: 3 },
    { color: Colors.black, type: TagTypeEnum.clinicalMethods, id: 4 },
  ];
  return data;
}

export function getTags(): Tag[] {
  const types: Tag[] = [
    // clinicalMethods
    { FieldName: 'IsRequired(', Name: 'Is Required', id: 14, TypeId: 4 },
    { FieldName: 'IsNotRequired(', Name: 'Is Not Required', id: 15, TypeId: 4 },
    { FieldName: 'LR(', Name: 'LR', id: 4, TypeId: 4 },
    { FieldName: 'LRPeriod(', Name: 'LRPeriod', id: 5, TypeId: 4 },
    { FieldName: 'LRText(', Name: 'LRText', id: 6, TypeId: 4 },
    { FieldName: 'IsFemale', Name: 'Is Female', id: 10, TypeId: 4 },
    { FieldName: 'IsMale', Name: 'Is Male', id: 11, TypeId: 4 },
    { FieldName: 'Age', Name: 'Age', id: 12, TypeId: 4 },
    { FieldName: 'Comment', Name: 'Comment', id: 60, TypeId: 4 },

    // mathMethods
    { FieldName: 'Sin', Name: 'Sin', id: 24, TypeId: 2 },
    { FieldName: 'Cos', Name: 'Cos', id: 25, TypeId: 2 },
    { FieldName: 'Tan', Name: 'Tan', id: 26, TypeId: 2 },
    { FieldName: '√', Name: '√', id: 27, TypeId: 2 },
    { FieldName: 'Abs', Name: 'Abs', id: 29, TypeId: 2 },
    { FieldName: '*', Name: '*', id: 46, TypeId: 2 },
    { FieldName: '+', Name: '+', id: 47, TypeId: 2 },
    { FieldName: '-', Name: '-', id: 48, TypeId: 2 },
    { FieldName: '/', Name: '/', id: 49, TypeId: 2 },
    { FieldName: '^', Name: '^', id: 50, TypeId: 2 },

    // numbers
    { FieldName: '0', Name: '0', id: 30, TypeId: 1 },
    { FieldName: '1', Name: '1', id: 31, TypeId: 1 },
    { FieldName: '2', Name: '2', id: 32, TypeId: 1 },
    { FieldName: '3', Name: '3', id: 33, TypeId: 1 },
    { FieldName: '4', Name: '4', id: 34, TypeId: 1 },
    { FieldName: '5', Name: '5', id: 35, TypeId: 1 },
    { FieldName: '6', Name: '6', id: 36, TypeId: 1 },
    { FieldName: '7', Name: '7', id: 37, TypeId: 1 },
    { FieldName: '8', Name: '8', id: 38, TypeId: 1 },
    { FieldName: '9', Name: '9', id: 39, TypeId: 1 },

    // logicalOperators
    { FieldName: '=', Name: '=', id: 45, TypeId: 3 },
    { FieldName: '<=', Name: '<=', id: 40, TypeId: 3 },
    { FieldName: '<', Name: '<', id: 41, TypeId: 3 },
    { FieldName: '>=', Name: '>=', id: 42, TypeId: 3 },
    { FieldName: '>', Name: '>', id: 43, TypeId: 3 },
    { FieldName: '<>', Name: '<>', id: 44, TypeId: 3 },
    { FieldName: '(', Name: '(', id: 52, TypeId: 3 },
    { FieldName: ')', Name: ')', id: 53, TypeId: 3 },
    { FieldName: `'`, Name: `'`, id: 54, TypeId: 3 },
    { FieldName: 'NOT', Name: 'NOT', id: 19, TypeId: 3 },
    { FieldName: 'AND', Name: 'AND', id: 20, TypeId: 3 },
    { FieldName: 'OR', Name: 'OR', id: 21, TypeId: 3 },
    { FieldName: 'LowDiff(', Name: 'LowDiff', id: 1, TypeId: 3 },
    { FieldName: 'IsHigh(', Name: 'Is High', id: 16, TypeId: 3 },
    { FieldName: 'IsNormal(', Name: 'Is Normal', id: 17, TypeId: 3 },
    { FieldName: 'IsLow(', Name: 'Is Low', id: 18, TypeId: 3 },
    { FieldName: 'like', Name: 'like', id: 13, TypeId: 3 },

  ];
  return types;
}
export function getNames(): { [key: string]: string } {
  const names = {
    [TagTypeEnum.mathMethods]: 'Mathmatical Operations',
    [TagTypeEnum.numbers]: 'Numbers',
    [TagTypeEnum.logicalOperators]: 'Logical Operations',
    [TagTypeEnum.clinicalMethods]: 'Clinical Symbols'
  };
  return names;
}

export function LoadFormula(): string {
  return `Analyzer( LRPeriod( LRPeriod( PrepQ( IsRequired( IsLow( IsFemale IsNormal( PrepQ( LRPeriod( Analyzer( LowDiff( LRPeriod( 789932 ' 8459 ' IsLow( IsMale IsRequired( ) ) LRPeriod( LowDiff( LRPeriod(`;
}


export function getGroupes(): Group {
  const group: Group =
  {
    id: 1,
    operator: LogicalOperators.AND,
    rules: [
      {
        id: 1,
        operator: null,
        tag: null,
        value: null
      }
    ],
    group: null
  }



  return group;
}


