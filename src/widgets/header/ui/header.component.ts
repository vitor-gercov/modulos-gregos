import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from 'shared/lib/theme.service';
import { NotesHelpModalComponent } from './notes-help-modal/notes-help-modal.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NotesHelpModalComponent, NgOptimizedImage, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  protected readonly themeService = inject(ThemeService);

  readonly navItems = [
    { label: 'Shapes', path: '/' },
    { label: 'Metrônomo', path: '/metronomo' }
  ];
}
