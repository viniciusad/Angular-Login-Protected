import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercicioContadorComponent } from './components/exercicio-contador/exercicio-contador.component';
import { ExercicioDataBindingComponent } from './components/exercicio-data-binding/exercicio-data-binding.component';
import { ExercicioDiretivasComponent } from './components/exercicio-diretivas/exercicio-diretivas.component';
import { ExercicioEventBindingComponent } from './components/exercicio-event-binding/exercicio-event-binding.component';
import { ExercicioNgclassComponent } from './components/exercicio-ngclass/exercicio-ngclass.component';
import { ExercicioPipesComponent } from './components/exercicio-pipes/exercicio-pipes.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ExercicioDataBindingComponent,
    ExercicioEventBindingComponent,
    ExercicioContadorComponent,
    ExercicioDiretivasComponent,
    ExercicioNgclassComponent,
    ExercicioPipesComponent,
  ],
  imports: [CommonModule,
    RouterModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    ExercicioDataBindingComponent,
    ExercicioEventBindingComponent,
    ExercicioContadorComponent,
    ExercicioDiretivasComponent,
    ExercicioNgclassComponent,
    ExercicioPipesComponent,
  ],
})
export class SharedModule {}
