import { Routes } from '@angular/router';
import { ShapesComponent } from 'pages/shapes/ui/shapes.component';

export const routes: Routes = [
    {
        path: '',
        component: ShapesComponent
    },
    {
        path: 'metronomo',
        loadComponent: () =>
            import('pages/metronome/ui/metronome-page.component').then(m => m.MetronomePageComponent)
    }
];
