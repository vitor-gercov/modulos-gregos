import { Injectable, signal, computed, inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MetronomeService implements OnDestroy {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly bpm = signal(120);
  readonly isPlaying = signal(false);
  readonly currentBeat = signal(-1);
  readonly beatsPerMeasure = signal(4);

  readonly bpmLabel = computed(() => `${this.bpm()} BPM`);

  private audioContext: AudioContext | null = null;
  private nextBeatTime = 0;
  private currentBeatIndex = 0;
  private timerHandle: ReturnType<typeof setTimeout> | null = null;
  private readonly scheduleAheadTime = 0.1;
  private readonly lookahead = 25;

  private tapTimes: number[] = [];

  private getAudioContext(): AudioContext | null {
    if (!this.isBrowser) return null;
    if (!this.audioContext) {
      this.audioContext = new AudioContext();
    }
    return this.audioContext;
  }

  private scheduleClick(time: number, isFirstBeat: boolean): void {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.frequency.value = isFirstBeat ? 1000 : 600;
    gain.gain.setValueAtTime(isFirstBeat ? 0.9 : 0.6, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.06);

    osc.start(time);
    osc.stop(time + 0.06);
  }

  private scheduler(): void {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    while (this.nextBeatTime < ctx.currentTime + this.scheduleAheadTime) {
      const beatIndex = this.currentBeatIndex;
      const isFirstBeat = beatIndex === 0;
      this.scheduleClick(this.nextBeatTime, isFirstBeat);

      const delay = Math.max(0, (this.nextBeatTime - ctx.currentTime) * 1000);
      setTimeout(() => {
        if (this.isPlaying()) {
          this.currentBeat.set(beatIndex);
        }
      }, delay);

      const secondsPerBeat = 60.0 / this.bpm();
      this.nextBeatTime += secondsPerBeat;
      this.currentBeatIndex = (this.currentBeatIndex + 1) % this.beatsPerMeasure();
    }

    this.timerHandle = setTimeout(() => this.scheduler(), this.lookahead);
  }

  start(): void {
    if (!this.isBrowser) return;

    const ctx = this.getAudioContext();
    if (!ctx) return;

    if (ctx.state === 'suspended') {
      void ctx.resume();
    }

    this.currentBeatIndex = 0;
    this.nextBeatTime = ctx.currentTime;
    this.isPlaying.set(true);
    this.scheduler();
  }

  stop(): void {
    this.isPlaying.set(false);
    this.currentBeat.set(-1);
    if (this.timerHandle !== null) {
      clearTimeout(this.timerHandle);
      this.timerHandle = null;
    }
  }

  toggle(): void {
    if (this.isPlaying()) {
      this.stop();
    } else {
      this.start();
    }
  }

  setBpm(value: number): void {
    this.bpm.set(Math.min(240, Math.max(20, value)));
  }

  incrementBpm(amount = 1): void {
    this.setBpm(this.bpm() + amount);
  }

  decrementBpm(amount = 1): void {
    this.setBpm(this.bpm() - amount);
  }

  setBeatsPerMeasure(beats: number): void {
    this.beatsPerMeasure.set(beats);
    if (this.currentBeatIndex >= beats) {
      this.currentBeatIndex = 0;
    }
  }

  tap(): void {
    const now = Date.now();

    if (this.tapTimes.length > 0 && now - this.tapTimes[this.tapTimes.length - 1] > 2000) {
      this.tapTimes = [];
    }

    this.tapTimes.push(now);

    if (this.tapTimes.length > 5) {
      this.tapTimes.shift();
    }

    if (this.tapTimes.length >= 2) {
      const intervals: number[] = [];
      for (let i = 1; i < this.tapTimes.length; i++) {
        intervals.push(this.tapTimes[i] - this.tapTimes[i - 1]);
      }
      const avgInterval = intervals.reduce((a, b) => a + b, 0) / intervals.length;
      this.setBpm(Math.round(60000 / avgInterval));
    }
  }

  ngOnDestroy(): void {
    this.stop();
    if (this.audioContext) {
      void this.audioContext.close();
    }
  }
}
