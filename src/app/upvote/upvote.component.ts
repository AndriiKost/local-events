import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent {

  @Input() count: number;
  @Input() set voted (val) { this.iconColor = val ? 'red' : 'white'; }
  @Output() vote = new EventEmitter();
  iconColor: string;

  constructor() { }

  onClick() {
    this.vote.emit({});
  }

}
