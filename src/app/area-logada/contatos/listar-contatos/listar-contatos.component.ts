import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize , take } from 'rxjs/operators';
import { Contato } from '../contatos.interfaces';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './listar-contatos.component.html',
  styleUrls: ['./listar-contatos.component.scss']
})
export class ContatosComponent implements OnInit {

  contatos: Contato[] = [];
  erroCarregamento: boolean = false;
  estaCarregando: boolean = false;


  constructor(
    private contatosService: ContatosService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.carregarContatos();
  }

  carregarContatos() {
    this.estaCarregando = true;
    this.erroCarregamento = false;

    this.contatosService.getContatos() 
    .pipe(
      take(1),
      finalize(() => this.estaCarregando = false)
    )
    .subscribe(
      response => this.onSuccess(response),
      error => this.onError(error)
    );
  }

  onSuccess(response: any) {
    this.contatos = response;
  }

  onError(error: any) {
    this.erroCarregamento = true;
    console.error(error);
  }

  irParaDetalhes(idContato: any) {
    this.router.navigate(['contatos/' + idContato]);
  }

  deletarContato(idContato) {
    this.contatosService.deleteContato(idContato)
    .subscribe (
      response => this.onSuccessDeletarContato(),
      error => this.onErrorDeletarContato(),
    );
  }

  onSuccessDeletarContato() {
    console.log('Contato deletado')
    //faço algo
  }

  onErrorDeletarContato() {
    console.log('Erro ao deletar')

    //faço algo
  }

}
