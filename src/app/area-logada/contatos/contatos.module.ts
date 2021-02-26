import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatosRoutingModule } from './contatos-routing.module';
import { ContatosComponent } from './listar-contatos/listar-contatos.component';
import { DetalhesContatoComponent } from './detalhes-contato/detalhes-contato.component';


@NgModule({
  declarations: [
    DetalhesContatoComponent,
    ContatosComponent,
  ],
  imports: [
    CommonModule,
    ContatosRoutingModule,
  ]
})
export class ContatosModule { }
