import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-event-binding',
  templateUrl: './exercicio-event-binding.component.html',
  styleUrls: ['./exercicio-event-binding.component.scss'],
})
export class ExercicioEventBindingComponent implements OnInit {
  valorAtual: string = '';
  valorSalvo = '';
  isMouseOver: boolean = false;

  botaoClicado() {
    alert('Botão Clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() {}

  ngOnInit(): void {}
}
