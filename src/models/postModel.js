import conectarAoBanco from "../config/dbconfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts() {
    const db = conexao.db("imersao-aluragemini");
    const colecao = db.collection("posts");
    return colecao.find().toArray()
}

export async function criarPost(novoPost) {
    const db = conexao.db("imersao-aluragemini");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}