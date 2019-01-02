import { Routes } from '@angular/router';
import { EventListComponent } from '../event-list/event-list.component';
import { EventDetailsComponent } from '../event-details/event-details.component';
import { CreateEventComponent } from '../create-event/create-event.component';
import { Error404Component } from '../errors/404.component';
import { EventListResolverService } from '../services/event-list-resolver.service';
import { CreateSessionComponent } from '../create-session/create-session.component';
import { EventResolver } from '../services/event-resolver.service';

export const ROUTES: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventListComponent , resolve: {events: EventListResolverService}},
  { path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolver} },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: 'src/app/user/user-module/user-module.module#UserModuleModule' }
];
