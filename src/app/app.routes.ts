import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotfounderrorComponent } from './notfounderror/notfounderror.component';
import { FonctionnalitesComponent } from './fonctionnalites/fonctionnalites.component';
import { CommencerComponent } from './commencer/commencer.component';
import { ImplementationComponent } from './implementation/implementation.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'fonctions', component: FonctionnalitesComponent },
    { path: 'implementation', component: ImplementationComponent },
    { path: 'commencer', component: CommencerComponent },
    { path: 'contact', component: ContactComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: NotfounderrorComponent },
];
