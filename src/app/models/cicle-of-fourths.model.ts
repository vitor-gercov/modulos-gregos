import { GuitarString } from "@types";
import { Shape } from "./shape.model";
import { NOTE_TYPE_RELATIONS } from "app/consts";

export class CicleOfFourths {
    shapes: Shape[] = [];
    private noteTypeRelations = NOTE_TYPE_RELATIONS;

    constructor(
        private shape: string = 'shape 1',
        private dominantHand: string = 'right_handed',
        private noteType: string = 'abc',
        private scale: string = 'penta',
    ) {
        this.setShapes();
    }

    private setShapes(): void {
        switch (this.shape) {
            case 'shape_1':
                this.shapes = [
                    new Shape('C', ['5', '6', '7', '8', '9', '10', '11', '12', '13'], [
                        { guitarString: 'E', notes: ['', '', '', '', '', 'D', '', 'E', ''] },
                        { guitarString: 'B', notes: ['', '', '', '', '', 'A', '', '', 'C'] },
                        { guitarString: 'G', notes: ['', '', 'D', '', 'E', '', '', '', ''] },
                        { guitarString: 'D', notes: ['', '', 'A', '', '', 'C', '', '', ''] },
                        { guitarString: 'A', notes: ['D', '', 'E', '', '', '', '', '', ''] },
                        { guitarString: 'E', notes: ['A', '', '', 'C', '', '', '', '', ''] }
                    ]),
                    new Shape('F', ['10', '11', '12', '13', '14', '15', '16', '17', '18'], [
                        { guitarString: 'E', notes: ['', '', '', '', '', 'G', '', 'A', ''] },
                        { guitarString: 'B', notes: ['', '', '', '', '', 'D', '', '', 'F'] },
                        { guitarString: 'G', notes: ['', '', 'G', '', 'A', '', '', '', ''] },
                        { guitarString: 'D', notes: ['', '', 'D', '', '', 'F', '', '', ''] },
                        { guitarString: 'A', notes: ['G', '', 'A', '', '', '', '', '', ''] },
                        { guitarString: 'E', notes: ['D', '', '', 'F', '', '', '', '', ''] }
                    ]),
                    new Shape('Bb', ['3', '4', '5', '6', '7', '8', '9', '10', '11'], [
                        { guitarString: 'E', notes: ['', '', '', '', '', 'C', '', 'D', ''] },
                        { guitarString: 'B', notes: ['', '', '', '', '', 'G', '', '', 'Bb'] },
                        { guitarString: 'G', notes: ['', '', 'C', '', 'D', '', '', '', ''] },
                        { guitarString: 'D', notes: ['', '', 'G', '', '', 'Bb', '', '', ''] },
                        { guitarString: 'A', notes: ['C', '', 'D', '', '', '', '', '', ''] },
                        { guitarString: 'E', notes: ['G', '', '', 'Bb', '', '', '', '', ''] }
                    ]),
                    new Shape('Eb', ['8', '9', '10', '11', '12', '13', '14', '15', '16'], [
                        { guitarString: 'E', notes: ['', '', '', '', '', 'F', '', 'G', ''] },
                        { guitarString: 'B', notes: ['', '', '', '', '', 'C', '', '', 'Eb'] },
                        { guitarString: 'G', notes: ['', '', 'F', '', 'G', '', '', '', ''] },
                        { guitarString: 'D', notes: ['', '', 'C', '', '', 'Eb', '', '', ''] },
                        { guitarString: 'A', notes: ['F', '', 'G', '', '', '', '', '', ''] },
                        { guitarString: 'E', notes: ['C', '', '', 'Eb', '', '', '', '', ''] }
                    ]),
                    new Shape('Ab', ['1', '2', '3', '4', '5', '6', '7', '8', '9'], [
                        { guitarString: 'E', notes: ['', '', '', '', '', 'Bb', '', 'C', ''] },
                        { guitarString: 'B', notes: ['', '', '', '', '', 'F', '', '', 'Ab'] },
                        { guitarString: 'G', notes: ['', '', 'Bb', '', 'C', '', '', '', ''] },
                        { guitarString: 'D', notes: ['', '', 'F', '', '', 'Ab', '', '', ''] },
                        { guitarString: 'A', notes: ['Bb', '', 'C', '', '', '', '', '', ''] },
                        { guitarString: 'E', notes: ['F', '', '', 'Ab', '', '', '', '', ''] }
                    ]),
                    new Shape('Db', ['6', '7', '8', '9', '10', '11', '12', '13', '14'], [
                        { guitarString: 'E', notes: ['', '', '', '', '', 'Eb', '', 'F', ''] },
                        { guitarString: 'B', notes: ['', '', '', '', '', 'Bb', '', '', 'Db'] },
                        { guitarString: 'G', notes: ['', '', 'Eb', '', 'F', '', '', '', ''] },
                        { guitarString: 'D', notes: ['', '', 'Bb', '', '', 'Db', '', '', ''] },
                        { guitarString: 'A', notes: ['Eb', '', 'F', '', '', '', '', '', ''] },
                        { guitarString: 'E', notes: ['Bb', '', '', 'Db', '', '', '', '', ''] }
                    ]),
                    new Shape('Gb', ['11', '12', '13', '14', '15', '16', '17', '18', '19'], [
                        { guitarString: 'E', notes: ['', '', '', '', '', 'Ab', '', 'Bb', ''] },
                        { guitarString: 'B', notes: ['', '', '', '', '', 'Eb', '', '', 'Gb'] },
                        { guitarString: 'G', notes: ['', '', 'Ab', '', 'Bb', '', '', '', ''] },
                        { guitarString: 'D', notes: ['', '', 'Eb', '', '', 'Gb', '', '', ''] },
                        { guitarString: 'A', notes: ['Ab', '', 'Bb', '', '', '', '', '', ''] },
                        { guitarString: 'E', notes: ['Eb', '', '', 'Gb', '', '', '', '', ''] }
                    ]),
                    new Shape('Cb', ['4', '5', '6', '7', '8', '9', '10', '11', '12'], [
                        { guitarString: 'E', notes: ['', '', '', '', '', 'Db', '', 'Eb', ''] },
                        { guitarString: 'B', notes: ['', '', '', '', '', 'Ab', '', '', 'Cb'] },
                        { guitarString: 'G', notes: ['', '', 'Db', '', 'Eb', '', '', '', ''] },
                        { guitarString: 'D', notes: ['', '', 'Ab', '', '', 'Cb', '', '', ''] },
                        { guitarString: 'A', notes: ['Db', '', 'Eb', '', '', '', '', '', ''] },
                        { guitarString: 'E', notes: ['Ab', '', '', 'Cb', '', '', '', '', ''] }
                    ])
                ];
                break;
            case 'shape_5':
                this.shapes = [
                    new Shape('C', ['3', '4', '5', '6', '7', '8', '9', '10'], [
                        { guitarString: 'E', notes: ['', '', '', '', '', 'C', '', 'D'] },
                        { guitarString: 'B', notes: ['', '', '', '', '', 'G', '', 'A'] },
                        { guitarString: 'G', notes: ['', '', 'C', '', 'D', '', '', ''] },
                        { guitarString: 'D', notes: ['', '', 'G', '', 'A', '', '', ''] },
                        { guitarString: 'A', notes: ['C', '', 'D', '', '', '', '', ''] },
                        { guitarString: 'E', notes: ['G', '', 'A', '', '', '', '', ''] }
                    ]),
                    new Shape('F', ['8', '9', '10', '11', '12', '13', '14', '15'], [
                        { guitarString: 'E', notes: ['', '', '', '', '', 'F', '', 'G'] },
                        { guitarString: 'B', notes: ['', '', '', '', '', 'C', '', 'D'] },
                        { guitarString: 'G', notes: ['', '', 'F', '', 'G', '', '', ''] },
                        { guitarString: 'D', notes: ['', '', 'C', '', 'D', '', '', ''] },
                        { guitarString: 'A', notes: ['F', '', 'G', '', '', '', '', ''] },
                        { guitarString: 'E', notes: ['C', '', 'D', '', '', '', '', ''] }
                    ]),
                    new Shape('Bb', ['1', '2', '3', '4', '5', '6', '7', '8'], [
                        { guitarString: 'E', notes: ['', '', '', '', '', 'Bb', '', 'C'] },
                        { guitarString: 'B', notes: ['', '', '', '', '', 'F', '', 'G'] },
                        { guitarString: 'G', notes: ['', '', 'Bb', '', 'C', '', '', ''] },
                        { guitarString: 'D', notes: ['', '', 'F', '', 'G', '', '', ''] },
                        { guitarString: 'A', notes: ['Bb', '', 'C', '', '', '', '', ''] },
                        { guitarString: 'E', notes: ['F', '', 'G', '', '', '', '', ''] }
                    ]),
                    new Shape('Eb', ['6', '7', '8', '9', '10', '11', '12', '13'], [
                        { guitarString: 'E', notes: ['', '', '', '', '', 'Eb', '', 'F'] },
                        { guitarString: 'B', notes: ['', '', '', '', '', 'Bb', '', 'C'] },
                        { guitarString: 'G', notes: ['', '', 'Eb', '', 'F', '', '', ''] },
                        { guitarString: 'D', notes: ['', '', 'Bb', '', 'C', '', '', ''] },
                        { guitarString: 'A', notes: ['Eb', '', 'F', '', '', '', '', ''] },
                        { guitarString: 'E', notes: ['Bb', '', 'C', '', '', '', '', ''] }
                    ]),
                    new Shape('Ab', ['10', '11', '12', '13', '14', '15', '16', '17'], [
                        { guitarString: 'E', notes: ['', '', '', '', '', 'Ab', '', 'Bb'] },
                        { guitarString: 'B', notes: ['', '', '', '', '', 'Eb', '', 'F'] },
                        { guitarString: 'G', notes: ['', '', 'Ab', '', 'Bb', '', '', ''] },
                        { guitarString: 'D', notes: ['', '', 'Eb', '', 'F', '', '', ''] },
                        { guitarString: 'A', notes: ['Ab', '', 'Bb', '', '', '', '', ''] },
                        { guitarString: 'E', notes: ['Eb', '', 'F', '', '', '', '', ''] }
                    ]),
                    new Shape('Db', ['4', '5', '6', '7', '8', '9', '10', '11'], [
                        { guitarString: 'E', notes: ['', '', '', '', '', 'Db', '', 'Eb'] },
                        { guitarString: 'B', notes: ['', '', '', '', '', 'Ab', '', 'Bb'] },
                        { guitarString: 'G', notes: ['', '', 'Db', '', 'Eb', '', '', ''] },
                        { guitarString: 'D', notes: ['', '', 'Ab', '', 'Bb', '', '', ''] },
                        { guitarString: 'A', notes: ['Db', '', 'Eb', '', '', '', '', ''] },
                        { guitarString: 'E', notes: ['Ab', '', 'Bb', '', '', '', '', ''] }
                    ]),
                    new Shape('Gb', ['9', '10', '11', '12', '13', '14', '15', '16'], [
                        { guitarString: 'E', notes: ['', '', '', '', '', 'Gb', '', 'Ab'] },
                        { guitarString: 'B', notes: ['', '', '', '', '', 'Db', '', 'Eb'] },
                        { guitarString: 'G', notes: ['', '', 'Gb', '', 'Ab', '', '', ''] },
                        { guitarString: 'D', notes: ['', '', 'Db', '', 'Eb', '', '', ''] },
                        { guitarString: 'A', notes: ['Gb', '', 'Ab', '', '', '', '', ''] },
                        { guitarString: 'E', notes: ['Db', '', 'Eb', '', '', '', '', ''] }
                    ]),
                    new Shape('Cb', ['2', '3', '4', '5', '6', '7', '8', '9'], [
                        { guitarString: 'E', notes: ['', '', '', '', '', 'Cb', '', 'Db'] },
                        { guitarString: 'B', notes: ['', '', '', '', '', 'Gb', '', 'Ab'] },
                        { guitarString: 'G', notes: ['', '', 'Cb', '', 'Db', '', '', ''] },
                        { guitarString: 'D', notes: ['', '', 'Gb', '', 'Ab', '', '', ''] },
                        { guitarString: 'A', notes: ['Cb', '', 'Db', '', '', '', '', ''] },
                        { guitarString: 'E', notes: ['Gb', '', 'Ab', '', '', '', '', ''] }
                    ])
                ];
                break;
            default:
                console.error('invalid shape');
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