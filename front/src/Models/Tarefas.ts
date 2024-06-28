import { Categoria } from "./Categoria";

export interface Tarefa{
    TarefaId? : string;
    Titulo : string;
    Descricao : string;
    CriadoEm? : string;
    Categoria? : Categoria;
    CategoriaId? : string;
    Status : string;
}