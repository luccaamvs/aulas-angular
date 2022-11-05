import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Regiao } from '../model/regiao';

@Injectable({
  providedIn: 'root'
})
export class RegiaoService {

  constructor(private http: HttpClient) { }

  obterEndereco(cep: string): Observable<Regiao> {
    return this.http.get<Regiao>(`https://worldtimeapi.org/api/timezone/${regiao}`);
  }
}
