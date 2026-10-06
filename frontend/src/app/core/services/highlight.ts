import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HighlightDto } from "../models/highlight.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class HighlightService {
    private readonly apiUrl = `${ environment.apiUrl }/highlights`

    constructor(private http: HttpClient) {}

    create(body?: any): Observable<HighlightDto> {
        return this.http.post<HighlightDto>(this.apiUrl, body);
    }

    getAll(): Observable<HighlightDto[]> {
        return this.http.get<HighlightDto[]>(this.apiUrl);
    }

    getOne(id: number): Observable<HighlightDto> {
        return this.http.get<HighlightDto>(`${this.apiUrl}/${id}`);
    }
}
