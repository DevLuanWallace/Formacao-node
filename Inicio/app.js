const calculadora = require("./calculadora");

console.log(calculadora.multiplicacao(10,20));
console.log(calculadora.soma(2,8));

const subtracao = (a,b) => {
    return a-b;
}

console.log(divisao(4,2))
let resultado = multiplicacao(4,5)
let resultado2 = subtracao(10,5)
console.log(resultado)
console.log(resultado2)
console.log("imported function:")


/*var mostrarSite = false;
const site = "www.google.com.br";


console.log("mensagem:")
console.log("Meu nome eh Luan")

if(mostrarSite){ // nao mostra pq a variavel eh falsa
    console.log(site);
}
else{
    console.log("o site nao sera mostrado pq a variavel eh falsa")
}*/