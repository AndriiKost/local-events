import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ISession } from '../model/event.model';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  searchTerm: string;
  foundSessions: ISession[];

  constructor(
    public auth: AuthService,
    private eventService: EventService
  ) { }
  searchSession(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => this.foundSessions = sessions);
  }

}
