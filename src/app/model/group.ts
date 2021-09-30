import { Tag } from "./tag";

export class Group {
    operator: LogicalOperators;
    id: number;
    rules: Rule[];
    constructor() {
        this.operator = LogicalOperators.AND;
        this.rules = [];
    }
    group: Group;
}



export enum LogicalOperators {
    AND = 1,
    OR = 2,
    NOT = 3
}


export class Rule {
    id: number;
    tag: Tag;
    operator: string;
    value: string;
}

export class Parameters {
    paramType: ParamType;
}


export class ParamType 
{
    required: boolean;

}
