import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CadastroViagemComponent } from './cadastro-viagem/cadastro-viagem.component';
import { DetalhesViagemComponent } from './detalhes-viagem/detalhes-viagem.component';
import { ListagemViagemComponent } from './listagem-viagem/listagem-viagem.component';
import { ExclusaoViagemComponent } from './exclusao-viagem/exclusao-viagem.component';

const routes: Routes = [
  {path: 'cadastro-viagem', component:CadastroViagemComponent},
  {path: 'detalhes-viagem/:id', component:DetalhesViagemComponent},
  {path: '', component:ListagemViagemComponent},
  {path: 'exclusao-viagem/:id', component:ExclusaoViagemComponent}
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
