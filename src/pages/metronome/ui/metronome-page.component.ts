import { Component } from '@angular/core';
import { MetronomeComponent } from 'features/metronome/ui/metronome.component';
import { SectionTitleDirective } from 'shared/ui/section-title/section-title.directive';

@Component({
  selector: 'app-metronome-page',
  imports: [MetronomeComponent, SectionTitleDirective],
  templateUrl: './metronome-page.component.html',
  styleUrl: './metronome-page.component.css'
})
export class MetronomePageComponent {}
