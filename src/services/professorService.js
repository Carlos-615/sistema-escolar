import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

// Método para listar todos os professores - Get
export async function listarProfessores() {
  const resposta = await api.get("/professores");
  return resposta.data;
}

// Método para criar um novo professor - Post
export async function criarProfessor(professor) {
  const resposta = await api.post("/professores", professor);
  return resposta.data;
}

// Método para excluir um professor - Delete
export async function excluirProfessor(id) {
  await api.delete("/professores/" + id);
}

// Método para buscar um professor pelo id - Get
export async function buscarProfessorPorId(id) {
  const resposta = await api.get("/professores/" + id);
  return resposta.data;
}

// Método para atualizar um professor - Put
export async function atualizarProfessor(id, professor) {
  const resposta = await api.put("/professores/" + id, professor);
  return resposta.data;
}
