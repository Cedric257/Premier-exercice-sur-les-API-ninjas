import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://api.api-ninjas.com/v1/exercises?muscle=biceps';
  private apiKey = 'Km6zrgw2XCmVWFR5ytLgIQ==87WF8LvvFSwgNfIB'; 

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    const headers = new HttpHeaders({
      'x-api-key': this.apiKey, 
    });

    return this.http.get<any>(this.apiUrl, { headers });
  }
}