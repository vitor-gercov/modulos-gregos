import { GuitarString } from "@types";
import { Shape } from "./shape.model";
import { NOTE_TYPE_RELATIONS } from "app/consts";

export class CicleOfFourths {
    shapes: Shape[] = [];
    private noteTypeRelations = NOTE_TYPE_RELATIONS;

    constructor(
        private scale: string = 'penta',
        private dominantHand: string = 'right_handed',
        private noteType: string = 'abc'
    ) {
        this.setShapes();
    }

    private setShapes(): void {
        switch (this.scale) {
            case 'major':
                this.shapes = [];
                break;
            case 'penta':
                this.shapes = [
                    new Shape('C', ['5', '6', '7', '8', '9', '10', '11', '12', '13'], [
                        { guitarString: 'E', notes: ['', '', '', '', '', 'D', '', 'E', ''] },
                        { guitarString: 'B', notes: ['', '', '', '', '', 'A', '', '', 'C'] },
                        { guitarString: 'G', notes: ['', '', 'D', '', 'E', '', '', '', ''] },
                        { guitarString: 'D', notes: ['', '', 'A', '', '', 'C', '', '', ''] },
                        { guitarString: 'A', notes: ['D', '', 'E', '', '', '', '', '', ''] },
                        { guitarString: 'E', notes: ['A', '', '', 'C', '', '', '', '', ''] }
                    ])
                    // new Shape('C', ['5', '6', '7', '8', '9', '10', '11', '12', '13'], [
                    //     { guitarString: 'E', notes: ['A', '', '', 'C', '', 'D', '', 'E', ''] },
                    //     { guitarString: 'B', notes: ['E', '', '', 'G', '', 'A', '', '', 'C'] },
                    //     { guitarString: 'G', notes: ['', '', 'D', '', 'E', '', '', '', ''] },
                    //     { guitarString: 'D', notes: ['', '', 'A', '', '', 'C', '', '', ''] },
                    //     { guitarString: 'A', notes: ['D', '', 'E', '', '', '', '', '', ''] },
                    //     { guitarString: 'E', notes: ['A', '', '', 'C', '', '', '', '', ''] }
                    // ]),
                    // new Shape('2º shape', ['7', '8', '9', '10'], [
                    //     { guitarString: 'E', notes: ['', 'C', '', 'D'] },
                    //     { guitarString: 'B', notes: ['', 'G', '', 'A'] },
                    //     { guitarString: 'G', notes: ['D', '', 'E', ''] },
                    //     { guitarString: 'D', notes: ['A', '', '', 'C'] },
                    //     { guitarString: 'A', notes: ['E', '', '', 'G'] },
                    //     { guitarString: 'E', notes: ['', 'C', '', 'D'] }
                    // ]),
                    // new Shape('3º shape', ['9', '10', '11', '12', '13'], [
                    //     { guitarString: 'E', notes: ['', 'D', '', 'E', ''] },
                    //     { guitarString: 'B', notes: ['', 'A', '', '', 'C'] },
                    //     { guitarString: 'G', notes: ['E', '', '', 'G', ''] },
                    //     { guitarString: 'D', notes: ['', 'C', '', 'D', ''] },
                    //     { guitarString: 'A', notes: ['', 'G', '', 'A', ''] },
                    //     { guitarString: 'E', notes: ['', 'D', '', 'E', ''] }
                    // ]),
                    // new Shape('4º shape', ['12', '13', '14', '15'], [
                    //     { guitarString: 'E', notes: ['E', '', '', 'G'] },
                    //     { guitarString: 'B', notes: ['', 'C', '', 'D'] },
                    //     { guitarString: 'G', notes: ['G', '', 'A', ''] },
                    //     { guitarString: 'D', notes: ['D', '', 'E', ''] },
                    //     { guitarString: 'A', notes: ['A', '', '', 'C'] },
                    //     { guitarString: 'E', notes: ['E', '', '', 'G'] }
                    // ]),
                    // new Shape('5º shape', ['2', '3', '4', '5'], [
                    //     { guitarString: 'E', notes: ['', 'G', '', 'A'] },
                    //     { guitarString: 'B', notes: ['', 'D', '', 'E'] },
                    //     { guitarString: 'G', notes: ['A', '', '', 'C'] },
                    //     { guitarString: 'D', notes: ['E', '', '', 'G'] },
                    //     { guitarString: 'A', notes: ['', 'C', '', 'D'] },
                    //     { guitarString: 'E', notes: ['', 'G', '', 'A'] }
                    // ]),
                ];
                break;
            case 'penta_blues':
                this.shapes = [];
                break;
            default:
                console.error('invalid scale');
                this.shapes = [];
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