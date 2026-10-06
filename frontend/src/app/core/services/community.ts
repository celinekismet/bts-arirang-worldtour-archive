import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { CommunityDto } from "../models/community.model";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root',
})
export class CommunityService {

    private readonly apiUrl = `${ environment.apiUrl }/communities`

    constructor(private http: HttpClient ){}

    create(body?: any): Observable<CommunityDto> {
        return this.http.post<CommunityDto>(this.apiUrl, body);
    }

    getAll(): Observable<CommunityDto[]> {
        return this.http.get<CommunityDto[]>(this.apiUrl);
    }

    getOne(id: number): Observable<CommunityDto> {
        return this.http.get<CommunityDto>(`${this.apiUrl}/${id}`);
    }
}
