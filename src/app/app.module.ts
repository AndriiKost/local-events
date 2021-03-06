import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { EventListComponent } from './event-list/event-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EventService } from './services/event.service';
import { TOASTR_TOKEN, Toastr } from './shared/toastr.service';
import { EventDetailsComponent } from './event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './routes/routes';
import { CreateEventComponent } from './create-event/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventListResolverService } from './services/event-list-resolver.service';
import { AuthService } from './services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './create-session/create-session.component';
import { SessionListComponent } from './session-list/session-list.component';
import { CollapsibleComponent } from './shared/collapsible/collapsible.component';
import { DurationPipe } from './pipes/duration.pipe';
import { JQ_TOKEN } from './shared/jquery.service';
import { SimpleModalComponent } from './shared/simple-modal/simple-modal.component';
import { ModalTriggerDirective } from './shared/modal-trigger.directive';
import { UpvoteComponent } from './upvote/upvote.component';
import { LocationValidator } from './shared/location-validator.directive';
import { HttpClientModule } from '@angular/common/http';
import { EventResolver } from './services/event-resolver.service';

const toastr: Toastr = window['toastr'];
const jQuery = window['$'];

@NgModule({
  declarations: [
    AppComponent,
    EventThumbnailComponent,
    EventListComponent,
    NavigationComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    EventService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    },
    EventListResolverService,
    AuthService,
    EventResolver
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
