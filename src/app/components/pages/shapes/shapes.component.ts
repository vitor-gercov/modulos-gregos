import { Component, computed, model, ModelSignal, Signal } from '@angular/core';
import { Shape } from '../../../models';
import { FormsModule } from '@angular/forms';
import { CAGED } from '../../../models/caged.model';
import { ShapeComponent } from 'app/components/shape/shape.component';


@Component({
  selector: 'app-shapes',
  imports: [
    ShapeComponent,
    FormsModule
  ],
  templateUrl: './shapes.component.html',
  styleUrl: './shapes.component.css'
})
export class ShapesComponent {
  scaleSelected: ModelSignal<string> = model<string>('major');
  dominantHand: ModelSignal<string> = model<string>('right_handed');
  noteType: ModelSignal<string> = model<string>('abc');
  caged: Signal<Shape[]> = computed(() => new CAGED(this.scaleSelected(), this.dominantHand(), this.noteType()).shapes);
}
