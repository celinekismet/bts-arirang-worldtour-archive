import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.prod";
import { HttpClient } from "@angular/common/http";
import { MemberDto } from "../models/member.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class Member {

    private readonly apiUrl = `${ environment.apiUrl }/members`
    
    constructor(private http: HttpClient ){}

    create(body?: any): Observable<MemberDto> {
        return this.http.post<MemberDto>(this.apiUrl, body);
    }

    getAll(): Observable<MemberDto[]> {
        return this.http.get<MemberDto[]>(this.apiUrl);
    }

    getOne(id: number): Observable<MemberDto> {
        return this.http.get<MemberDto>(`${this.apiUrl}/${id}`);
    }
}
