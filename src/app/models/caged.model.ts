import { Shape } from "./shape.model";

export class CAGED {
    shapes: Shape[] = [];
    constructor(private scale: string) {
        switch (scale) {
            case 'major':
                this.shapes = [
                    new Shape('1º shape', ['8', '9', '10', '11', '12', '13'], [
                        { string: 'E', notes: ['', '', 'D', '', 'E', 'F'] },
                        { string: 'B', notes: ['', '', 'A', '', 'B', 'C'] },
                        { string: 'G', notes: ['', 'E', 'F', '', 'G', ''] },
                        { string: 'D', notes: ['', 'B', 'C', '', 'D', ''] },
                        { string: 'A', notes: ['F', '', 'G', '', 'A', ''] },
                        { string: 'E', notes: ['C', '', 'D', '', 'E', ''] }
                    ]),
                    new Shape('2º shape', ['10', '11', '12', '13', '14', '15'], [
                        { string: 'E', notes: ['', '', 'E', 'F', '', 'G'] },
                        { string: 'B', notes: ['', '', 'B', 'C', '', 'D'] },
                        { string: 'G', notes: ['F', '', 'G', '', 'A', ''] },
                        { string: 'D', notes: ['C', '', 'D', '', 'E', ''] },
                        { string: 'A', notes: ['G', '', 'A', '', 'B', ''] },
                        { string: 'E', notes: ['D', '', 'E', 'F', '', ''] }
                    ]),
                    new Shape('3º shape', ['12', '13', '14', '15', '16', '17'], [
                        { string: 'E', notes: ['', 'F', '', 'G', '', 'A'] },
                        { string: 'B', notes: ['', 'C', '', 'D', '', 'E'] },
                        { string: 'G', notes: ['G', '', 'A', '', 'B', ''] },
                        { string: 'D', notes: ['D', '', 'E', 'F', '', ''] },
                        { string: 'A', notes: ['A', '', 'B', 'C', '', ''] },
                        { string: 'E', notes: ['E', 'F', '', 'G', '', ''] }
                    ]),
                    new Shape('4º shape', ['1', '2', '3', '4', '5', '6', '7'], [
                        { string: 'E', notes: ['', '', 'G', '', 'A', '', 'B'] },
                        { string: 'B', notes: ['', '', 'D', '', 'E', 'F', ''] },
                        { string: 'G', notes: ['', 'A', '', 'B', 'C', '', ''] },
                        { string: 'D', notes: ['', 'E', 'F', '', 'G', '', ''] },
                        { string: 'A', notes: ['', 'B', 'C', '', 'D', '', ''] },
                        { string: 'E', notes: ['F', '', 'G', '', 'A', '', ''] }
                    ]),
                    new Shape('5º shape', ['3', '4', '5', '6', '7', '8'], [
                        { string: 'E', notes: ['', '', 'A', '', 'B', 'C'] },
                        { string: 'B', notes: ['', '', 'E', 'F', '', 'G'] },
                        { string: 'G', notes: ['', 'B', 'C', '', 'D', ''] },
                        { string: 'D', notes: ['F', '', 'G', '', 'A', ''] },
                        { string: 'A', notes: ['C', '', 'D', '', 'E', ''] },
                        { string: 'E', notes: ['G', '', 'A', '', 'B', ''] }
                    ]),
                    new Shape('6º shape', ['5', '6', '7', '8', '9', '10'], [
                        { string: 'E', notes: ['', '', 'B', 'C', '', 'D'] },
                        { string: 'B', notes: ['', 'F', '', 'G', '', 'A'] },
                        { string: 'G', notes: ['C', '', 'D', '', 'E', ''] },
                        { string: 'D', notes: ['G', '', 'A', '', 'B', ''] },
                        { string: 'A', notes: ['D', '', 'E', 'F', '', ''] },
                        { string: 'E', notes: ['A', '', 'B', 'C', '', ''] }
                    ]),
                    new Shape('7º shape', ['7', '8', '9', '10', '11', '12'], [
                        { string: 'E', notes: ['', 'C', '', 'D', '', 'E'] },
                        { string: 'B', notes: ['', 'G', '', 'A', '', 'B'] },
                        { string: 'G', notes: ['D', '', 'E', 'F', '', ''] },
                        { string: 'D', notes: ['A', '', 'B', 'C', '', ''] },
                        { string: 'A', notes: ['E', 'F', '', 'G', '', ''] },
                        { string: 'E', notes: ['B', 'C', '', 'D', '', ''] }
                    ])
                ];
                break;
            case 'penta':
                this.shapes = [
                    new Shape('1º shape', ['5', '6', '7', '8'], [
                        { string: 'E', notes: ['A', '', '', 'C'] },
                        { string: 'B', notes: ['E', '', '', 'G'] },
                        { string: 'G', notes: ['C', '', 'D', ''] },
                        { string: 'D', notes: ['G', '', 'A', ''] },
                        { string: 'A', notes: ['D', '', 'E', ''] },
                        { string: 'E', notes: ['A', '', '', 'C'] }
                    ]),
                    new Shape('2º shape', ['7', '8', '9', '10'], [
                        { string: 'E', notes: ['', 'C', '', 'D'] },
                        { string: 'B', notes: ['', 'G', '', 'A'] },
                        { string: 'G', notes: ['D', '', 'E', ''] },
                        { string: 'D', notes: ['A', '', '', 'C'] },
                        { string: 'A', notes: ['E', '', '', 'G'] },
                        { string: 'E', notes: ['', 'C', '', 'D'] }
                    ]),
                    new Shape('3º shape', ['9', '10', '11', '12', '13'], [
                        { string: 'E', notes: ['', 'D', '', 'E', ''] },
                        { string: 'B', notes: ['', 'A', '', '', 'C'] },
                        { string: 'G', notes: ['E', '', '', 'G', ''] },
                        { string: 'D', notes: ['', 'C', '', 'D', ''] },
                        { string: 'A', notes: ['', 'G', '', 'A', ''] },
                        { string: 'E', notes: ['', 'D', '', 'E', ''] }
                    ]),
                    new Shape('4º shape', ['12', '13', '14', '15'], [
                        { string: 'E', notes: ['E', '', '', 'G'] },
                        { string: 'B', notes: ['', 'C', '', 'D'] },
                        { string: 'G', notes: ['G', '', 'A', ''] },
                        { string: 'D', notes: ['D', '', 'E', ''] },
                        { string: 'A', notes: ['A', '', '', 'C'] },
                        { string: 'E', notes: ['E', '', '', 'G'] }
                    ]),
                    new Shape('5º shape', ['2', '3', '4', '5'], [
                        { string: 'E', notes: ['', 'G', '', 'A'] },
                        { string: 'B', notes: ['', 'D', '', 'E'] },
                        { string: 'G', notes: ['A', '', '', 'C'] },
                        { string: 'D', notes: ['E', '', '', 'G'] },
                        { string: 'A', notes: ['', 'C', '', 'D'] },
                        { string: 'E', notes: ['', 'G', '', 'A'] }
                    ]),
                ];
                break;
            case 'penta_blues':
                this.shapes = [
                    new Shape('1º shape', ['5', '6', '7', '8'], [
                        { string: 'E', notes: ['A', '', '', 'C'] },
                        { string: 'B', notes: ['E', '', '', 'G'] },
                        { string: 'G', notes: ['C', '', 'D', 'D#'] },
                        { string: 'D', notes: ['G', '', 'A', ''] },
                        { string: 'A', notes: ['D', 'D#', 'E', ''] },
                        { string: 'E', notes: ['A', '', '', 'C'] }
                    ]),
                    new Shape('2º shape', ['7', '8', '9', '10', '11'], [
                        { string: 'E', notes: ['', 'C', '', 'D', 'D#'] },
                        { string: 'B', notes: ['', 'G', '', 'A', ''] },
                        { string: 'G', notes: ['D', 'D#', 'E', '', ''] },
                        { string: 'D', notes: ['A', '', '', 'C', ''] },
                        { string: 'A', notes: ['E', '', '', 'G', ''] },
                        { string: 'E', notes: ['', 'C', '', 'D', 'D#'] }
                    ]),
                    new Shape('3º shape', ['9', '10', '11', '12', '13'], [
                        { string: 'E', notes: ['', 'D', 'D#', 'E', ''] },
                        { string: 'B', notes: ['', 'A', '', '', 'C'] },
                        { string: 'G', notes: ['E', '', '', 'G', ''] },
                        { string: 'D', notes: ['', 'C', '', 'D', 'D#'] },
                        { string: 'A', notes: ['', 'G', '', 'A', ''] },
                        { string: 'E', notes: ['', 'D', 'D#', 'E', ''] }
                    ]),
                    new Shape('4º shape', ['12', '13', '14', '15', '16'], [
                        { string: 'E', notes: ['E', '', '', 'G', ''] },
                        { string: 'B', notes: ['', 'C', '', 'D', 'D#'] },
                        { string: 'G', notes: ['G', '', 'A', '', ''] },
                        { string: 'D', notes: ['D', 'D#', 'E', '', ''] },
                        { string: 'A', notes: ['A', '', '', 'C', ''] },
                        { string: 'E', notes: ['E', '', '', 'G', ''] }
                    ]),
                    new Shape('5º shape', ['2', '3', '4', '5', '6'], [
                        { string: 'E', notes: ['', 'G', '', 'A', ''] },
                        { string: 'B', notes: ['', 'D', 'D#', 'E', ''] },
                        { string: 'G', notes: ['A', '', '', 'C', ''] },
                        { string: 'D', notes: ['E', '', '', 'G', ''] },
                        { string: 'A', notes: ['', 'C', '', 'D', 'D#'] },
                        { string: 'E', notes: ['', 'G', '', 'A', ''] }
                    ])
                ];
                break;
            default:
                break;
        }
    }
}