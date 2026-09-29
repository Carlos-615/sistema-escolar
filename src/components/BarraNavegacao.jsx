import { Link } from "react-router-dom";

function BarraNavegacao() {
  return (
    <nav className="barra-navegacao">
      <Link to="/">Início</Link>
      <Link to="/alunos">Alunos</Link>
      <Link to="/cadastro">Cadastrar</Link>
      <Link to="/professores">Professores</Link>
      <Link to="/cadastro-professor">Cadastrar Professor</Link>
    </nav>
  );
}

export default BarraNavegacao;
