import { Tarefa } from "./Tarefa";
import { GestorTarefas } from "./GestorTarefas";

const gestor = new GestorTarefas();

// Adicionando tarefas
gestor.adicionarTarefa(new Tarefa(1, "Configurar banco", "Pendente", "Web"));
gestor.adicionarTarefa(new Tarefa(2, "Criar API", "Em Andamento", "Web"));
gestor.adicionarTarefa(new Tarefa(3, "Design UI", "Pendente", "App"));

// Atualizando status
gestor.atualizarStatus(1, "Concluída");

// Consultando
const tarefasWeb = gestor.consultarTarefasPorProjeto("Web");
console.log("Tarefas do projeto Web:", tarefasWeb);