import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NaoLogadoGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(): boolean {
    //console.log('Passou pela guarda de rota');
    const estaLogado = this.authService.estaLogado();

    if (!estaLogado) {
      return true;
    }
    this.router.navigate(['home']);
    return false;
  }
  
}
