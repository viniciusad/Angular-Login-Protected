import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss'],
})
export class ExercicioDataBindingComponent implements OnInit {
  @Input() 'word': string;
  @Input() 'color': string;
  @Output() 'clicado' = new EventEmitter();

  imageURL = 'https://picsum.photos/500/300';
  initialValue = 'Valor Inicial';
  isDisabled = true;
  accessibilityText = 'Texto acessível';
  valorContador = 10;

  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
      console.log('isDisabled: ', this.isDisabled);
    }, 5000);
  }

  ngOnInit(): void {}

  getImageURL() {
    return this.imageURL;
  }

  onClickBotaoEmissor($event: any) {
    console.log('Devo emitir informações para o componente pai.');
    this.clicado.emit($event);
  }

  /*onValorAtualizadoNoContador(novoValor: any) {
    this.valorContador = novoValor;
    console.log('onValorAtualizadoNoContador', novoValor);
  }*/
}
