const app = require("./src/app") //chamando app que está dentro de src
const PORT = 8081

//configurando a porta
app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
})