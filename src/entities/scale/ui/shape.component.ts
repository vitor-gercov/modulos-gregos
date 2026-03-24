import { Component, Input } from '@angular/core';
import { Shape } from '../model';
import { NgClass } from '@angular/common';
import { CardComponent } from 'shared/ui/card/card.component';

@Component({
  selector: 'app-shape',
  imports: [NgClass, CardComponent],
  templateUrl: './shape.component.html',
  styleUrl: './shape.component.css'
})
export class ShapeComponent {
  @Input({ required: true }) shape!: Shape;
  @Input() tonic: string = '';
  @Input() stringCount: number = 6;
}
