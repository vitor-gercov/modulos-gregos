import { GuitarString } from "@types";

export class Shape {
    constructor(
        public title: string,
        public frets: string[],
        public guitarStrings: GuitarString[]
    ) { }
};