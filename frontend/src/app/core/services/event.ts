import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class EventService {
    private readonly apiUrl = `${ environment.apiUrl }/events`

    constructor(private http: HttpClient ){}

    getAll(): Observable<Event[]>{
        return this.http.get<Event[]>(this.apiUrl)
    }

    getOne(id: number): Observable<Event> {
        return this.http.get<Event>(`${ this.apiUrl}/${id}`)
    }
}