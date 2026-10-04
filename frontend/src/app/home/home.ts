import { Component, inject, OnInit } from '@angular/core';
import { EventService } from '../core/services/event';
import { TranslateService } from '@ngx-translate/core';
import { SHARED_MODULES } from '../shared/shared-modules';
import { EventDto } from '../core/models/event.model';


@Component({
  imports: [...SHARED_MODULES],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home implements OnInit {
  public events: Event[] = [];
  private translate = inject(TranslateService);
  private eventService = inject(EventService);  

  constructor() {}

    ngOnInit(): void {
    this.eventService.getAll().subscribe({
      next: (data) => {
        this.events = data.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
      },
      error: (err) => console.error('Erreur API :', err),
    });
  }

  get heroEvent(): Event | undefined {
    return this.events[0];
  }

  get otherEvents(): Event[] {
    return this.events.slice(1, 4);
  }
}
