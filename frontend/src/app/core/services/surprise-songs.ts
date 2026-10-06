import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { SurpriseSongDto } from '../models/surpriseSongs.model';

@Injectable({
    providedIn: 'root',
})
export class SurpriseSongsService {
    private readonly apiUrl = `${ environment.apiUrl}/surprise-song`;

    constructor(private http: HttpClient) {}

    public create(body?: any): Observable<SurpriseSongDto> {
        return this.http.post<SurpriseSongDto>(this.apiUrl, body);
    }

    public getAll(): Observable<SurpriseSongDto[]> {
        return this.http.get<SurpriseSongDto[]>(this.apiUrl);
    }

    public getOne(id: number): Observable<SurpriseSongDto> {
        return this.http.get<SurpriseSongDto>(`${this.apiUrl}/${id}`);
    }
}
