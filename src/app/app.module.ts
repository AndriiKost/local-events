import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { EventListComponent } from './event-list/event-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EventService } from './services/event.service';
import { ToastrService } from './services/toastr.service';
import { EventDetailsComponent } from './event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './routes/routes';
import { CreateEventComponent } from './create-event/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivatorService } from './services/event-route-activator.service';
import { EventListResolverService } from './services/event-list-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    EventThumbnailComponent,
    EventListComponent,
    NavigationComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivatorService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    EventListResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, would you like to cancel?');
  } else {
    return true;
  }
}
