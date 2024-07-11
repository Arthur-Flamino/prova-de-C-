import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import TarefaListar from './Components/pages/tarefas/Tarefa-listar';
import TarefaNaoConcluidas from './Components/pages/tarefas/Tarefa-naoConcluidas';
import TarefaConcluidas from './Components/pages/tarefas/Tarefa-concluidas';
import TarefaCadastrar from './Components/pages/tarefas/Tarefa-cadastrar';

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/pages/tarefa/listar"}>
                  Listar Tarefas{" "}
                </Link>
              </li>
              <li>
                <Link to={"/pages/tarefa/listarconcluidas"}>
                  Listar Tarefas Concluídas{" "}
                </Link>
              </li>
              <li>
                <Link to={"/pages/tarefa/listarnaoconcluidas"}>
                  Listar Tarefas Não Concluídas{" "}
                </Link>
              </li>
              <li>
                <Link to={"/pages/tarefa/cadastrar"}>
                  Cadastrar Tarefa{" "}
                </Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<TarefaListar />} />
            <Route
              path="/pages/tarefa/listar"
              element={<TarefaListar />}
            />
            <Route
              path="/pages/tarefa/listarconcluidas"
              element={<TarefaConcluidas />}
            />
            <Route
              path="/pages/tarefa/listarnaoconcluidas"
              element={<TarefaNaoConcluidas />}
            />
            <Route
              path="/pages/tarefa/cadastrar"
              element={<TarefaCadastrar />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;