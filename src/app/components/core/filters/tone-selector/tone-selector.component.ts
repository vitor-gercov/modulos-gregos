import { Component, model } from '@angular/core';
import { ALL_KEYS } from 'app/services/transposition.service';
import { SectionTitleDirective } from 'app/components/core/ui/section-title/section-title.directive';

@Component({
  selector: 'app-tone-selector',
  imports: [SectionTitleDirective],
  templateUrl: './tone-selector.component.html',
  styleUrl: './tone-selector.component.css'
})
export class ToneSelectorComponent {
  key = model<string>('C');
  readonly keys = ALL_KEYS;
}
