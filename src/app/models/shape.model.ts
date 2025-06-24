export class Shape {
    constructor(
        public titulo: string,
        public casas: string[],
        public cordas: {
            corda: string,
            notas: string[]
        }[]
    ) { }
};