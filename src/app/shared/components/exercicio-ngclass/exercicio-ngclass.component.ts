import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-exercicio-ngclass',
  templateUrl: './exercicio-ngclass.component.html',
  styleUrls: ['./exercicio-ngclass.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ExercicioNgclassComponent {
  testeCores = false;

  tornarVerde() {
    this.testeCores = true;
  }

  tornarVermelho() {
    this.testeCores = false;
  }
}
