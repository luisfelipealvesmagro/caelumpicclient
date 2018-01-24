import { Routes, RouterModule } from '@angular/router'
import { ListagemComponent } from './pages/listagem/listagem.component'
import { CadastroComponent } from './pages/cadastro/cadastro.component'
import { NaoEncontradaComponent } from './pages/nao-encontrada/nao-encontrada.component';

const routes : Routes = [
    {path: '', component: ListagemComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'cadastro/:id', component: CadastroComponent},
    {path: '**', component: NaoEncontradaComponent}
]

export const rotas = RouterModule.forRoot(routes)