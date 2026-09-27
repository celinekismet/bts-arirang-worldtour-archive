import { Component, inject } from '@angular/core';
import { EventService } from '../core/services/event';
import { Event } from '../components/event/event';
import { TranslateService } from '@ngx-translate/core';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  public events: Event[] = [];
  private translate = inject(TranslateService);
  private eventService = inject(EventService);  

  constructor() {}

  public ngOnInit(): void {
    this.translate.use('en');
    this.eventService.getAll().subscribe({
      next: (data) => {
        this.events = data;
        console.log('event reçu: ', data);
      },
      error: (err) => console.error('erreur api: ', err),
    })
  }
}
