import { Component, model } from '@angular/core';
import { ALL_KEYS } from 'entities/scale/lib/transposition.service';

@Component({
  selector: 'app-tone-selector',
  templateUrl: './tone-selector.component.html',
  styleUrl: './tone-selector.component.css'
})
export class ToneSelectorComponent {
  key = model<string>('C');
  readonly keys = ALL_KEYS;
}
