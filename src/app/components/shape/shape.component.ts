import { Component, Input } from '@angular/core';
import { Shape } from '../../models';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-shape',
  imports: [NgClass],
  templateUrl: './shape.component.html',
  styleUrl: './shape.component.css'
})
export class ShapeComponent {
  @Input({ required: true }) shape!: Shape;
}
