import { Component, computed, signal } from '@angular/core';
import { HelpModalComponent } from 'shared/ui/help-modal/help-modal.component';

const INTERVAL_SYMBOLS = ['T', '2m', '2M', '3m', '3M', '4J', 'TT', '5J', '6m', '6M', '7m', '7M'] as const;
type IntervalSymbol = typeof INTERVAL_SYMBOLS[number];

// Strings in display order (high → low), offset in semitones from low E (6th string tonic)
const GUITAR_STRINGS = [
  { label: 'e', offset: 0 }, // 1st string (E4)
  { label: 'B', offset: 7 }, // 2nd string (B3)
  { label: 'G', offset: 3 }, // 3rd string (G3)
  { label: 'D', offset: 10 }, // 4th string (D3)
  { label: 'A', offset: 5 }, // 5th string (A2)
  { label: 'E', offset: 0 }, // 6th string (E2) — tonic
] as const;

// 3NPS shapes: rows = strings (high → low), cols = fret positions
const MAJOR_SHAPE = [
  ['6M', '', '7M', 'T'],
  ['3M', '4J', '', '5J'],
  ['', 'T', '', '2M'],
];

const MINOR_SHAPE = [
  ['7m', '', 'T'],
  ['4J', '', '5J', '6m'],
  ['T', '', '2M', '3m'],
];

@Component({
  selector: 'app-scale-notes-help-modal',
  imports: [HelpModalComponent],
  templateUrl: './scale-notes-help-modal.component.html',
  styleUrl: './scale-notes-help-modal.component.css'
})
export class ScaleNotesHelpModalComponent {
  readonly intervalsList = [
    { symbol: 'T', name: 'Tônica', semitones: 0, example: 'C → C' },
    { symbol: '2m', name: 'Segunda menor', semitones: 1, example: 'C → Db' },
    { symbol: '2M', name: 'Segunda maior', semitones: 2, example: 'C → D' },
    { symbol: '3m', name: 'Terça menor', semitones: 3, example: 'C → Eb' },
    { symbol: '3M', name: 'Terça maior', semitones: 4, example: 'C → E' },
    { symbol: '4J', name: 'Quarta justa', semitones: 5, example: 'C → F' },
    { symbol: 'TT', name: 'Trítono', semitones: 6, example: 'C → F#' },
    { symbol: '5J', name: 'Quinta justa', semitones: 7, example: 'C → G' },
    { symbol: '6m', name: 'Sexta menor', semitones: 8, example: 'C → Ab' },
    { symbol: '6M', name: 'Sexta maior', semitones: 9, example: 'C → A' },
    { symbol: '7m', name: 'Sétima menor', semitones: 10, example: 'C → Bb' },
    { symbol: '7M', name: 'Sétima maior', semitones: 11, example: 'C → B' },
  ];

  readonly scaleIntervals = [
    { name: 'Maior', intervals: ['T', '2M', '3M', '4J', '5J', '6M', '7M'] },
    { name: 'Pentatônica', intervals: ['T', '2M', '3M', '5J', '6M'] },
    { name: 'Penta Blues', intervals: ['T', '3m', '4J', 'TT', '5J', '7m'] },
  ];

  readonly dominantHand = signal<'right_handed' | 'left_handed'>('right_handed');

  readonly scaleShapes = computed(() => {
    const isLeft = this.dominantHand() === 'left_handed';
    const flip = (rows: string[][]) => !isLeft ? rows : rows.map(r => [...r].reverse());
    return [
      { label: 'Maior', rows: flip(MAJOR_SHAPE) },
      { label: 'Menor', rows: flip(MINOR_SHAPE) },
    ];
  });

  readonly fretboard = computed(() => {
    const isLeft = this.dominantHand() === 'left_handed';
    return GUITAR_STRINGS.map(s => {
      const frets = Array.from({ length: 13 }, (_, fret) =>
        INTERVAL_SYMBOLS[(s.offset + fret) % 12] as IntervalSymbol
      );
      return { label: s.label, frets: isLeft ? [...frets].reverse() : frets };
    });
  });

  readonly fretLabels = computed<number[]>(() => {
    const labels = Array.from({ length: 13 }, (_, i) => i);
    return this.dominantHand() === 'left_handed' ? [...labels].reverse() : labels;
  });
}
