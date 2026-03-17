import { Component, inject, signal } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
import { HelpModalComponent } from 'app/components/core/ui/help-modal/help-modal.component';

@Component({
  selector: 'app-header',
  imports: [HelpModalComponent],
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
