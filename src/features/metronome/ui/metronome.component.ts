import { Component, inject, signal, OnDestroy } from '@angular/core';
import { MetronomeService } from '../model/metronome.service';

@Component({
  selector: 'app-metronome',
  templateUrl: './metronome.component.html',
  styleUrl: './metronome.component.css'
})
export class MetronomeComponent implements OnDestroy {
  protected readonly metronome = inject(MetronomeService);

  protected readonly timeSignatureOptions = [2, 3, 4, 5, 6, 7];
  protected readonly tapLabel = signal('Tap Tempo');

  protected get beatIndices(): number[] {
    return Array.from({ length: this.metronome.beatsPerMeasure() }, (_, i) => i);
  }

  protected onBpmInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.metronome.setBpm(Number(input.value));
  }

  protected onTap(): void {
    this.metronome.tap();
    this.tapLabel.set('Tap!');
    setTimeout(() => this.tapLabel.set('Tap Tempo'), 150);
  }

  ngOnDestroy(): void {
    this.metronome.stop();
  }
}
