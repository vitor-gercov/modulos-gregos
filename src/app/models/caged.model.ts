import { GuitarString } from "@types";
import { Shape } from "./shape.model";

export class CAGED {
    shapes: Shape[] = [];
    private noteTypeRelations = [
        {
            abc: 'A',
            lasido: 'Lá',
            abclasido: 'A / Lá',
            lasidoabc: 'Lá / A'
        },
        {
            abc: 'B',
            lasido: 'Sí',
            abclasido: 'B / Sí',
            lasidoabc: 'Sí / B'
        },
        {
            abc: 'C',
            lasido: 'Dó',
            abclasido: 'C / Dó',
            lasidoabc: 'Dó / C'
        },
        {
            abc: 'D',
            lasido: 'Ré',
            abclasido: 'D / Ré',
            lasidoabc: 'Ré / D'
        },
        {
            abc: 'E',
            lasido: 'Mi',
            abclasido: 'E / Mi',
            lasidoabc: 'Mi / E'
        },
        {
            abc: 'F',
            lasido: 'Fá',
            abclasido: 'F / Fá',
            lasidoabc: 'Fá / F'
        },
        {
            abc: 'G',
            lasido: 'Sol',
            abclasido: 'G / Sol',
            lasidoabc: 'Sol / G'
        }
    ];

    constructor(
        private scale: string = 'major',
        private dominantHand: string = 'right_handed',
        private noteType: string = 'abc'
    ) {
        this.setShapes();
    }

