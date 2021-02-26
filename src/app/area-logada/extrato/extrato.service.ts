import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Transacao } from './extrato.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ExtratoService {

  API_URL = environment.API_URL;

  constructor(private https: HttpClient) {}

  getTransacoes(page: number) {
    return this.https.get<Transacao[]>(this.API_URL + '/transacoes', {
      params: {
        _page: String(page),
      }
    });
  }
}
