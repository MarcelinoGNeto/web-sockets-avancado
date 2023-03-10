import { MongoClient } from "mongodb";

const user = process.env.MONGO_CLIENT_USER;
const password = process.env.MONGO_CLIENT_PASSWORD;
const bd = process.env.MONGO_CLIENT_BD;

const cliente = new MongoClient(
  `mongodb+srv://${user}:${password}@${bd}.dre6x6b.mongodb.net/?retryWrites=true&w=majority`
);

let documentosColecao, usuariosColecao;

try {
  await cliente.connect();

  //Documentos do banco de dados
  const db = cliente.db("alura-websockets");
  documentosColecao = db.collection("documentos");
  usuariosColecao = db.collection("usuarios");

  console.log("Conectado ao banco de dados com sucesso!");
} catch (erro) {
  console.log(erro);
}

export { documentosColecao, usuariosColecao };
