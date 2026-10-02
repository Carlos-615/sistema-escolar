function CardProfessor(props) {
  return (
    <div className="card-professor">
      <h3>{props.professor.nome}</h3>
      <p>{props.professor.email}</p>
      <p>CPF: {props.professor.cpf}</p>
      <p>Disciplina: {props.professor.disciplina}</p>
      <p>Nascimento: {props.professor.data_nascimento}</p>
      <p>{props.professor.endereco}</p>
      <button onClick={function () { props.aoExcluir(props.professor.id); }}>Excluir</button>
    </div>
  );
}

export default CardProfessor;