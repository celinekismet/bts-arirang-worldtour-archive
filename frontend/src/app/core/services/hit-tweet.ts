import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.prod";
import { HttpClient } from "@angular/common/http";
import { HitTweetDto } from "../models/hitTweet.model";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root',
})
export class HitTweet {
    private readonly apiUrl = `${ environment.apiUrl }/hit-tweets`

    constructor(private http: HttpClient ){}

    create(body?: any): Observable<HitTweetDto> {
        return this.http.post<HitTweetDto>(this.apiUrl, body);
    }

    getAll(): Observable<HitTweetDto[]> {
        return this.http.get<HitTweetDto[]>(this.apiUrl);
    }

    getOne(id: number): Observable<HitTweetDto> {
        return this.http.get<HitTweetDto>(`${this.apiUrl}/${id}`);
    }
}
