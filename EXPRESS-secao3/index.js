const express = require("express"); // Importando o express
const app = express(); // Iniciando o express


app.get("/",function(req,res){ // primeira rota - coloca o caminho '/' e coloca o que ela executara (function())
        res.send("Bem vindo ao guia do programador")
        /*res.send("outra resposta")*/ // aqui normalmente da erro pq so pode enviar uma resposta UMA VEZ
}); 
app.get("/blog/:artigo?",function(req,res){ // o caminho com paramentro precedido de '?'torna opcional o uso do parametro
    
    let artigo = req.params.artigo

    if(artigo){
        res.send(`Artigo: ${artigo}`)
    } else {
        res.send("ola, este eh o meu blog");
    }
})

app.get("/contato",function(req,res){
    res.send("este eh a pagina de contato");
})

app.get("/ola/:nome/:empresa",function(req,res){    // a rota não é ola, eh alguma string que estara no parametro "nome"
    /* REQ => DADO ENVIADO PELO USUARIO */   // so conseguiriamos acessar esta rota se voce passar o parametro junto.
    /* RES => RESPOSTA QUE VAI SER ENVIADA PARA O UCUARIO */
    let nome = req.params.nome;
    let empresa = req.params.empresa;
    
    res.send(`Ola ${nome} da empresa ${empresa}, tudo bem?`);     //pega o q o usuario digitou na url em ':nome"
})


//normalmente abrir o servidor eh a ultima coisa que fazemos
app.listen(4000,function(erro){    // chamado sempre q a funcao eh iniciada
    if(erro)
        console.log("Ocorreu um erro");
    else
        console.log("servidor iniciado");
})