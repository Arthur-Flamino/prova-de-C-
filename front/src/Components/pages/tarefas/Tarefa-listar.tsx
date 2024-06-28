import { useEffect, useState } from "react";
import { Tarefa } from "../../../Models/Tarefas";
import { Categoria } from "../../../Models/Categoria";
import { Link } from "react-router-dom";



function tarefasListar(){
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);
    const [categoria, setCategoria] = useState<Categoria[]>([]);

    useEffect(() => {
        carregarTarefas();
    }, []);

    function carregarTarefas(){
        fetch("http://localhost:5000/tarefas/listar").then((resposta) => resposta.json())
                                                     .then((tarefas: Tarefa[]) =>{
                                                        console.table(tarefas);
                                                         setTarefas(tarefas);
                                                     });
    }

    return (
        <div>
            <h1>Listar Tarefas</h1>
            <table>
                <thead>
                    <tr>
                        <th>TarefaId</th>
                        <th>Título</th>
                        <th>Descrição</th>
                        <th>Data Criação</th>
                        <th>Categoria</th>
                        <th>CategoriaId</th>
                        <th>Status</th>
                        <th>Alterar Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tarefas.map((tarefa) =>(
                        <tr key={tarefa.TarefaId}>
                            <td>{tarefa.Titulo}</td>
                            <td>{tarefa.Descricao}</td>
                            <td>{tarefa.CriadoEm}</td>
                        {categoria.map((categoria) =>(
                            <><td>{categoria.Nome}</td><td>{categoria.CategoriaId}</td></>
                        ))}
                            <td>{tarefa.Status}</td>
                            {/* { <td><Link to={`/pages/Tarefas/alterar/${tarefa.TarefaId}`}>
                                Alterar
                                </Link></td>} */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default tarefasListar();