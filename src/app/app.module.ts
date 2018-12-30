import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { EventListComponent } from './event-list/event-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EventService } from './services/event.service';

@NgModule({
  declarations: [
    AppComponent,
    EventThumbnailComponent,
    EventListComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
