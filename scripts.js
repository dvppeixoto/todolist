//console.log("Primeiro comando JS")
//let variavel = "minha primeira variável"
//let variavelnumero = 1234
//console.log(variavel)
//console.log(variavelnumero) 
 
let input = document.getElementById("input-principal")
let botaoadicionar = document.getElementById("botao-adicionar")
//console.log(input.value) //.value capta apenas o que for digitado no input
//console.log(botaoadicionar)

function adicionarTarefas() {
    console.log("estou na função")
}
//adicionarTarefas() // aqui estou fazendo o chamamento da função.
//a priori o console.log não vai aparecer no inspecioar, pois ela precisa
//ser chamada.

botaoadicionar.addEventListener("click", adicionarTarefas) //é adicionado um evento de click.



//document se refere ao HTML que está linkado 
//getElementById chama o ID input-principal que criamos no HTML
//adicionarTarefas() //chamado pela segunda vez
//adicionarTarefas() //chamado pela terceira vez