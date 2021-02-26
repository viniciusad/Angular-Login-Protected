import '@angular/common/locales/global/pt';

import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';


registerLocaleData(localePt,'pt');

@NgModule({
  declarations: [
    AppComponent,
    NaoEncontradoComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    SharedModule, 
    HttpClientModule, 
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
