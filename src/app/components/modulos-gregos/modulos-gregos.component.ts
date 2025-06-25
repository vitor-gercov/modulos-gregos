import { Component, computed, model, ModelSignal, Signal } from '@angular/core';
import { ModuloComponent } from "../modulo/modulo.component";
import { Shape } from '../../models';
import { FormsModule } from '@angular/forms';
import { CAGED } from '../../models/caged.model';
import { CicleOfFourthsComponent } from '../cicle-of-fourths/cicle-of-fourths.component';


@Component({
  selector: 'app-modulos-gregos',
  imports: [
    CicleOfFourthsComponent,
    ModuloComponent,
    FormsModule
  ],
  templateUrl: './modulos-gregos.component.html',
  styleUrl: './modulos-gregos.component.css'
})
export class ModulosGregosComponent {
  scaleSelected: ModelSignal<string> = model<string>('major');
  dominantHand: ModelSignal<string> = model<string>('right_handed');
  noteType: ModelSignal<string> = model<string>('abc');
  caged: Signal<Shape[]> = computed(() => new CAGED(this.scaleSelected(), this.dominantHand(), this.noteType()).shapes);
}
