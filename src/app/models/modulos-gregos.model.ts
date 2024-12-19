import { Modulo } from "./modulo.model";

export class ModulosGregos {
    modulos: Modulo[] = [];
    constructor(private escala: string) {
        switch (escala) {
            case 'maior':
                this.modulos = [
                    new Modulo('1º módulo', ['8', '9', '10', '11', '12', '13'], [
                        { corda: 'E', notas: ['', '', 'D', '', 'E', 'F'] },
                        { corda: 'B', notas: ['', '', 'A', '', 'B', 'C'] },
                        { corda: 'G', notas: ['', 'E', 'F', '', 'G', ''] },
                        { corda: 'D', notas: ['', 'B', 'C', '', 'D', ''] },
                        { corda: 'A', notas: ['F', '', 'G', '', 'A', ''] },
                        { corda: 'E', notas: ['C', '', 'D', '', 'E', ''] }
                    ]),
                    new Modulo('2º módulo', ['10', '11', '12', '13', '14', '15'], [
                        { corda: 'E', notas: ['', '', 'E', 'F', '', 'G'] },
                        { corda: 'B', notas: ['', '', 'B', 'C', '', 'D'] },
                        { corda: 'G', notas: ['F', '', 'G', '', 'A', ''] },
                        { corda: 'D', notas: ['C', '', 'D', '', 'E', ''] },
                        { corda: 'A', notas: ['G', '', 'A', '', 'B', ''] },
                        { corda: 'E', notas: ['D', '', 'E', 'F', '', ''] }
                    ]),
                    new Modulo('3º módulo', ['12', '13', '14', '15', '16', '17'], [
                        { corda: 'E', notas: ['', 'F', '', 'G', '', 'A'] },
                        { corda: 'B', notas: ['', 'C', '', 'D', '', 'E'] },
                        { corda: 'G', notas: ['G', '', 'A', '', 'B', ''] },
                        { corda: 'D', notas: ['D', '', 'E', 'F', '', ''] },
                        { corda: 'A', notas: ['A', '', 'B', 'C', '', ''] },
                        { corda: 'E', notas: ['E', 'F', '', 'G', '', ''] }
                    ]),
                    new Modulo('4º módulo', ['1', '2', '3', '4', '5', '6', '7'], [
                        { corda: 'E', notas: ['', '', 'G', '', 'A', '', 'B'] },
                        { corda: 'B', notas: ['', '', 'D', '', 'E', 'F', ''] },
                        { corda: 'G', notas: ['', 'A', '', 'B', 'C', '', ''] },
                        { corda: 'D', notas: ['', 'E', 'F', '', 'G', '', ''] },
                        { corda: 'A', notas: ['', 'B', 'C', '', 'D', '', ''] },
                        { corda: 'E', notas: ['F', '', 'G', '', 'A', '', ''] }
                    ]),
                    new Modulo('5º módulo', ['3', '4', '5', '6', '7', '8'], [
                        { corda: 'E', notas: ['', '', 'A', '', 'B', 'C'] },
                        { corda: 'B', notas: ['', '', 'E', 'F', '', 'G'] },
                        { corda: 'G', notas: ['', 'B', 'C', '', 'D', ''] },
                        { corda: 'D', notas: ['F', '', 'G', '', 'A', ''] },
                        { corda: 'A', notas: ['C', '', 'D', '', 'E', ''] },
                        { corda: 'E', notas: ['G', '', 'A', '', 'B', ''] }
                    ]),
                    new Modulo('6º módulo', ['5', '6', '7', '8', '9', '10'], [
                        { corda: 'E', notas: ['', '', 'B', 'C', '', 'D'] },
                        { corda: 'B', notas: ['', 'F', '', 'G', '', 'A'] },
                        { corda: 'G', notas: ['C', '', 'D', '', 'E', ''] },
                        { corda: 'D', notas: ['G', '', 'A', '', 'B', ''] },
                        { corda: 'A', notas: ['D', '', 'E', 'F', '', ''] },
                        { corda: 'E', notas: ['A', '', 'B', 'C', '', ''] }
                    ]),
                    new Modulo('7º módulo', ['7', '8', '9', '10', '11', '12'], [
                        { corda: 'E', notas: ['', 'C', '', 'D', '', 'E'] },
                        { corda: 'B', notas: ['', 'G', '', 'A', '', 'B'] },
                        { corda: 'G', notas: ['D', '', 'E', 'F', '', ''] },
                        { corda: 'D', notas: ['A', '', 'B', 'C', '', ''] },
                        { corda: 'A', notas: ['E', 'F', '', 'G', '', ''] },
                        { corda: 'E', notas: ['B', 'C', '', 'D', '', ''] }
                    ])
                ];
                break;
            case 'pentatonica':
                this.modulos = [
                    new Modulo('1º módulo', ['5', '6', '7', '8'], [
                        { corda: 'E', notas: ['A', '', '', 'C'] },
                        { corda: 'B', notas: ['E', '', '', 'G'] },
                        { corda: 'G', notas: ['C', '', 'D', ''] },
                        { corda: 'D', notas: ['G', '', 'A', ''] },
                        { corda: 'A', notas: ['D', '', 'E', ''] },
                        { corda: 'E', notas: ['A', '', '', 'C'] }
                    ]),
                    new Modulo('2º módulo', ['7', '8', '9', '10'], [
                        { corda: 'E', notas: ['', 'C', '', 'D'] },
                        { corda: 'B', notas: ['', 'G', '', 'A'] },
                        { corda: 'G', notas: ['D', '', 'E', ''] },
                        { corda: 'D', notas: ['A', '', '', 'C'] },
                        { corda: 'A', notas: ['E', '', '', 'G'] },
                        { corda: 'E', notas: ['', 'C', '', 'D'] }
                    ]),
                    new Modulo('3º módulo', ['9', '10', '11', '12', '13'], [
                        { corda: 'E', notas: ['', 'D', '', 'E', ''] },
                        { corda: 'B', notas: ['', 'A', '', '', 'C'] },
                        { corda: 'G', notas: ['E', '', '', 'G', ''] },
                        { corda: 'D', notas: ['', 'C', '', 'D', ''] },
                        { corda: 'A', notas: ['', 'G', '', 'A', ''] },
                        { corda: 'E', notas: ['', 'D', '', 'E', ''] }
                    ]),
                    new Modulo('4º módulo', ['12', '13', '14', '15'], [
                        { corda: 'E', notas: ['E', '', '', 'G'] },
                        { corda: 'B', notas: ['', 'C', '', 'D'] },
                        { corda: 'G', notas: ['G', '', 'A', ''] },
                        { corda: 'D', notas: ['D', '', 'E', ''] },
                        { corda: 'A', notas: ['A', '', '', 'C'] },
                        { corda: 'E', notas: ['E', '', '', 'G'] }
                    ]),
                    new Modulo('5º módulo', ['2', '3', '4', '5'], [
                        { corda: 'E', notas: ['', 'G', '', 'A'] },
                        { corda: 'B', notas: ['', 'D', '', 'E'] },
                        { corda: 'G', notas: ['A', '', '', 'C'] },
                        { corda: 'D', notas: ['E', '', '', 'G'] },
                        { corda: 'A', notas: ['', 'C', '', 'D'] },
                        { corda: 'E', notas: ['', 'G', '', 'A'] }
                    ]),
                ];
                break;
            case 'pentatonica de blues':
                this.modulos = [
                    new Modulo('1º módulo', ['5', '6', '7', '8'], [
                        { corda: 'E', notas: ['A', '', '', 'C'] },
                        { corda: 'B', notas: ['E', '', '', 'G'] },
                        { corda: 'G', notas: ['C', '', 'D', 'D#'] },
                        { corda: 'D', notas: ['G', '', 'A', ''] },
                        { corda: 'A', notas: ['D', 'D#', 'E', ''] },
                        { corda: 'E', notas: ['A', '', '', 'C'] }
                    ]),
                    new Modulo('2º módulo', ['7', '8', '9', '10', '11'], [
                        { corda: 'E', notas: ['', 'C', '', 'D', 'D#'] },
                        { corda: 'B', notas: ['', 'G', '', 'A', ''] },
                        { corda: 'G', notas: ['D', 'D#', 'E', '', ''] },
                        { corda: 'D', notas: ['A', '', '', 'C', ''] },
                        { corda: 'A', notas: ['E', '', '', 'G', ''] },
                        { corda: 'E', notas: ['', 'C', '', 'D', 'D#'] }
                    ]),
                    new Modulo('3º módulo', ['9', '10', '11', '12', '13'], [
                        { corda: 'E', notas: ['', 'D', 'D#', 'E', ''] },
                        { corda: 'B', notas: ['', 'A', '', '', 'C'] },
                        { corda: 'G', notas: ['E', '', '', 'G', ''] },
                        { corda: 'D', notas: ['', 'C', '', 'D', 'D#'] },
                        { corda: 'A', notas: ['', 'G', '', 'A', ''] },
                        { corda: 'E', notas: ['', 'D', 'D#', 'E', ''] }
                    ]),
                    new Modulo('4º módulo', ['12', '13', '14', '15', '16'], [
                        { corda: 'E', notas: ['E', '', '', 'G', ''] },
                        { corda: 'B', notas: ['', 'C', '', 'D', 'D#'] },
                        { corda: 'G', notas: ['G', '', 'A', '', ''] },
                        { corda: 'D', notas: ['D', 'D#', 'E', '', ''] },
                        { corda: 'A', notas: ['A', '', '', 'C', ''] },
                        { corda: 'E', notas: ['E', '', '', 'G', ''] }
                    ]),
                    new Modulo('5º módulo', ['2', '3', '4', '5', '6'], [
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