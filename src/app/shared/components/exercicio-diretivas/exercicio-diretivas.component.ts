import { Component } from '@angular/core';

import { MEMES_AGRUPADOS_POR_CATEGORIA } from './exercicio-diretivas.constants';

  @Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss'],
})
export class ExercicioDiretivasComponent {
  listaFrutas = ['Maçã', 'Laranja', 'Mamão', 'Pera'];

  listaCarros = [
    {
      placa: 'jhj-1212',
      cor: 'Preto',
    },
    {
      placa: 'ksd-3345',
      cor: 'Branco',
    },
    {
      placa: 'has-3467',
      cor: 'Vermelho',
    },
    {
      placa: 'hvp-9874',
      cor: 'Amarelo',
    },
  ];

  deveExibir = false;

  trocaValor() {
    this.deveExibir = !this.deveExibir;
  }

  soma(numero1, numero2) {
    return numero1 + numero2;
  }

  MEMES_AGRUPADOS_POR_CATEGORIA = MEMES_AGRUPADOS_POR_CATEGORIA;
  
}
