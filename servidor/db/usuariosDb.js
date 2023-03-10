import criaHashESalSenha from "../utils/criarHashESalSenha.js";
import { usuariosColecao } from "./dbConnect.js";

function encontrarUsuario(nome) {
  return usuariosColecao.findOne({ nome });
}
function cadastroUsuario({ nome, senha }) {
  const { hashSenha, salSenha } = criaHashESalSenha(senha);
  return usuariosColecao.insertOne({ nome, hashSenha, salSenha });
}

export { cadastroUsuario, encontrarUsuario };
