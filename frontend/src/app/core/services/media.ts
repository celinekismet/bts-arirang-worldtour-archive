import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { MediaDto } from "../models/media.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class Media {

    private readonly apiUrl = `${ environment.apiUrl }/media`

    constructor(private http: HttpClient ){}

    create(body?: any): Observable<MediaDto> {
        return this.http.post<MediaDto>(this.apiUrl, body);
    }

    getAll(): Observable<MediaDto[]> {
        return this.http.get<MediaDto[]>(this.apiUrl);
    }

    getOne(id: number): Observable<MediaDto> {
        return this.http.get<MediaDto>(`${this.apiUrl}/${id}`);
    }
}
