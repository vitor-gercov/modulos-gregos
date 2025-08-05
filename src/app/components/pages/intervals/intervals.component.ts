import { Component, computed, model } from '@angular/core';
import { INTERVALS, INTERVALS_STEPS } from 'app/consts';
import { Intervals } from "@types";
import { NgClass } from '@angular/common';
import { IntervalsModel } from '@models';
import { NoteTypeFilterComponent } from 'app/components/core/filters/note-type-filter/note-type-filter.component';

@Component({
  selector: 'app-intervals',
  imports: [
    NgClass,
    NoteTypeFilterComponent
  ],
  templateUrl: './intervals.component.html',
  styleUrl: './intervals.component.css'
})
export class IntervalsComponent {
  rootNotes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  selectedRootNote = model<string>(this.rootNotes[0]);
  noteType = model<string>('abc');
  rootNoteIntervals = computed(() => new IntervalsModel(this.selectedRootNote(), this.noteType()));
  intervalsKeys = Object.keys(INTERVALS[0]) as Array<keyof Intervals>;
  intervalsSteps = INTERVALS_STEPS;
}
