import { useEffect, useState } from "react";
import { Categoria } from "../../../Models/Categoria";
import { Tarefa } from "../../../Models/Tarefas";
import { useNavigate } from "react-router-dom";


function tarefaCadastrar(){
    const navigate = useNavigate();
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState<Categoria[]>([]);
    const [CategoriaId, setCategoriaId] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() =>{
        carregarCategorias();
    }, []);

    function carregarCategorias(){
        fetch("http://localhost:5000/categoria/listar")
        .then((resposta) => resposta.json())
        .then((categoria: Categoria[]) => {
          setCategoria(categoria);
        });
    }

    function cadastrarTarefa(e: any){
        const tarefa: Tarefa = {
            Titulo: titulo,
            Descricao: descricao,
            CategoriaId: CategoriaId,
            Status: status
        };
        fetch("http://localhost:5225/api/produto/cadastrar", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(tarefa),
        })
          .then((resposta) => resposta.json())
          .then((tarefa: Tarefa) => {
            navigate("/pages/Tarefa/listar");
          });
        e.preventDefault();
      }
      return(
        <div>
            <h1>Cadastrar Tarefa</h1>
            <form onSubmit={cadastrarTarefa}>
                <label>Titulo da tarefa:</label>
                <input
                    type="text"
                    placeholder="Digite o titulo"
                    onChange={(e: any) => setTitulo(e.target.value)}
                    required
                />
                <br />
                <label>Descrição:</label>
                <input
                    type="text"
                    placeholder="Digite a descrição"
                    onChange={(e: any) => setDescricao(e.target.value)}
                />
                <br />
                <label>Categorias:</label>
                <select onChange={(e: any) => setCategoriaId(e.target.value)}>
                    {categoria.map((categoria) => (
                    <option value={categoria.CategoriaId} key={categoria.CategoriaId}>
                        {categoria.Nome}
                    </option>
                    ))}
                </select>
                <br />
                <label>Status:</label>
                <select onChange={(e: any) => setStatus(e.target.value)}>
                    <option value="Não iniciada">Pendente</option>
                </select>
                <button type="submit">Cadastrar</button>    
            </form>
        </div>
      )
}
