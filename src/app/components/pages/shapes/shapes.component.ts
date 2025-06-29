import { Component, computed, model, ModelSignal, Signal, viewChild } from '@angular/core';
import { Shape } from '../../../models';
import { FormsModule } from '@angular/forms';
import { CAGED } from '../../../models/caged.model';
import { ShapeComponent } from 'app/components/shape/shape.component';
import { DominantHandFilterComponent } from 'app/components/core/filters/dominant-hand-filter/dominant-hand-filter.component';
import { NoteTypeFilterComponent } from "../../core/filters/note-type-filter/note-type-filter.component";


@Component({
  selector: 'app-shapes',
  imports: [
    ShapeComponent,
    DominantHandFilterComponent,
    FormsModule,
    NoteTypeFilterComponent
  ],
  templateUrl: './shapes.component.html',
  styleUrl: './shapes.component.css'
})
export class ShapesComponent {
  scaleSelected: ModelSignal<string> = model<string>('major');
  dominantHand = model<string>('right_handed');
  noteType: ModelSignal<string> = model<string>('abc');
  caged: Signal<Shape[]> = computed(() => new CAGED(this.scaleSelected(), this.dominantHand(), this.noteType()).shapes);
}
