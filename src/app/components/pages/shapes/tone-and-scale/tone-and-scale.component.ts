import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from 'app/components/core/ui/card/card.component';
import { CardHelpDirective } from 'app/components/core/ui/card/card-help.directive';
import { ToneSelectorComponent } from 'app/components/core/filters/tone-selector/tone-selector.component';
import { ScaleStateService } from 'app/services/scale-state.service';
import { ToneAndScaleHelpModalComponent } from './tone-and-scale-help-modal/tone-and-scale-help-modal.component';

@Component({
  selector: 'app-tone-and-scale',
  imports: [FormsModule, CardComponent, CardHelpDirective, ToneSelectorComponent, ToneAndScaleHelpModalComponent],
  templateUrl: './tone-and-scale.component.html',
  styleUrl: './tone-and-scale.component.css'
})
export class ToneAndScaleComponent {
  protected readonly state = inject(ScaleStateService);
}
