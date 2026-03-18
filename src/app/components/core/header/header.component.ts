import { Component, inject, signal } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
import { NotesHelpModalComponent } from './notes-help-modal/notes-help-modal.component';

@Component({
  selector: 'app-header',
  imports: [NotesHelpModalComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  protected readonly themeService = inject(ThemeService);
  navbarOptions = signal([
    {
      label: 'Shapes',
      path: '/caged'
    }
  ]);
}
