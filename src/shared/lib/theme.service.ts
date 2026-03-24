import { Injectable, PLATFORM_ID, effect, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly theme = signal<Theme>(this.getInitialTheme());

  constructor() {
    if (this.isBrowser) {
      effect(() => {
        const theme = this.theme();
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.style.backgroundColor =
          theme === 'dark' ? '#1c1c1c' : '#f5f5f5';
        localStorage.setItem(STORAGE_KEY, theme);
      });
    }
  }

  toggle(): void {
    this.theme.update(current => (current === 'light' ? 'dark' : 'light'));
  }

  private getInitialTheme(): Theme {
    if (!this.isBrowser) return 'dark';
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}
