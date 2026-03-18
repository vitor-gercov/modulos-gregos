import { Component, input } from '@angular/core';
import { SectionTitleDirective } from '../section-title/section-title.directive';
import { HelpModalComponent } from '../help-modal/help-modal.component';

@Component({
  selector: 'app-card',
  imports: [SectionTitleDirective, HelpModalComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  title = input.required<string>();
  subtitle = input<string>('');

  /** Parâmetros opcionais para o botão de dúvidas exibido ao lado do título */
  helpLabel = input<string>();
  helpAriaLabel = input<string>('');
  helpTitle = input<string>();
  helpSubtitle = input<string>('');
}
