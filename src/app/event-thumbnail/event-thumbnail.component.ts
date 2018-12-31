import { Component, OnInit, Input, Output } from '@angular/core';
import { IEvent } from '../model/event.model';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: IEvent;

  constructor() { }

  ngOnInit() {
  }

  getTimeClass() {
    if (this.event && this.event.time === '8:00 am') {
      return ['bold', 'green'];
    }
    return [];
  }

}
