import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apipUrl: string = "https://restcountries.eu/rest/v2"
  private params: HttpParams = new HttpParams()
    .set('fields', 'name;capital;alpha2Code;flag;population');

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apipUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, { params: this.params });
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apipUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, { params: this.params });
  }

  getPaisPorAlpha(id: string): Observable<Country> {
    const url = `${this.apipUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  buscarRegion(region: string): Observable<Country[]> {
    const url = `${this.apipUrl}/region/${region}`;
    return this.http.get<Country[]>(url, { params: this.params });
  }
}
