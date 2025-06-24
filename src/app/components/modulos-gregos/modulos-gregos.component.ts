import { Component, computed, model, ModelSignal, Signal, signal, WritableSignal } from '@angular/core';
import { ModuloComponent } from "../modulo/modulo.component";
import { Shape } from '../../models';
import { FormsModule } from '@angular/forms';
import { CAGED } from '../../models/caged.model';


@Component({
  selector: 'app-modulos-gregos',
  imports: [ModuloComponent, FormsModule],
  templateUrl: './modulos-gregos.component.html',
  styleUrl: './modulos-gregos.component.css'
})
export class ModulosGregosComponent {
  scaleSelected: ModelSignal<string> = model<string>('major');
  dominantHand: ModelSignal<string> = model<string>('right_handed');
  caged: Signal<Shape[]> = computed(() => {
    let shapes = new CAGED(this.scaleSelected()).shapes;
    if (this.dominantHand() === 'left_handed') {
      shapes.map(shape => {
        shape.frets = shape.frets.reverse();
        shape.strings = shape.strings.map(string => {
          string.notes = string.notes.reverse();
          return string;
        });
        return shape;
      });
    }
    return shapes;
  });
}
