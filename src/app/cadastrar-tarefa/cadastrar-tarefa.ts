import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TarefaService, Tarefa } from '../tarefa-service';

@Component({
  selector: 'app-cadastrar-tarefa',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastrar-tarefa.html',
  styleUrls: ['./cadastrar-tarefa.css']
})
export class CadastrarTarefa {
  // Guardam os valores digitados pelo usuário.
  tarefa = '';
  responsavel = '';
  data = '';
  materia = '';

  // Chama os serviços criados no Tarefa service
  constructor(private srv: TarefaService) {}

  // Método para salvar as respostas.
  salvar() {
    if (!this.tarefa.trim() || !this.responsavel.trim() || !this.data.trim()) return; // Valida se os campos obrigatórios foram preenchidos (caso não, o método não salva os dados).

    // Cria um novo objeto.
    const nova: Tarefa = {
      id: 0, //Id começa com valor temporário.
      tarefa: this.tarefa.trim(), //Valores digitados são preenchidos
      responsavel: this.responsavel.trim(), //Valores digitados são preenchidos
      data: this.data.trim(), //Valores digitados são preenchidos
      materia: this.materia.trim() || undefined, //Caso não seja escrito nada no campo "matéria", é salvo como undefined.
      concluida: false // Tarefa começa como não concluída.
    };

    // Chama o método adicionar do service para armazenar a tarefa na lista central.
    this.srv.adicionar(nova);

    //Após salvar os dados, os campos ficam limpos novamente.
    this.tarefa = '';
    this.responsavel = '';
    this.data = '';
    this.materia = '';
  }
}

