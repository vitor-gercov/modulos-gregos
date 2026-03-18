import { Injectable, computed, inject, signal } from '@angular/core';
import { Shape } from '../models';
import { CAGED } from '../models/caged.model';
import { TranspositionService } from './transposition.service';

const SCALE_LABELS: Record<string, string> = {
  major: 'Maior',
  penta: 'Pentatônica',
  penta_blues: 'Penta Blues',
};

const INTERVAL_NAMES: Record<number, string> = {
  0: 'T', 1: '2m', 2: '2M', 3: '3m', 4: '3M',
  5: '4J', 6: 'TT', 7: '5J', 8: '6m', 9: '6M', 10: '7m', 11: '7M',
};

@Injectable({ providedIn: 'root' })
export class ScaleStateService {
  private readonly transposition = inject(TranspositionService);

  readonly key = signal('C');
  readonly scaleSelected = signal('major');
  readonly dominantHand = signal('right_handed');
  readonly stringCount = signal<number>(6);

  readonly caged = computed<Shape[]>(() => {
    const shapes = new CAGED(this.scaleSelected(), this.dominantHand()).shapes;
    return this.transposition.transposeShapes(shapes, this.key());
  });

  readonly scaleLabel = computed(() =>
    `${this.key()} ${SCALE_LABELS[this.scaleSelected()] ?? this.scaleSelected()}`
  );

  readonly scaleNotes = computed(() => {
    const key = this.key();
    const noteSet = new Set<string>();
    for (const shape of this.caged()) {
      for (const gs of shape.guitarStrings) {
        for (const note of gs.notes) {
          if (note) noteSet.add(note);
        }
      }
    }
    return Array.from(noteSet)
      .map(note => ({ note, distance: this.transposition.semitoneDistance(key, note) }))
      .sort((a, b) => a.distance - b.distance)
      .map(({ note, distance }) => ({ note, interval: INTERVAL_NAMES[distance] ?? '?' }));
  });
}
