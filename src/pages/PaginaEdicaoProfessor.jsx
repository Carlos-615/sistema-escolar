import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FormularioProfessor from "../components/FormularioProfessor";
import MensagemErro from "../components/MensagemErro";
import { buscarProfessorPorId } from "../services/professorService";

function PaginaEdicaoProfessor(props) {
  // Lê o :id da URL -> /professores/editar/1 retorna { id: "1" }
  const { id } = useParams();
  const navigate = useNavigate();
  const [professor, setProfessor] = useState(null);
  const [erro, setErro] = useState("");

  // Busca o professor na API sempre que o id da URL mudar
  useEffect(function () {
    async function carregarProfessor() {
      try {
        const dados = await buscarProfessorPorId(id);
        setProfessor(dados);
      } catch {
        setErro("Professor não encontrado.");
      }
    }
    carregarProfessor();
  }, [id]);

  async function aoSalvar(dadosAtualizados) {
    await props.aoAtualizar(id, dadosAtualizados);
    navigate("/professores");
  }

  if (erro) {
    return <MensagemErro mensagem={erro} />;
  }

  // Só mostra o formulário depois que os dados chegarem da API
  if (!professor) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="pagina-cadastro">
      <h2>Editar professor</h2>
      <FormularioProfessor professorInicial={professor} aoSalvar={aoSalvar} textoBotao="Salvar alterações" />
    </div>
  );
}

export default PaginaEdicaoProfessor;