    private setShapes(): void {
        switch (this.scale) {
            case 'major':
                this.shapes = [
                    new Shape('1º shape', ['8', '9', '10', '11', '12', '13'], [
                        { guitarString: 'E', notes: ['', '', 'D', '', 'E', 'F'] },
                        { guitarString: 'B', notes: ['', '', 'A', '', 'B', 'C'] },
                        { guitarString: 'G', notes: ['', 'E', 'F', '', 'G', ''] },
                        { guitarString: 'D', notes: ['', 'B', 'C', '', 'D', ''] },
                        { guitarString: 'A', notes: ['F', '', 'G', '', 'A', ''] },
                        { guitarString: 'E', notes: ['C', '', 'D', '', 'E', ''] }
                    ]),
                    new Shape('2º shape', ['10', '11', '12', '13', '14', '15'], [
                        { guitarString: 'E', notes: ['', '', 'E', 'F', '', 'G'] },
                        { guitarString: 'B', notes: ['', '', 'B', 'C', '', 'D'] },
                        { guitarString: 'G', notes: ['F', '', 'G', '', 'A', ''] },
                        { guitarString: 'D', notes: ['C', '', 'D', '', 'E', ''] },
                        { guitarString: 'A', notes: ['G', '', 'A', '', 'B', ''] },
                        { guitarString: 'E', notes: ['D', '', 'E', 'F', '', ''] }
                    ]),
                    new Shape('3º shape', ['12', '13', '14', '15', '16', '17'], [
                        { guitarString: 'E', notes: ['', 'F', '', 'G', '', 'A'] },
                        { guitarString: 'B', notes: ['', 'C', '', 'D', '', 'E'] },
                        { guitarString: 'G', notes: ['G', '', 'A', '', 'B', ''] },
                        { guitarString: 'D', notes: ['D', '', 'E', 'F', '', ''] },
                        { guitarString: 'A', notes: ['A', '', 'B', 'C', '', ''] },
                        { guitarString: 'E', notes: ['E', 'F', '', 'G', '', ''] }
                    ]),
                    new Shape('4º shape', ['1', '2', '3', '4', '5', '6', '7'], [
                        { guitarString: 'E', notes: ['', '', 'G', '', 'A', '', 'B'] },
                        { guitarString: 'B', notes: ['', '', 'D', '', 'E', 'F', ''] },
                        { guitarString: 'G', notes: ['', 'A', '', 'B', 'C', '', ''] },
                        { guitarString: 'D', notes: ['', 'E', 'F', '', 'G', '', ''] },
                        { guitarString: 'A', notes: ['', 'B', 'C', '', 'D', '', ''] },
                        { guitarString: 'E', notes: ['F', '', 'G', '', 'A', '', ''] }
                    ]),
                    new Shape('5º shape', ['3', '4', '5', '6', '7', '8'], [
                        { guitarString: 'E', notes: ['', '', 'A', '', 'B', 'C'] },
                        { guitarString: 'B', notes: ['', '', 'E', 'F', '', 'G'] },
                        { guitarString: 'G', notes: ['', 'B', 'C', '', 'D', ''] },
                        { guitarString: 'D', notes: ['F', '', 'G', '', 'A', ''] },
                        { guitarString: 'A', notes: ['C', '', 'D', '', 'E', ''] },
                        { guitarString: 'E', notes: ['G', '', 'A', '', 'B', ''] }
                    ]),
                    new Shape('6º shape', ['5', '6', '7', '8', '9', '10'], [
                        { guitarString: 'E', notes: ['', '', 'B', 'C', '', 'D'] },
                        { guitarString: 'B', notes: ['', 'F', '', 'G', '', 'A'] },
                        { guitarString: 'G', notes: ['C', '', 'D', '', 'E', ''] },
                        { guitarString: 'D', notes: ['G', '', 'A', '', 'B', ''] },
                        { guitarString: 'A', notes: ['D', '', 'E', 'F', '', ''] },
                        { guitarString: 'E', notes: ['A', '', 'B', 'C', '', ''] }
                    ]),
                    new Shape('7º shape', ['7', '8', '9', '10', '11', '12'], [
                        { guitarString: 'E', notes: ['', 'C', '', 'D', '', 'E'] },
                        { guitarString: 'B', notes: ['', 'G', '', 'A', '', 'B'] },
                        { guitarString: 'G', notes: ['D', '', 'E', 'F', '', ''] },
                        { guitarString: 'D', notes: ['A', '', 'B', 'C', '', ''] },
                        { guitarString: 'A', notes: ['E', 'F', '', 'G', '', ''] },
                        { guitarString: 'E', notes: ['B', 'C', '', 'D', '', ''] }
                    ])
                ];
                break;
            case 'penta':
                this.shapes = [
                    new Shape('1º shape', ['5', '6', '7', '8'], [
                        { guitarString: 'E', notes: ['A', '', '', 'C'] },
                        { guitarString: 'B', notes: ['E', '', '', 'G'] },
                        { guitarString: 'G', notes: ['C', '', 'D', ''] },
                        { guitarString: 'D', notes: ['G', '', 'A', ''] },
                        { guitarString: 'A', notes: ['D', '', 'E', ''] },
                        { guitarString: 'E', notes: ['A', '', '', 'C'] }
                    ]),
                    new Shape('2º shape', ['7', '8', '9', '10'], [
                        { guitarString: 'E', notes: ['', 'C', '', 'D'] },
                        { guitarString: 'B', notes: ['', 'G', '', 'A'] },
                        { guitarString: 'G', notes: ['D', '', 'E', ''] },
                        { guitarString: 'D', notes: ['A', '', '', 'C'] },
                        { guitarString: 'A', notes: ['E', '', '', 'G'] },
                        { guitarString: 'E', notes: ['', 'C', '', 'D'] }
                    ]),
                    new Shape('3º shape', ['9', '10', '11', '12', '13'], [
                        { guitarString: 'E', notes: ['', 'D', '', 'E', ''] },
                        { guitarString: 'B', notes: ['', 'A', '', '', 'C'] },
                        { guitarString: 'G', notes: ['E', '', '', 'G', ''] },
                        { guitarString: 'D', notes: ['', 'C', '', 'D', ''] },
                        { guitarString: 'A', notes: ['', 'G', '', 'A', ''] },
                        { guitarString: 'E', notes: ['', 'D', '', 'E', ''] }
                    ]),
                    new Shape('4º shape', ['12', '13', '14', '15'], [
                        { guitarString: 'E', notes: ['E', '', '', 'G'] },
                        { guitarString: 'B', notes: ['', 'C', '', 'D'] },
                        { guitarString: 'G', notes: ['G', '', 'A', ''] },
                        { guitarString: 'D', notes: ['D', '', 'E', ''] },
                        { guitarString: 'A', notes: ['A', '', '', 'C'] },
                        { guitarString: 'E', notes: ['E', '', '', 'G'] }
                    ]),
                    new Shape('5º shape', ['2', '3', '4', '5'], [
                        { guitarString: 'E', notes: ['', 'G', '', 'A'] },
                        { guitarString: 'B', notes: ['', 'D', '', 'E'] },
                        { guitarString: 'G', notes: ['A', '', '', 'C'] },
                        { guitarString: 'D', notes: ['E', '', '', 'G'] },
                        { guitarString: 'A', notes: ['', 'C', '', 'D'] },
                        { guitarString: 'E', notes: ['', 'G', '', 'A'] }
                    ]),
                ];
                break;
            case 'penta_blues':
                this.shapes = [
                    new Shape('1º shape', ['5', '6', '7', '8'], [
                        { guitarString: 'E', notes: ['A', '', '', 'C'] },
                        { guitarString: 'B', notes: ['E', '', '', 'G'] },
                        { guitarString: 'G', notes: ['C', '', 'D', 'D#'] },
                        { guitarString: 'D', notes: ['G', '', 'A', ''] },
                        { guitarString: 'A', notes: ['D', 'D#', 'E', ''] },
                        { guitarString: 'E', notes: ['A', '', '', 'C'] }
                    ]),
                    new Shape('2º shape', ['7', '8', '9', '10', '11'], [
                        { guitarString: 'E', notes: ['', 'C', '', 'D', 'D#'] },
                        { guitarString: 'B', notes: ['', 'G', '', 'A', ''] },
                        { guitarString: 'G', notes: ['D', 'D#', 'E', '', ''] },
                        { guitarString: 'D', notes: ['A', '', '', 'C', ''] },
                        { guitarString: 'A', notes: ['E', '', '', 'G', ''] },
                        { guitarString: 'E', notes: ['', 'C', '', 'D', 'D#'] }
                    ]),
                    new Shape('3º shape', ['9', '10', '11', '12', '13'], [
                        { guitarString: 'E', notes: ['', 'D', 'D#', 'E', ''] },
                        { guitarString: 'B', notes: ['', 'A', '', '', 'C'] },
                        { guitarString: 'G', notes: ['E', '', '', 'G', ''] },
                        { guitarString: 'D', notes: ['', 'C', '', 'D', 'D#'] },
                        { guitarString: 'A', notes: ['', 'G', '', 'A', ''] },
                        { guitarString: 'E', notes: ['', 'D', 'D#', 'E', ''] }
                    ]),
                    new Shape('4º shape', ['12', '13', '14', '15', '16'], [
                        { guitarString: 'E', notes: ['E', '', '', 'G', ''] },
                        { guitarString: 'B', notes: ['', 'C', '', 'D', 'D#'] },
                        { guitarString: 'G', notes: ['G', '', 'A', '', ''] },
                        { guitarString: 'D', notes: ['D', 'D#', 'E', '', ''] },
                        { guitarString: 'A', notes: ['A', '', '', 'C', ''] },
                        { guitarString: 'E', notes: ['E', '', '', 'G', ''] }
                    ]),
                    new Shape('5º shape', ['2', '3', '4', '5', '6'], [
                        { guitarString: 'E', notes: ['', 'G', '', 'A', ''] },
                        { guitarString: 'B', notes: ['', 'D', 'D#', 'E', ''] },
                        { guitarString: 'G', notes: ['A', '', '', 'C', ''] },
                        { guitarString: 'D', notes: ['E', '', '', 'G', ''] },
                        { guitarString: 'A', notes: ['', 'C', '', 'D', 'D#'] },
                        { guitarString: 'E', notes: ['', 'G', '', 'A', ''] }
                    ])
                ];
                break;
            default:
                break;
        }
        this.shapes = this.shapes.map(shape => {
            shape.frets = this.setShapeFrets(shape.frets);
            shape.guitarStrings = shape.guitarStrings.map(guitarString => {
                guitarString = this.setGuitarString(guitarString);
                return guitarString;
            });
            return shape;
        });
    }

    private setShapeFrets(frets: string[]): string[] {
        if (this.dominantHand === 'left_handed') {
            frets = frets.reverse();
        }
        return frets;
    }

    private setGuitarString(guitarString: GuitarString): GuitarString {
        guitarString = this.setGuitarStringNoteType(guitarString);
        guitarString = this.setGuitarStringDominantHand(guitarString);
        return guitarString;
    }

    private setGuitarStringNoteType(guitarString: GuitarString): GuitarString {
        let noteTypeRelation = this.noteTypeRelations.find(note => note.abc === guitarString.guitarString)!;
        guitarString.guitarString = noteTypeRelation[this.noteType as keyof typeof noteTypeRelation];
        guitarString.notes = guitarString.notes.map(note => {
            if (note !== '') {
                let noteTypeRelation = this.noteTypeRelations.find(noteType => noteType.abc === note)!;
                note = noteTypeRelation[this.noteType as keyof typeof noteTypeRelation];
            }
            return note;
        });
        return guitarString;
    }

    private setGuitarStringDominantHand(guitarString: GuitarString): GuitarString {
        if (this.dominantHand === 'left_handed') {
            guitarString.notes = guitarString.notes.reverse();
        }
        return guitarString;
    }
}