import { Component, inject } from '@angular/core';
import { CardComponent } from 'app/components/core/ui/card/card.component';
import { AccordionComponent } from 'app/components/core/ui/accordion/accordion.component';
import { DominantHandFilterComponent } from 'app/components/core/filters/dominant-hand-filter/dominant-hand-filter.component';
import { StringCountFilterComponent } from 'app/components/core/filters/string-count-filter/string-count-filter.component';
import { ScaleStateService } from 'app/services/scale-state.service';

@Component({
  selector: 'app-options',
  imports: [CardComponent, AccordionComponent, DominantHandFilterComponent, StringCountFilterComponent],
  templateUrl: './options.component.html',
  styleUrl: './options.component.css'
})
export class OptionsComponent {
  protected readonly state = inject(ScaleStateService);
}
