import { Injectable } from '@angular/core';
import { Observable, of, throwError, timer } from 'rxjs';
import { delay, mergeMap, tap } from 'rxjs/operators';
import { AuthService } from '../shared/services/auth/auth.service';
import { LoginResponse } from './login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private authService: AuthService,

  ) { }

  logar(email: string, password: string): Observable<LoginResponse> {
    if(email === 'email@email.com' && password === '123') {
      return of({
        usuario: {
          nome: 'Vini',
          sobrenome: 'Ad',
          email: 'email@email.com',
        },
        token: 'tok&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&n',
      })
      .pipe(
      delay(3000),
      tap(response => {
        this.authService.setUsuario(response.usuario);
        this.authService.setToken(response.token);
      })
      );
    }

    return timer(3000).pipe(
      mergeMap(() => throwError('Usuário ou senha incorretos'))
      );
  }
  

}
