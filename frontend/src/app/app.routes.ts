import { Routes } from '@angular/router';
import { Event } from './components/event/event';
import { Home } from './home/home';

export const routes: Routes = [
    { 
        path: '',
        component: Home
    },
    {    
        path: 'event',
        component: Event
    }
];
