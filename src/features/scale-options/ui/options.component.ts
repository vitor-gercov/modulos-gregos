import { Component, inject } from '@angular/core';
import { CardComponent } from 'shared/ui/card/card.component';
import { AccordionComponent } from 'shared/ui/accordion/accordion.component';
import { DominantHandFilterComponent } from './dominant-hand-filter/dominant-hand-filter.component';
import { StringCountFilterComponent } from './string-count-filter/string-count-filter.component';
import { ScaleStateService } from 'entities/scale/model/scale-state.service';

@Component({
  selector: 'app-options',
  imports: [CardComponent, AccordionComponent, DominantHandFilterComponent, StringCountFilterComponent],
  templateUrl: './options.component.html',
  styleUrl: './options.component.css'
})
export class OptionsComponent {
  protected readonly state = inject(ScaleStateService);
}
