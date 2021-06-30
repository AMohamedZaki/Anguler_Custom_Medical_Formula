import { Colors } from '../model/colors';
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
    { color: Colors.green, type: TagTypeEnum.clinicalMethods, id: 1 },
    { color: Colors.red, type: TagTypeEnum.condition, id: 2 },
    { color: Colors.black, type: TagTypeEnum.customService, id: 3 }, // for LDM Service
    { color: Colors.black, type: TagTypeEnum.logicalOperators, id: 4 },
    { color: Colors.black, type: TagTypeEnum.loginType, id: 5 },
    { color: Colors.blue, type: TagTypeEnum.mathMethods, id: 6 },
    { color: Colors.black, type: TagTypeEnum.numbers, id: 7 },
    { color: Colors.green, type: TagTypeEnum.signs, id: 8 },
  ];
  return data;
}

export function getTags(): Tag[] {
  const types: Tag[] = [
    // clinicalMethods
    { FieldName: 'LowDiff(', Name: 'LowDiff', id: 1, TypeId: 1 },
    { FieldName: 'PrepA(', Name: 'PrepA', id: 2, TypeId: 1 },
    { FieldName: 'PrepQ(', Name: 'PrepQ', id: 3, TypeId: 1 },
    { FieldName: 'LR(', Name: 'LR', id: 4, TypeId: 1 },
    { FieldName: 'LRPeriod(', Name: 'LRPeriod', id: 5, TypeId: 1 },
    { FieldName: 'LRText(', Name: 'LRText', id: 6, TypeId: 1 },
    { FieldName: 'LRPeriod(', Name: 'LRPeriod', id: 7, TypeId: 1 },
    { FieldName: 'Analyzer(', Name: 'Analyzer', id: 8, TypeId: 1 },
    { FieldName: 'LRPeriod(', Name: 'LRPeriod', id: 9, TypeId: 1 },

    // condition
    { FieldName: 'IsFemale', Name: 'Is Female', id: 10, TypeId: 2 },
    { FieldName: 'IsMale', Name: 'Is Male', id: 11, TypeId: 2 },
    { FieldName: 'Age', Name: 'Age', id: 12, TypeId: 2 },
    { FieldName: 'like', Name: 'like', id: 13, TypeId: 2 },
    { FieldName: 'IsRequired(', Name: 'Is Required', id: 14, TypeId: 2 },
    { FieldName: 'IsNotRequired(', Name: 'Is Not Required', id: 15, TypeId: 2 },
    { FieldName: 'IsHigh(', Name: 'Is High', id: 16, TypeId: 2 },
    { FieldName: 'IsNormal(', Name: 'Is Normal', id: 17, TypeId: 2 },
    { FieldName: 'IsLow(', Name: 'Is Low', id: 18, TypeId: 2 },

    // logicalOperators
    { FieldName: 'NOT', Name: 'NOT', id: 19, TypeId: 4 },
    { FieldName: 'AND', Name: 'AND', id: 20, TypeId: 4 },
    { FieldName: 'OR', Name: 'OR', id: 21, TypeId: 4 },

    // loginType
    { FieldName: '(Doctor', Name: 'Doctor', id: 22, TypeId: 5 },
    { FieldName: 'Payer', Name: 'Payer', id: 23, TypeId: 5 },

    // mathMethods
    { FieldName: 'Sin(', Name: 'Sin', id: 24, TypeId: 6 },
    { FieldName: 'Cos(', Name: 'Cos', id: 25, TypeId: 6 },
    { FieldName: 'Tan(', Name: 'Tan', id: 26, TypeId: 6 },
    { FieldName: '√(,', Name: '√', id: 27, TypeId: 6 },
    { FieldName: 'Log(10,', Name: 'Log', id: 28, TypeId: 6 },
    { FieldName: 'Abs(', Name: 'Abs', id: 29, TypeId: 6 },

    // numbers
    { FieldName: '0', Name: '0', id: 30, TypeId: 7 },
    { FieldName: '1', Name: '1', id: 31, TypeId: 7 },
    { FieldName: '2', Name: '2', id: 32, TypeId: 7 },
    { FieldName: '3', Name: '3', id: 33, TypeId: 7 },
    { FieldName: '4', Name: '4', id: 34, TypeId: 7 },
    { FieldName: '5', Name: '5', id: 35, TypeId: 7 },
    { FieldName: '6', Name: '6', id: 36, TypeId: 7 },
    { FieldName: '7', Name: '7', id: 37, TypeId: 7 },
    { FieldName: '8', Name: '8', id: 38, TypeId: 7 },
    { FieldName: '9', Name: '9', id: 39, TypeId: 7 },

    // signs
    { FieldName: '<=', Name: '<=', id: 40, TypeId: 8 },
    { FieldName: '<', Name: '<', id: 41, TypeId: 8 },
    { FieldName: '>=', Name: '>=', id: 42, TypeId: 8 },
    { FieldName: '>', Name: '>', id: 43, TypeId: 8 },
    { FieldName: '<>', Name: '<>', id: 44, TypeId: 8 },
    { FieldName: '=', Name: '=', id: 45, TypeId: 8 },
    { FieldName: '*', Name: '*', id: 46, TypeId: 8 },
    { FieldName: '+', Name: '+', id: 47, TypeId: 8 },
    { FieldName: '-', Name: '-', id: 48, TypeId: 8 },
    { FieldName: '/', Name: '/', id: 49, TypeId: 8 },
    { FieldName: '^', Name: '^', id: 50, TypeId: 8 },
    { FieldName: ';', Name: ';', id: 51, TypeId: 8 },
    { FieldName: '(', Name: '(', id: 52, TypeId: 8 },
    { FieldName: ')', Name: ')', id: 53, TypeId: 8 },
    { FieldName: `'`, Name: `'`, id: 54, TypeId: 8 },
  ];
  return types;
}



export function LoadFormula(): string {
  return `Analyzer( LRPeriod( LRPeriod( PrepQ( IsRequired( IsLow( IsFemale IsNormal( PrepQ( LRPeriod( Analyzer( LowDiff( LRPeriod( 789932 ' 8459 ' IsLow( IsMale IsRequired( ) ) LRPeriod( LowDiff( LRPeriod(`;
}





