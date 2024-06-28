import { useEffect, useState } from "react";
import { Tarefa } from "../../../Models/Tarefas";
import { Categoria } from "../../../Models/Categoria";


function listarNaoConcluidas(){
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);
    const [categoria, setCategoria] = useState<Categoria[]>([]);

    useEffect(() => {
        carregarNaoConcluidas();
    }, []);

    function carregarNaoConcluidas(){
        fetch("http://localhost:5000/tarefas/naoconcluidas").then((resposta) => resposta.json())
                                                            .then((tarefas: Tarefa[]) =>{
                                                                console.table(tarefas);
                                                                setTarefas(tarefas);
                                                     });
    }

    return (
        <div>
            <h1>Listar Não Concluidas</h1>
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
                            {categoria.map((categoria) =>(
                            <><td>{categoria.Nome}</td></>
                        ))}
                            <td>{tarefa.Status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default listarNaoConcluidas();