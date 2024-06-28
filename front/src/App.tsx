import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/pages/tarefas/cadastrar"}></Link>
            Cadastrar Tarefas{" "}
          </li>
          <li>
            <Link to={"/pages/tarefas/listar"}></Link>
            Listar todas as Tarefas{" "}
          </li>
          <li>
            <Link to={"/pages/tarefas/naoconcluidas"}></Link>
            Listar para as não concluidas{" "}
          </li>
          <li>
            <Link to={"/pages/tarefas/concluidas"}></Link>
            Listar para as concluidas{" "}
          </li>
        </ul>
      </nav>
      </BrowserRouter>
    </div>
  );
}

export default App;
