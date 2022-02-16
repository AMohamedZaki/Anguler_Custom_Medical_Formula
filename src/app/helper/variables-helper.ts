
export class Operators {
    Name: string;
    Type: number;
}


export enum LogicalOperatorsTyps {
    equal,
    NotEqual,
    biggerAndLower,
    Like,
    NotLike
}


export const operators: Operators[] = [
    { Name: '=', Type: LogicalOperatorsTyps.equal },
    { Name: '<=', Type: LogicalOperatorsTyps.biggerAndLower },
    { Name: '<', Type: LogicalOperatorsTyps.biggerAndLower },
    { Name: '>=', Type: LogicalOperatorsTyps.biggerAndLower },
    { Name: '>', Type: LogicalOperatorsTyps.biggerAndLower },
    { Name: '<>', Type: LogicalOperatorsTyps.NotEqual },
    { Name: 'Like', Type: LogicalOperatorsTyps.Like },
    { Name: 'Not Like', Type: LogicalOperatorsTyps.NotLike },
];
