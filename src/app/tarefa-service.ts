import { Injectable } from '@angular/core';

// Interface para definir o formato dos objetos da Tarefa.
export interface Tarefa {
  id: number;
  tarefa: string;
  responsavel: string;
  data?: string;
  materia?: string;
  concluida?: boolean;
}

// CLasse injetável (cria uma única instância do service para a toda aplicação).
@Injectable({ providedIn: 'root' })
export class TarefaService { // Definição do service (permite importar para outros arquivos).
  private itens: Tarefa[] = []; //Array responsável pelo armazenamento dos objetos de Tarefa.

  // Retorna todas as tarefas.
  listar(): Tarefa[] {
    return this.itens;
  }

  // Método para adicionar nova tarefa. 
  adicionar(nova: Tarefa) {
    nova.id = Date.now(); //Gera um id único.
    this.itens.push(nova); //Faz o push para o array.
  }

  //Método para remover uma tarefa através do id.
  remover(id: number) {
    this.itens = this.itens.filter(t => t.id !== id);
  }

  //Método para marcar a tarefa como concluida. Caso o id bater, retorna objeto como concluído
  marcarConcluida(id: number) {
    this.itens = this.itens.map(t =>
      t.id === id ? { ...t, concluida: !t.concluida } : t
    );
  }
}

