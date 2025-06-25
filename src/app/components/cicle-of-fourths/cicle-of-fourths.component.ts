import { NgStyle } from '@angular/common';
import { Component, model, ModelSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cicle-of-fourths',
  imports: [
    NgStyle,
    FormsModule
  ],
  templateUrl: './cicle-of-fourths.component.html',
  styleUrl: './cicle-of-fourths.component.css'
})
export class CicleOfFourthsComponent {
  notes = [
    'C',
    'G',
    'D',
    'A',
    'E',
    'B',
    'F#',
    'C#',
    'G#',
    'D#',
    'A#',
    'F'
  ];

  fourthSelected: ModelSignal<string> = model<string>('roote_note');

  inputId(noteIndex: number): string {
    return noteIndex === 0 ? 'roote_note' : `${noteIndex + 1}_fourth`;
  }
}
