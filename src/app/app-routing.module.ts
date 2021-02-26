import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { EstaLogadoGuard } from './shared/guards/esta-logado/esta-logado.guard';
import { NaoLogadoGuard } from './shared/guards/nao-logado/nao-logado.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./area-logada/area-logada.module').then(m => m.AreaLogadaModule),
    canActivate: [EstaLogadoGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    canActivate: [NaoLogadoGuard],
  },
  {
    path: '**',
    component: NaoEncontradoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}