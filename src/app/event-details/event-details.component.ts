import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '../model/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy = 'all';
  sortBy = 'votes';

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    console.log(this.route.data);
    // Routing using Observable
    this.route.data.forEach((data) => {
        console.log(data);
        this.event = data['event'];
        this.addMode = false;
      });
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.saveEvent(this.event).subscribe();
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }
}
