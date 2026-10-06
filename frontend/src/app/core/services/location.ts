import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { LocationDto } from "../models/location.model";

@Injectable({
    providedIn: 'root',
})
export class LocationService {

    private readonly apiUrl = `${ environment.apiUrl }/locations`

    constructor(private http: HttpClient) {}

    create(body?: any): Observable<LocationDto> {
        return this.http.post<LocationDto>(this.apiUrl, body);
    }

    getAll():Observable<LocationDto[]> {
        return this.http.get<LocationDto[]>(this.apiUrl);
    }

    getOne(id: number): Observable<LocationDto> {
        return this.http.get<LocationDto>(`${this.apiUrl}/${id}`);
    }
}
