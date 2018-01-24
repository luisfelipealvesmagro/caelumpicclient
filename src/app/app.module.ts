import 'rxjs/add/operator/map'
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { rotas } from './app.routes';

import { AppComponent } from './components/app/app.component';
import { FotoModule } from './components/foto/foto.module';
import { CardModule } from './components/card/card.module';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ListagemComponent } from './pages/listagem/listagem.component';
import { NaoEncontradaComponent } from './pages/nao-encontrada/nao-encontrada.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FotoService } from './services/FotoService'

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListagemComponent,
    NaoEncontradaComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FotoModule,
    CardModule,
    rotas,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FotoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
