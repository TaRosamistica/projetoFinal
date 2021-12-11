
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

const atualizaNome = (req, res)=> {
    const idRequest = req.params.id
    let novoNome = req.body.Nome
    
    nomeFiltrado = cadastroJson.find(nome => nome.id == idRequest)

    nomeFiltrado.Nome = novoNome

    res.status(200).json(
        [
            {
                "mensagem": "Nome atualizado com sucesso",
                nomeFiltrado
            }
        ]
    )
}

const atualizaCadastro = (req, res) =>{
    const idRequest = req.params.id
    let cadastroRequest = req.body

    const indxEncontrado = cadastroJson.findIndex(cadastro => cadastro.id == idRequest)
    cadastroJson.splice(indxEncontrado, 1, cadastroRequest)

    res.status(200).json(
        [
            {
                "mensagem": "Cadastro atualizado com sucesso", 
                cadastroJson
            }
        ]
    )

}

//const deletaCadastro


       
//dps trocar json por schema*

module.exports = {
    getAll,
    getById,
    criarCadastro,
    atualizaNome,
    atualizaCadastro
}