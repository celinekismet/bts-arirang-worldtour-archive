import { Component } from '@angular/core';
import { SHARED_MODULES } from '../../shared/shared-modules';
import { EventDto } from '../../core/models/event.model';
import { EventService } from '../../core/services/event';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [...SHARED_MODULES],
  selector: 'app-event-detail',
  styleUrl: './event-detail.css',
  templateUrl: './event-detail.html',
})
export class EventDetail {

  public event: EventDto[] = [];

  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    const eventId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if (eventId) {
      this.getEventById(eventId);
    }
  }
  
  public getEventById(id: number): void {
    this.eventService.getOne(id).subscribe((event: EventDto) => {
      this.event = [event];
    });
  }
}
