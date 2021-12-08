const express = require("express");//chamando o express
const cors = require("cors"); //chamando o cors
const app = express(); //chamar o app
const routes = require("./routes/cadastroRoutes");

app.use(cors()); //executando o cors
app.use(express.json()); //chamar json
app.use(routes);



module.exports = app //exportando o app