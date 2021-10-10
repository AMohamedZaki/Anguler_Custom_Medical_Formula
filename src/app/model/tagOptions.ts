
export class TagOptions {
    Name: string;
    Type: OptionTypeEnum;
}



export enum OptionTypeEnum {
    test,
    boolean,
    analyzer,
    doctor,
    payer
}

// and & or
export class Conditions {
    Name: string;
}
