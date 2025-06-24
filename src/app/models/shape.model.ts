export class Shape {
    constructor(
        public title: string,
        public frets: string[],
        public strings: {
            string: string,
            notes: string[]
        }[]
    ) { }
};