import { Tarefa } from "./Tarefa";

export class GestorTarefas {
  private tarefas: Tarefa[] = [];

  adicionarTarefa(tarefa: Tarefa): void {
    this.tarefas.push(tarefa);
  }

  atualizarStatus(id: number, novoStatus: string): void {
    const tarefa = this.tarefas.find((t) => t.id === id);
    if (!tarefa) {
      console.log(`Erro: Tarefa com ID ${id} não encontrada.`);
      return;
    }
    tarefa.status = novoStatus;
    console.log(`Sucesso: Status da tarefa "${tarefa.descricao}" atualizado para "${novoStatus}".`);
  }

  consultarTarefasPorProjeto(projeto: string): Tarefa[] {
    return this.tarefas.filter((t) => t.projeto === projeto);
  }
}