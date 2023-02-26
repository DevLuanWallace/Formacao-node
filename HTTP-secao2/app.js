var http = require("http");         //modulo http ja vem no node

http.createServer((req,res)=>{
    res.end("<h1>Bem vindo ao meu site</h1>")    //funcao de requisicao e resposta ao entrar no localhost
}).listen(8181);     // cria um servidor e abre na porta 8181
console.log("Meu servidor esta rodando")       // mensagem de servidor rodando