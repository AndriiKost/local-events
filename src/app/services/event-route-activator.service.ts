import { Injectable } from '@angular/core';
import { EventService } from './event.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService {
  constructor(
    private eventService: EventService,
    private router: Router
    ) { }
  canActivate(route: ActivatedRouteSnapshot) {
    const eventExists = !!this.eventService.getEvent(+route.params['id']);
    if (!eventExists) {
      this.router.navigate(['/404']);
    } else {
      return eventExists;
    }
  }
}
