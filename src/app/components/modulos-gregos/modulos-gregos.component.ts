import { Component } from '@angular/core';
import { ModuloComponent } from "../modulo/modulo.component";
import { Modulo } from '../../models';

@Component({
  selector: 'app-modulos-gregos',
  imports: [ModuloComponent],
  templateUrl: './modulos-gregos.component.html',
  styleUrl: './modulos-gregos.component.css'
})
export class ModulosGregosComponent {
  modulosGregos: Modulo[] = [
    new Modulo('1º módulo', ['8', '9', '10', '11', '12', '13'], [
      { corda: 'E', notas: ['', '', 'D', '', 'E', 'F'] },
      { corda: 'B', notas: ['', '', 'A', '', 'B', 'C'] },
      { corda: 'G', notas: ['', 'E', 'F', '', 'G', ''] },
      { corda: 'D', notas: ['', 'B', 'C', '', 'D', ''] },
      { corda: 'A', notas: ['F', '', 'G', '', 'A', ''] },
      { corda: 'E', notas: ['C', '', 'D', '', 'E', ''] }
    ]),
    new Modulo('2º módulo', ['10', '11', '12', '13', '14', '15'], [
      { corda: 'E', notas: ['', '', 'E', 'F', '', 'G',] },
      { corda: 'B', notas: ['', '', 'B', 'C', '', 'D',] },
      { corda: 'G', notas: ['F', '', 'G', '', 'A', '',] },
      { corda: 'D', notas: ['C', '', 'D', '', 'E', '',] },
      { corda: 'A', notas: ['G', '', 'A', '', 'B', '',] },
      { corda: 'E', notas: ['D', '', 'E', 'F', '', '',] }
    ]),
    new Modulo('3º módulo', ['12', '13', '14', '15', '16', '17'], [
      { corda: 'E', notas: ['', 'F', '', 'G', '', 'A'] },
      { corda: 'B', notas: ['', 'C', '', 'D', '', 'E'] },
      { corda: 'G', notas: ['G', '', 'A', '', 'B', ''] },
      { corda: 'D', notas: ['D', '', 'E', 'F', '', ''] },
      { corda: 'A', notas: ['A', '', 'B', 'C', '', ''] },
      { corda: 'E', notas: ['E', 'F', '', 'G', '', ''] }
    ]),
    new Modulo('4º módulo', ['1', '2', '3', '4', '5', '6', '7'], [
      { corda: 'E', notas: ['', '', 'G', '', 'A', '', 'B'] },
      { corda: 'B', notas: ['', '', 'D', '', 'E', 'F', ''] },
      { corda: 'G', notas: ['', 'A', '', 'B', 'C', '', ''] },
      { corda: 'D', notas: ['', 'E', 'F', '', 'G', '', ''] },
      { corda: 'A', notas: ['', 'B', 'C', '', 'D', '', ''] },
      { corda: 'E', notas: ['F', '', 'G', '', 'A', '', ''] }
    ]),
    new Modulo('5º módulo', ['3', '4', '5', '6', '7', '8'], [
      { corda: 'E', notas: ['', '', 'A', '', 'B', 'C',] },
      { corda: 'B', notas: ['', '', 'E', 'F', '', 'G',] },
      { corda: 'G', notas: ['', 'B', 'C', '', 'D', '',] },
      { corda: 'D', notas: ['F', '', 'G', '', 'A', '',] },
      { corda: 'A', notas: ['C', '', 'D', '', 'E', '',] },
      { corda: 'E', notas: ['G', '', 'A', '', 'B', '',] },
    ]),
    new Modulo('6º módulo', ['5', '6', '7', '8', '9', '10'], [
      { corda: 'E', notas: ['', '', 'B', 'C', '', 'D',] },
      { corda: 'B', notas: ['', 'F', '', 'G', '', 'A',] },
      { corda: 'G', notas: ['C', '', 'D', '', 'E', '',] },
      { corda: 'D', notas: ['G', '', 'A', '', 'B', '',] },
      { corda: 'A', notas: ['D', '', 'E', 'F', '', '',] },
      { corda: 'E', notas: ['A', '', 'B', 'C', '', '',] },
    ]),
    new Modulo('7º módulo', ['7', '8', '9', '10', '11', '12'], [
      { corda: 'E', notas: ['', 'C', '', 'D', '', 'E',] },
      { corda: 'B', notas: ['', 'G', '', 'A', '', 'B',] },
      { corda: 'G', notas: ['D', '', 'E', 'F', '', '',] },
      { corda: 'D', notas: ['A', '', 'B', 'C', '', '',] },
      { corda: 'A', notas: ['E', 'F', '', 'G', '', '',] },
      { corda: 'E', notas: ['B', 'C', '', 'D', '', '',] },
    ]),
  ]
}
