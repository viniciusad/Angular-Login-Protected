import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Contato } from './contatos.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {


  API_URL = environment.API_URL;
  httpOptions = {
    headers: new HttpHeaders ({
      Authorization: '..... TOKEN DE AUTENTICAÇÃO ......'
    })
  };

  constructor(
    private https: HttpClient,
  ) { }

  getContatos() {
    return this.https.get<Contato[]>(this.API_URL + '/contatos');
  }

  getContato(id: string) {
    return this.https.get<Contato>(this.API_URL + '/contatos/' + id, this.httpOptions);
  }

  createContato(contato: Contato) {
    const headers = new HttpHeaders()
    return this.https.post<Contato[]>(this.API_URL + '/contatos', contato, this.httpOptions);
  }

  updateContato(id: string, contato: Contato) {
    return this.https.put<Contato[]>(this.API_URL + '/contatos' + id, contato, this.httpOptions);
  }

  deleteContato(id: string) {
    return this.https.delete<Contato>(this.API_URL + '/contatos/' + id, this.httpOptions);
  }

}
