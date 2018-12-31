import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../services/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../model/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: IEvent[];

  constructor(
    private toastr: ToastrService,
    private router: ActivatedRoute
    ) { }

  ngOnInit() {
    this.events = this.router.snapshot.data['events'];
  }

  handleThumbnailClick(eventName) {
    this.toastr.successMessage(eventName);
  }

}
