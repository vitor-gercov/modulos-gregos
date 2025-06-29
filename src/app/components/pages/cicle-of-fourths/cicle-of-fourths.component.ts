import { Component, computed, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Shape } from '@models';
import { ShapeComponent } from 'app/components/shape/shape.component';
import { CicleOfFourths } from 'app/models/cicle-of-fourths.model';
import { DominantHandFilterComponent } from "../../core/filters/dominant-hand-filter/dominant-hand-filter.component";
import { NoteTypeFilterComponent } from "../../core/filters/note-type-filter/note-type-filter.component";

@Component({
  selector: 'app-cicle-of-fourths',
  imports: [
    ShapeComponent,
    FormsModule,
    DominantHandFilterComponent,
    NoteTypeFilterComponent
  ],
  templateUrl: './cicle-of-fourths.component.html',
  styleUrl: './cicle-of-fourths.component.css'
})
export class CicleOfFourthsComponent {
  selectedShape = model<string>('shape_1');
  noteType = model<string>('abc');
  dominantHand = model<string>('right_handed');
  shapes = computed<Shape[]>(() => new CicleOfFourths(this.selectedShape(), this.dominantHand(), this.noteType()).shapes);
}
