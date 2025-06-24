import { Shape } from "./shape.model";

export class CAGED {
    shapes: Shape[] = [];
    constructor(private scale: string) {
        switch (scale) {
            case 'major':
                this.shapes = [
                    new Shape('1º shape', ['8', '9', '10', '11', '12', '13'], [
                        { corda: 'E', notas: ['', '', 'D', '', 'E', 'F'] },
                        { corda: 'B', notas: ['', '', 'A', '', 'B', 'C'] },
                        { corda: 'G', notas: ['', 'E', 'F', '', 'G', ''] },
                        { corda: 'D', notas: ['', 'B', 'C', '', 'D', ''] },
                        { corda: 'A', notas: ['F', '', 'G', '', 'A', ''] },
                        { corda: 'E', notas: ['C', '', 'D', '', 'E', ''] }
                    ]),
                    new Shape('2º shape', ['10', '11', '12', '13', '14', '15'], [
                        { corda: 'E', notas: ['', '', 'E', 'F', '', 'G'] },
                        { corda: 'B', notas: ['', '', 'B', 'C', '', 'D'] },
                        { corda: 'G', notas: ['F', '', 'G', '', 'A', ''] },
                        { corda: 'D', notas: ['C', '', 'D', '', 'E', ''] },
                        { corda: 'A', notas: ['G', '', 'A', '', 'B', ''] },
                        { corda: 'E', notas: ['D', '', 'E', 'F', '', ''] }
                    ]),
                    new Shape('3º shape', ['12', '13', '14', '15', '16', '17'], [
                        { corda: 'E', notas: ['', 'F', '', 'G', '', 'A'] },
                        { corda: 'B', notas: ['', 'C', '', 'D', '', 'E'] },
                        { corda: 'G', notas: ['G', '', 'A', '', 'B', ''] },
                        { corda: 'D', notas: ['D', '', 'E', 'F', '', ''] },
                        { corda: 'A', notas: ['A', '', 'B', 'C', '', ''] },
                        { corda: 'E', notas: ['E', 'F', '', 'G', '', ''] }
                    ]),
                    new Shape('4º shape', ['1', '2', '3', '4', '5', '6', '7'], [
                        { corda: 'E', notas: ['', '', 'G', '', 'A', '', 'B'] },
                        { corda: 'B', notas: ['', '', 'D', '', 'E', 'F', ''] },
                        { corda: 'G', notas: ['', 'A', '', 'B', 'C', '', ''] },
                        { corda: 'D', notas: ['', 'E', 'F', '', 'G', '', ''] },
                        { corda: 'A', notas: ['', 'B', 'C', '', 'D', '', ''] },
                        { corda: 'E', notas: ['F', '', 'G', '', 'A', '', ''] }
                    ]),
                    new Shape('5º shape', ['3', '4', '5', '6', '7', '8'], [
                        { corda: 'E', notas: ['', '', 'A', '', 'B', 'C'] },
                        { corda: 'B', notas: ['', '', 'E', 'F', '', 'G'] },
                        { corda: 'G', notas: ['', 'B', 'C', '', 'D', ''] },
                        { corda: 'D', notas: ['F', '', 'G', '', 'A', ''] },
                        { corda: 'A', notas: ['C', '', 'D', '', 'E', ''] },
                        { corda: 'E', notas: ['G', '', 'A', '', 'B', ''] }
                    ]),
                    new Shape('6º shape', ['5', '6', '7', '8', '9', '10'], [
                        { corda: 'E', notas: ['', '', 'B', 'C', '', 'D'] },
                        { corda: 'B', notas: ['', 'F', '', 'G', '', 'A'] },
                        { corda: 'G', notas: ['C', '', 'D', '', 'E', ''] },
                        { corda: 'D', notas: ['G', '', 'A', '', 'B', ''] },
                        { corda: 'A', notas: ['D', '', 'E', 'F', '', ''] },
                        { corda: 'E', notas: ['A', '', 'B', 'C', '', ''] }
                    ]),
                    new Shape('7º shape', ['7', '8', '9', '10', '11', '12'], [
                        { corda: 'E', notas: ['', 'C', '', 'D', '', 'E'] },
                        { corda: 'B', notas: ['', 'G', '', 'A', '', 'B'] },
                        { corda: 'G', notas: ['D', '', 'E', 'F', '', ''] },
                        { corda: 'D', notas: ['A', '', 'B', 'C', '', ''] },
                        { corda: 'A', notas: ['E', 'F', '', 'G', '', ''] },
                        { corda: 'E', notas: ['B', 'C', '', 'D', '', ''] }
                    ])
                ];
                break;
            case 'penta':
                this.shapes = [
                    new Shape('1º shape', ['5', '6', '7', '8'], [
                        { corda: 'E', notas: ['A', '', '', 'C'] },
                        { corda: 'B', notas: ['E', '', '', 'G'] },
                        { corda: 'G', notas: ['C', '', 'D', ''] },
                        { corda: 'D', notas: ['G', '', 'A', ''] },
                        { corda: 'A', notas: ['D', '', 'E', ''] },
                        { corda: 'E', notas: ['A', '', '', 'C'] }
                    ]),
                    new Shape('2º shape', ['7', '8', '9', '10'], [
                        { corda: 'E', notas: ['', 'C', '', 'D'] },
                        { corda: 'B', notas: ['', 'G', '', 'A'] },
                        { corda: 'G', notas: ['D', '', 'E', ''] },
                        { corda: 'D', notas: ['A', '', '', 'C'] },
                        { corda: 'A', notas: ['E', '', '', 'G'] },
                        { corda: 'E', notas: ['', 'C', '', 'D'] }
                    ]),
                    new Shape('3º shape', ['9', '10', '11', '12', '13'], [
                        { corda: 'E', notas: ['', 'D', '', 'E', ''] },
                        { corda: 'B', notas: ['', 'A', '', '', 'C'] },
                        { corda: 'G', notas: ['E', '', '', 'G', ''] },
                        { corda: 'D', notas: ['', 'C', '', 'D', ''] },
                        { corda: 'A', notas: ['', 'G', '', 'A', ''] },
                        { corda: 'E', notas: ['', 'D', '', 'E', ''] }
                    ]),
                    new Shape('4º shape', ['12', '13', '14', '15'], [
                        { corda: 'E', notas: ['E', '', '', 'G'] },
                        { corda: 'B', notas: ['', 'C', '', 'D'] },
                        { corda: 'G', notas: ['G', '', 'A', ''] },
                        { corda: 'D', notas: ['D', '', 'E', ''] },
                        { corda: 'A', notas: ['A', '', '', 'C'] },
                        { corda: 'E', notas: ['E', '', '', 'G'] }
                    ]),
                    new Shape('5º shape', ['2', '3', '4', '5'], [
                        { corda: 'E', notas: ['', 'G', '', 'A'] },
                        { corda: 'B', notas: ['', 'D', '', 'E'] },
                        { corda: 'G', notas: ['A', '', '', 'C'] },
                        { corda: 'D', notas: ['E', '', '', 'G'] },
                        { corda: 'A', notas: ['', 'C', '', 'D'] },
                        { corda: 'E', notas: ['', 'G', '', 'A'] }
                    ]),
                ];
                break;
            case 'penta_blues':
                this.shapes = [
                    new Shape('1º shape', ['5', '6', '7', '8'], [
                        { corda: 'E', notas: ['A', '', '', 'C'] },
                        { corda: 'B', notas: ['E', '', '', 'G'] },
                        { corda: 'G', notas: ['C', '', 'D', 'D#'] },
                        { corda: 'D', notas: ['G', '', 'A', ''] },
                        { corda: 'A', notas: ['D', 'D#', 'E', ''] },
                        { corda: 'E', notas: ['A', '', '', 'C'] }
                    ]),
                    new Shape('2º shape', ['7', '8', '9', '10', '11'], [
                        { corda: 'E', notas: ['', 'C', '', 'D', 'D#'] },
                        { corda: 'B', notas: ['', 'G', '', 'A', ''] },
                        { corda: 'G', notas: ['D', 'D#', 'E', '', ''] },
                        { corda: 'D', notas: ['A', '', '', 'C', ''] },
                        { corda: 'A', notas: ['E', '', '', 'G', ''] },
                        { corda: 'E', notas: ['', 'C', '', 'D', 'D#'] }
                    ]),
                    new Shape('3º shape', ['9', '10', '11', '12', '13'], [
                        { corda: 'E', notas: ['', 'D', 'D#', 'E', ''] },
                        { corda: 'B', notas: ['', 'A', '', '', 'C'] },
                        { corda: 'G', notas: ['E', '', '', 'G', ''] },
                        { corda: 'D', notas: ['', 'C', '', 'D', 'D#'] },
                        { corda: 'A', notas: ['', 'G', '', 'A', ''] },
                        { corda: 'E', notas: ['', 'D', 'D#', 'E', ''] }
                    ]),
                    new Shape('4º shape', ['12', '13', '14', '15', '16'], [
                        { corda: 'E', notas: ['E', '', '', 'G', ''] },
                        { corda: 'B', notas: ['', 'C', '', 'D', 'D#'] },
                        { corda: 'G', notas: ['G', '', 'A', '', ''] },
                        { corda: 'D', notas: ['D', 'D#', 'E', '', ''] },
                        { corda: 'A', notas: ['A', '', '', 'C', ''] },
                        { corda: 'E', notas: ['E', '', '', 'G', ''] }
                    ]),
                    new Shape('5º shape', ['2', '3', '4', '5', '6'], [
                        { corda: 'E', notas: ['', 'G', '', 'A', ''] },
                        { corda: 'B', notas: ['', 'D', 'D#', 'E', ''] },
                        { corda: 'G', notas: ['A', '', '', 'C', ''] },
                        { corda: 'D', notas: ['E', '', '', 'G', ''] },
                        { corda: 'A', notas: ['', 'C', '', 'D', 'D#'] },
                        { corda: 'E', notas: ['', 'G', '', 'A', ''] }
                    ])
                ];
                break;
            default:
                break;
        }
    }
}