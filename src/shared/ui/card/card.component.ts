import { Component, input } from '@angular/core';
import { SectionTitleDirective } from '../section-title/section-title.directive';

@Component({
  selector: 'app-card',
  imports: [SectionTitleDirective],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  title = input.required<string>();
  subtitle = input<string>('');
}
