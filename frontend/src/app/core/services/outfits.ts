import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { OutfitsDto } from "../models/outfit.model";

@Injectable({
  providedIn: 'root',
})
export class OutfitsService {

    private readonly apiUrl = `${ environment.apiUrl }/outfits`

    constructor(private http: HttpClient ){}

    create(body?: any): Observable<OutfitsDto> {
        return this.http.post<OutfitsDto>(this.apiUrl, body);
    }

    getAll(): Observable<OutfitsDto[]> {
        return this.http.get<OutfitsDto[]>(this.apiUrl);
    }

    getOne(id: number): Observable<OutfitsDto> {
        return this.http.get<OutfitsDto>(`${this.apiUrl}/${id}`);
    }
}
