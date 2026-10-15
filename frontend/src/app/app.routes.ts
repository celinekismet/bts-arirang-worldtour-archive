import { Routes } from '@angular/router';
import { Event } from './components/event/event';
import { Timeline } from './components/timeline/timeline';
import { CommunityPage } from './pages/community-page/community-page';
import { GalleryPage } from './pages/gallery-page/gallery-page';
import { Home } from './pages/home/home';
import { EventDetail } from './pages/event-detail/event-detail';

export const routes: Routes = [
    { 
        path: '',
        component: Home
    },
    {    
        path: 'event',
        component: Event
    },
    {
        path: 'event/:id',
        component: EventDetail
    },
    {
        path: 'timeline',
        component: Timeline
    },
    {
        path: 'gallery',
        component: GalleryPage
    },
    {
        path: 'community',
        component: CommunityPage
    },
    {
        path: '**',
        redirectTo: ''
    }
];
