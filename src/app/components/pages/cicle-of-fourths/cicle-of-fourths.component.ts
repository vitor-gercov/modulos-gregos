import { Component, computed, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Shape } from '@models';
import { ShapeComponent } from 'app/components/shape/shape.component';
import { CicleOfFourths } from 'app/models/cicle-of-fourths.model';

@Component({
  selector: 'app-cicle-of-fourths',
  imports: [
    ShapeComponent,
    FormsModule
  ],
  templateUrl: './cicle-of-fourths.component.html',
  styleUrl: './cicle-of-fourths.component.css'
})
export class CicleOfFourthsComponent {
  notes = [
    'C',
    'F',
    'Bb',
    'Eb',
    'Ab',
    'Db',
    'Gb',
    'Cb'
  ];
  fourthSelected = model<string>('root_note');
  shapes = computed<Shape[]>(() => new CicleOfFourths().shapes);

  inputId(noteIndex: number): string {
    return noteIndex === 0 ? 'roote_note' : `${noteIndex + 1}_fourth`;
  }
}
