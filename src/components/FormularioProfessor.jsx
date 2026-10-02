import { useState } from "react";
import CampoTexto from "./CampoTexto";

function FormularioProfessor(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [endereco, setEndereco] = useState("");
  const [disciplina, setDisciplina] = useState("");

  function aoEnviar(e) {
    e.preventDefault();
    const professor = {
      nome: nome,
      email: email,
      cpf: cpf,
      data_nascimento: dataNascimento,
      endereco: endereco,
      disciplina: disciplina,
    };
    props.aoSalvar(professor);
    setNome("");
    setEmail("");
    setCpf("");
    setDataNascimento("");
    setEndereco("");
    setDisciplina("");
  }

  return (
    <form className="formulario-professor" onSubmit={aoEnviar}>
      <CampoTexto rotulo="Nome" valor={nome} aoAlterar={setNome} />
      <CampoTexto rotulo="Email" tipo="email" valor={email} aoAlterar={setEmail} />
      <CampoTexto rotulo="CPF" valor={cpf} aoAlterar={setCpf} />
      <CampoTexto rotulo="Data de nascimento" tipo="date" valor={dataNascimento} aoAlterar={setDataNascimento} />
      <CampoTexto rotulo="Endereço" valor={endereco} aoAlterar={setEndereco} />
      <CampoTexto rotulo="Disciplina" valor={disciplina} aoAlterar={setDisciplina} />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default FormularioProfessor;
