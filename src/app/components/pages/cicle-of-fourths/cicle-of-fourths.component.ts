import { Component, ElementRef, model, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cicle-of-fourths',
  imports: [
    FormsModule
  ],
  templateUrl: './cicle-of-fourths.component.html',
  styleUrl: './cicle-of-fourths.component.css'
})
export class CicleOfFourthsComponent {
  canvasElementRef = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');
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
  fourthSelected = model<string>('root_note');

  inputId(noteIndex: number): string {
    return noteIndex === 0 ? 'roote_note' : `${noteIndex + 1}_fourth`;
  }
}
