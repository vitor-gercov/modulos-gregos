import { Component, computed, model, ModelSignal, Signal, signal, WritableSignal } from '@angular/core';
import { ModuloComponent } from "../modulo/modulo.component";
import { Modulo } from '../../models';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { ModulosGregos } from '../../models/modulos-gregos.model';


@Component({
  selector: 'app-modulos-gregos',
  imports: [ModuloComponent, MatRadioModule, FormsModule],
  templateUrl: './modulos-gregos.component.html',
  styleUrl: './modulos-gregos.component.css'
})
export class ModulosGregosComponent {
  escalaSelecionada: ModelSignal<string> = model<string>('maior');
  modulosGregos: Signal<Modulo[]> = computed(() => new ModulosGregos(this.escalaSelecionada()).modulos)
}
