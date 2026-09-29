import { useState } from "react";
import CampoTexto from "./CampoTexto";

function FormularioProfessor(props) {
  // Se receber um professor (edição), os campos já começam preenchidos
  const inicial = props.professorInicial || {};

  const [nome, setNome] = useState(inicial.nome || "");
  const [email, setEmail] = useState(inicial.email || "");
  const [cpf, setCpf] = useState(inicial.cpf || "");
  const [disciplina, setDisciplina] = useState(inicial.disciplina || "");
  const [dataAdmissao, setDataAdmissao] = useState(inicial.data_admissao || "");

  function aoEnviar(e) {
    e.preventDefault();
    const professor = {
      nome: nome,
      email: email,
      cpf: cpf,
      disciplina: disciplina,
      data_admissao: dataAdmissao,
    };
    props.aoSalvar(professor);
    setNome("");
    setEmail("");
    setCpf("");
    setDisciplina("");
    setDataAdmissao("");
  }

  return (
    <form className="formulario-aluno" onSubmit={aoEnviar}>
      <CampoTexto rotulo="Nome" valor={nome} aoAlterar={setNome} />
      <CampoTexto rotulo="Email" tipo="email" valor={email} aoAlterar={setEmail} />
      <CampoTexto rotulo="CPF" valor={cpf} aoAlterar={setCpf} />
      <CampoTexto rotulo="Disciplina" valor={disciplina} aoAlterar={setDisciplina} />
      <CampoTexto rotulo="Data de admissão" tipo="date" valor={dataAdmissao} aoAlterar={setDataAdmissao} />
      <button type="submit">{props.textoBotao || "Cadastrar"}</button>
    </form>
  );
}

export default FormularioProfessor;
