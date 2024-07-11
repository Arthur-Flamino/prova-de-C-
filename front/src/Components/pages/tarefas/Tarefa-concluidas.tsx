import { useEffect, useState } from "react";
import { Tarefa } from "../../../Models/Tarefas";


function ListarConcluidas(){
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);

    useEffect(() => {
        carregarConcluidas();
    }, []);

    function carregarConcluidas(){
        fetch("http://localhost:5000/tarefas/concluidas").then((resposta) => resposta.json())
                                                         .then((tarefas: Tarefa[]) =>{
                                                            console.table(tarefas);
                                                            setTarefas(tarefas);
                                                     });
    }

    return (
        <div>
            <h1>Listar Concluidas</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Descrição</th>
                        <th>Categoria</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tarefas.map((tarefa) =>(
                        <tr key={tarefa.TarefaId}>
                            <td>{tarefa.TarefaId}</td>
                            <td>{tarefa.Titulo}</td>
                            <td>{tarefa.Descricao}</td>
                            <td>{tarefa.Status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default ListarConcluidas;