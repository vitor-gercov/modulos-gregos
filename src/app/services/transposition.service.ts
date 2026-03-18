import { Injectable } from '@angular/core';
import { Shape } from 'app/models';

const CHROMATIC_SHARPS = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const CHROMATIC_FLATS  = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

const FLAT_KEYS = new Set(['F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb']);

// Correções enarmônicas por tonalidade: notas que devem ser soletradas diferente
// do padrão cromático para respeitar a regra de uma nota por nome de letra.
// Ex: F# maior usa E# (enarmônico de F) como 7ª maior, não F natural.
const ENHARMONIC_CORRECTIONS: Record<string, Record<string, string>> = {
    'F#': { 'F': 'E#' },
};

export const ALL_KEYS = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];

@Injectable({ providedIn: 'root' })
export class TranspositionService {

    private noteToSemitone(note: string): number {
        const sharp = CHROMATIC_SHARPS.indexOf(note);
        if (sharp !== -1) return sharp;
        const flat = CHROMATIC_FLATS.indexOf(note);
        if (flat !== -1) return flat;
        // Notas enarmônicas especiais (ex: E# = F, B# = C)
        const enharmonic: Record<string, number> = { 'E#': 5, 'B#': 0, 'Fb': 4, 'Cb': 11 };
        return enharmonic[note] ?? -1;
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
        const corrections = ENHARMONIC_CORRECTIONS[targetKey] ?? {};

        if (semitones === 0) return shapes;

        return shapes.map(shape =>
            new Shape(
                shape.title,
                shape.frets,
                shape.guitarStrings.map(gs => ({
                    guitarString: gs.guitarString,
                    notes: gs.notes.map(note => {
                        if (!note) return note;
                        const transposed = this.transposeNote(note, semitones, preferFlat);
                        return corrections[transposed] ?? transposed;
                    })
                }))
            )
        );
    }
}
