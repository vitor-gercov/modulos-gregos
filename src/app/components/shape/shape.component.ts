import { Component, Input } from '@angular/core';
import { Shape } from '../../models';
import { NgClass } from '@angular/common';
import { SectionTitleDirective } from 'app/components/core/ui/section-title/section-title.directive';

@Component({
  selector: 'app-shape',
  imports: [NgClass, SectionTitleDirective],
  templateUrl: './shape.component.html',
  styleUrl: './shape.component.css'
})
export class ShapeComponent {
  @Input({ required: true }) shape!: Shape;
  @Input() tonic: string = '';
}
