import { Component, Input } from '@angular/core';
import { SHARED_MODULES } from '../../shared/shared-modules';
import { EventDto } from '../../core/models/event.model';
import { Router } from '@angular/router';

@Component({
  imports: [...SHARED_MODULES],
  selector: 'app-timeline',
  styleUrl: './timeline.css',
  templateUrl: './timeline.html',
})
export class Timeline {
  @Input() public events: EventDto[] = [];

  constructor(private router: Router) {}

  public goToEvent(event: EventDto): void {
    if (!this.isPastEvent(event)) {
      return;
    }

    this.router.navigate(['/event', event.eventId]);
  }

  public isPastEvent(event: EventDto): boolean {
    return new Date(event.date) < new Date();
  }
}
