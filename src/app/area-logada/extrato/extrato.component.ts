import { Pipe, PipeTransform } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Transacao } from './extrato.interfaces';
import { ExtratoService } from './extrato.service';
import { take, finalize } from 'rxjs/operators';


@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {

  estaCarregando!: boolean;
  erroCarregamento!: boolean;
  
  transacoes!: Transacao[];
  pagina = 1;
  
  constructor(
    private extratoService: ExtratoService
    ) { }

  ngOnInit() {
    this.carregarExtrato();
  }

  onSuccess(response: Transacao[]) {
    this.transacoes = response;
  }

  onError(error: any) {
    this.erroCarregamento = true;
    console.log(error);
  }

  carregarExtrato() {
    this.estaCarregando = true;
    this.erroCarregamento = false;


    this.extratoService.getTransacoes(this.pagina)
    .pipe(
      take(1),
      finalize(() => this.estaCarregando = false)
    )
      .subscribe(
        response => this.onSuccess(response),
        error => this.onError(error),
      );
    }

  paginaAnterior() {
    this.pagina = this.pagina - 1;
    this.carregarExtrato();
  }

  paginaSeguinte() {
    this.pagina = this.pagina + 1;
    this.carregarExtrato();
  }

}
