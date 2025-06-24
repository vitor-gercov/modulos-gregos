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
  caged: Signal<Shape[]> = computed(() => new CAGED(this.scaleSelected()).shapes)
}
