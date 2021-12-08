const express = require("express"); //chamando o express
const controller = require("../controllers/cadastroController"); //chamando controller
const router = express.Router(); //criando a const router pra poder chamá-la ao escrever as rotas

//rotas
router.get("/todos", controller.getAll) //lista todos os profissionais
router.get("/:id", controller.getById)
router.post("/criar", controller.criarCadastro)







module.exports = router //exportando a rota