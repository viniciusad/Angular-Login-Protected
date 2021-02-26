import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('passwordlInput') passwordInput!: ElementRef;

  estaCarregando!: boolean;
  erroCarregamento!: boolean;
  email!: string;
  password!: string;

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form) {
    this.erroCarregamento = false;

    if(!form.valid) {
      form.controls.email.markAsTouched();
      form.controls.passsword.markAsTouched();

      if (form.controls.email.invalid) {
        this.emailInput.nativeElement.focus();
        return;
      }

      if (form.controls.password.invalid) {
        this.passwordInput.nativeElement.focus();
        return;
      }

      return;
    }
    this.login();
  }

  login() {
    this.estaCarregando = true;

    this.loginService.logar(this.email, this.password)
    .pipe(
      finalize(() => this.estaCarregando = false)
    )
    .subscribe(
      _response => this.onLoginSuccess(),   //Underline no início da variável indica ao VS Code que ela não é usada
        //console.log('Sucesso! Logou!');
      _error => this.onLoginError(),        //Underline no início da variável indica ao VS Code que ela não é usada
        //console.log('Deu ruim! Não logou!');
    )
  }

  onLoginSuccess() {
    this.router.navigate(['home']);
  }

  onLoginError() {
    this.erroCarregamento = true;
    this.password = '';
  }

  exibeErro(nomeControle: string, form: any) {
    if (!form.controls[nomeControle]) {
      return false;
    }
    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched;
  }

}
