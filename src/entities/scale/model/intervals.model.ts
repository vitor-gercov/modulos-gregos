import { Intervals } from "@types";
import { INTERVALS, NOTE_TYPE_RELATIONS } from "shared/config";

export class IntervalsModel {
    root!: string;
    secondMinor!: string;
    secondMajor!: string;
    thirdMinor!: string;
    thirdMajor!: string;
    fourth!: string;
    tritone!: string;
    fifth!: string;
    sixthMinor!: string;
    sixthMajor!: string;
    seventhMinor!: string;
    seventhMajor!: string;
    private intervals = INTERVALS;
    private noteTypeRelations = NOTE_TYPE_RELATIONS;

    constructor(private rootNote: string, private noteType: string) {
        const selectedRootNote = this.intervals.map(interval => interval.root).indexOf(this.rootNote);
        if (selectedRootNote === -1) throw new Error('Root note not found');
        for (let key of (Object.keys(this.intervals[selectedRootNote]) as Array<keyof Intervals>)) {
            this[key] = this.setNoteType(this.intervals[selectedRootNote][key]);
        }
    }

    setNoteType(noteInFigure: string): string {
        let noteTypeRelation = this.noteTypeRelations.find(noteType => noteType.abc === noteInFigure)!;
        return noteTypeRelation[this.noteType as keyof typeof noteTypeRelation];
    }
}