import { Component, input } from '@angular/core';
import { SectionTitleDirective } from '../section-title/section-title.directive';

@Component({
  selector: 'app-accordion',
  imports: [SectionTitleDirective],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
})
export class AccordionComponent {
  title = input.required<string>();
  subtitle = input<string>('');
}
