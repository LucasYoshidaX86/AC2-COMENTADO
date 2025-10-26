// Definindo rodas para aplicação.
import { Routes } from '@angular/router';
import { CadastrarTarefa } from './cadastrar-tarefa/cadastrar-tarefa';
import { ListaTarefas } from './lista-tarefas/lista-tarefas';

export const routes: Routes = [
  { path: '', redirectTo: 'cadastrar', pathMatch: 'full' },
  { path: 'cadastrar', component: CadastrarTarefa },
  { path: 'listar', component: ListaTarefas },
];


