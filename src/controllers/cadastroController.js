
const cadastroJson = require("../models/cadastro.json") 

const getAll = (req, res) => {
    res.status(200).send(cadastroJson)
}

const getById = (req, res)=>{
    let idRequest = req.params.id
    let idEncontrado = cadastroJson.find(cadastro => cadastro.id == idRequest)
    
    res.status(200).send(idEncontrado)
}
//post
const criarCadastro = (req, res)=>{
    let body = req.body
    let  novoCadastro = {
        id: (cadastroJson.length)+1,
        Nome:body.Nome,
        Categoria: body.Categoria,
        Registro: body.Registro,
        Especialidade: body.Especialidade,
        Convenio: body.Convenio,
        Estado: body.Estado,
        Cidade: body.Cidade,
        Telefone: body.Telefone,
        AtendimentoSc: body.AtendimentoSc,
    }
    cadastroJson.push(novoCadastro)
    res.status(201).send(novoCadastro)
}


       
//dps trocar json por schema*

module.exports = {
    getAll,
    getById,
    criarCadastro
}