import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OxigenacionService {
  private apiUrl = 'https://api.ejemplo.com/datos'; // Cambia por la URL real de tu API
  
  constructor(private http: HttpClient) {}

  getDatos(): Observable<{ nombre: string, Oxigenacion: number }> {
    return this.http.get<{ nombre: string, Oxigenacion: number }>(this.apiUrl);
  }
}
