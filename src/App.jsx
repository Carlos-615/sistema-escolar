import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import BarraNavegacao from "./components/BarraNavegacao";
import MensagemErro from "./components/MensagemErro";
import PaginaInicial from "./pages/PaginaInicial";
import PaginaListagem from "./pages/PaginaListagem";
import PaginaCadastro from "./pages/PaginaCadastro";
import PaginaListagemProfessores from "./pages/PaginaListagemProfessores";
import PaginaCadastroProfessor from "./pages/PaginaCadastroProfessor";
import { listarAlunos, criarAluno, excluirAluno } from "./services/alunoService";
import { listarProfessores, criarProfessor, excluirProfessor } from "./services/professorService";

const mensagemConexao = "Não foi possível conectar à API. Você esqueceu de iniciar o json-server? Rode: npx json-server --watch db.json --port 3000";

function App() {
  const [alunos, setAlunos] = useState([]);
  const [erro, setErro] = useState("");
  const [professores, setProfessores] = useState([]);
  const [erroProfessores, setErroProfessores] = useState("");

  useEffect(function () {
    carregarAlunos();
  }, []);

  useEffect(function () {
    carregarProfessores();
  }, []);

  async function carregarAlunos() {
    try {
      const dados = await listarAlunos();
      setAlunos(dados);
      setErro("");
    } catch (e) {
      setErro(mensagemConexao);
    }
  }

  async function carregarProfessores() {
    try {
      const dados = await listarProfessores();
      setProfessores(dados);
      setErroProfessores("");
    } catch (e) {
      setErroProfessores(mensagemConexao);
    }
  }

  async function aoSalvar(aluno) {
    try {
      await criarAluno(aluno);
      carregarAlunos();
    } catch (e) {
      setErro(mensagemConexao);
    }
  }
  
  async function aoSalvarProfessor(professor) {
    try {
      await criarProfessor(professor);
      carregarProfessores();
    } catch (e) {
      setErroProfessores(mensagemConexao);
    }
  }

  async function aoExcluir(id) {
    try {
      await excluirAluno(id);
      carregarAlunos();
    } catch (e) {
      setErro(mensagemConexao);
    }
  }

  async function aoExcluirProfessor(id) {
    try {
      await excluirProfessor(id);
      carregarProfessores();
    } catch (e) {
      setErroProfessores(mensagemConexao);
    }
  }

  return (
    <div className="App">
      <header className="cabecalho-ifrn">
        <img
          src="/IFRN.png"
          alt="Logo IFRN"
          className="logo-ifrn"
          onError={function (e) { e.target.style.display = "none"; }}
        />
        <h1>Sistema Escolar — Cadastro de Alunos</h1>
      </header>
      <BarraNavegacao />
      <MensagemErro mensagem={erro} />
      <MensagemErro mensagem={erroProfessores} />
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/alunos" element={<PaginaListagem alunos={alunos} aoExcluir={aoExcluir} />} />
        <Route path="/cadastro" element={<PaginaCadastro aoSalvar={aoSalvar} />} />
        <Route path="/professores" element={<PaginaListagemProfessores professores={professores} aoExcluir={aoExcluirProfessor} />} />
        <Route path="/cadastro-professor" element={<PaginaCadastroProfessor aoSalvar={aoSalvarProfessor} />} />
      </Routes>
    </div>
  );
}

export default App;