import { Routes } from '@angular/router';
import { ShapesComponent } from './components/pages/shapes/shapes.component';
import { CicleOfFourthsComponent } from './components/pages/cicle-of-fourths/cicle-of-fourths.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'caged',
        pathMatch: 'full'
    },
    {
        path: 'caged',
        component: ShapesComponent
    },
    {
        path: 'cicle-of-fourths',
        component: CicleOfFourthsComponent
    }
];
