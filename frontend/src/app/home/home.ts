import { Component } from '@angular/core';
import { EventService } from '../core/services/event';
import { Event } from '../components/event/event';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  events: Event[] = [];

  constructor(private eventService: EventService) {}

  public ngOnInit(): void {
    this.eventService.getAll().subscribe({
      next: (data) => {
        this.events = data;
        console.log('event reçu: ', data);
      },
      error: (err) => console.error('erreur api: ', err),
    })
  }
}
