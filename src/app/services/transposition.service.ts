import { Injectable } from '@angular/core';
import { Shape } from 'app/models';

const CHROMATIC_SHARPS = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const CHROMATIC_FLATS  = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

const FLAT_KEYS = new Set(['F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb']);

export const ALL_KEYS = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];

@Injectable({ providedIn: 'root' })
export class TranspositionService {

    private noteToSemitone(note: string): number {
        const sharp = CHROMATIC_SHARPS.indexOf(note);
        if (sharp !== -1) return sharp;
        return CHROMATIC_FLATS.indexOf(note);
    }

    private semitoneToNote(semitone: number, preferFlat: boolean): string {
        const normalized = ((semitone % 12) + 12) % 12;
        return preferFlat ? CHROMATIC_FLATS[normalized] : CHROMATIC_SHARPS[normalized];
    }

    semitoneDistance(from: string, to: string): number {
        const a = this.noteToSemitone(from);
        const b = this.noteToSemitone(to);
        return ((b - a) % 12 + 12) % 12;
    }

    transposeNote(note: string, semitones: number, preferFlat: boolean): string {
        if (!note) return note;
        const base = this.noteToSemitone(note);
        if (base === -1) return note;
        return this.semitoneToNote(base + semitones, preferFlat);
    }

    transposeShapes(shapes: Shape[], targetKey: string): Shape[] {
        const semitones = this.noteToSemitone(targetKey);
        const preferFlat = FLAT_KEYS.has(targetKey);

        if (semitones === 0) return shapes;

        return shapes.map(shape =>
            new Shape(
                shape.title,
                shape.frets,
                shape.guitarStrings.map(gs => ({
                    guitarString: gs.guitarString,
                    notes: gs.notes.map(note =>
                        note ? this.transposeNote(note, semitones, preferFlat) : note
                    )
                }))
            )
        );
    }
}
