import { Link } from "react-router-dom";

function CardProfessor(props) {
  return (
    <div className="card-aluno">
      <h3>{props.professor.nome}</h3>
      <p>{props.professor.email}</p>
      <p>CPF: {props.professor.cpf}</p>
      <p>Disciplina: {props.professor.disciplina}</p>
      <p>Admissão: {props.professor.data_admissao}</p>
      <Link to={"/professores/editar/" + props.professor.id} className="botao-editar">Editar</Link>
      <button onClick={function () { props.aoExcluir(props.professor.id); }}>Excluir</button>
    </div>
  );
}

export default CardProfessor;
