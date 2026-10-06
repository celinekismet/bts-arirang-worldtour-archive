import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { EventDto } from "../models/event.model";

@Injectable({
  providedIn: 'root',
})
export class EventService {
    private readonly apiUrl = `${ environment.apiUrl }/events`

    constructor(private http: HttpClient ){}

    create(body?: any): Observable<EventDto> {
        return this.http.post<EventDto>(this.apiUrl, body);
    }

    getAll(): Observable<EventDto[]> {
    return this.http.get<EventDto[]>(this.apiUrl);
    }

    getOne(id: number): Observable<EventDto> {
    return this.http.get<EventDto>(`${this.apiUrl}/${id}`);
    }
}