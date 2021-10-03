import { RandomNumber } from "../helper/helper";
import { Tag } from "./tag";

export class Group {
    operator: LogicalOperators;
    id: number;
    rules: Rule[];
    groups: Group[];
    constructor() {
        this.operator = LogicalOperators.AND;
        this.rules = [];
        this.groups = [];
        this.id = RandomNumber();
    }
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
    constructor() {
        this.id = RandomNumber();
    }
}

export class Parameters {
    paramType: ParamType;
}


export class ParamType 
{
    required: boolean;

}
