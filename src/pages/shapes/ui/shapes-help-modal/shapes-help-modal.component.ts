import { Component, computed, signal } from '@angular/core';
import { HelpModalComponent } from 'shared/ui/help-modal/help-modal.component';

const ALL_NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'] as const;
type Note = typeof ALL_NOTES[number];

// Strings in tablature order (1st/high → 6th/low)
const GUITAR_STRINGS = [
  { number: '1ª', label: 'e', startNote: 4 },  // E4
  { number: '2ª', label: 'B', startNote: 11 }, // B3
  { number: '3ª', label: 'G', startNote: 7 },  // G3
  { number: '4ª', label: 'D', startNote: 2 },  // D3
  { number: '5ª', label: 'A', startNote: 9 },  // A2
  { number: '6ª', label: 'E', startNote: 4 },  // E2
] as const;

@Component({
  selector: 'app-shapes-help-modal',
  imports: [HelpModalComponent],
  templateUrl: './shapes-help-modal.component.html',
  styleUrl: './shapes-help-modal.component.css'
})
export class ShapesHelpModalComponent {
  readonly dominantHand = signal<'right_handed' | 'left_handed'>('right_handed');

  // Open strings from 6th (thickest) to 1st (thinnest) for natural reading order
  readonly openStrings = [...GUITAR_STRINGS].reverse().map(s => ({
    number: s.number,
    label: s.label,
    note: ALL_NOTES[s.startNote] as Note,
  }));

  readonly fretboard = computed(() => {
    const isLeft = this.dominantHand() === 'left_handed';
    return GUITAR_STRINGS.map(s => {
      const frets = Array.from({ length: 13 }, (_, fret) =>
        ALL_NOTES[(s.startNote + fret) % 12] as Note
      );
      return {
        number: s.number,
        label: s.label,
        frets: isLeft ? [...frets].reverse() : frets,
      };
    });
  });

  readonly fretLabels = computed<number[]>(() => {
    const labels = Array.from({ length: 13 }, (_, i) => i);
    return this.dominantHand() === 'left_handed' ? [...labels].reverse() : labels;
  });

  isNatural(note: Note): boolean {
    return !note.includes('#');
  }
}
