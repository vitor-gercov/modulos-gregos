import { Component, Input } from '@angular/core';
import { Modulo } from '../../models';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-modulo',
  imports: [NgClass],
  templateUrl: './modulo.component.html',
  styleUrl: './modulo.component.css'
})
export class ModuloComponent {
  @Input({ required: true }) modulo!: Modulo;
}
