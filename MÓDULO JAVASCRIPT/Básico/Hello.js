alert("Vamos verificar as idades")

let nome1 = prompt("Nome da 1ª pessoa: ")
let idade1 = prompt("Idade da 1ª pessoa: ")
let nome2 = prompt("Nome da 2ª pessoa: ")
let idade2 = prompt("Idade da 2ª pessoa: ")

if (idade1 > idade2)
{
   let diferenca = idade1 - idade2
   alert(nome1 + " é a pessoa mais velha com " + idade1 + " anos de idade \n " + nome2  + " é a pessoa mais nova com " + idade2 + " anos de idade \n Diferença de idades entre eles é de " + diferenca)

}else if (idade2 > idade1){

    let diferenca2 = idade2 - idade1
    alert(nome2 + " é a pessoa mais velha com " + idade2 + " anos de idade \n " + nome1  + " é a pessoa mais nova com " + idade1 + " anos de idade \n Diferença de idades entre eles é de " + diferenca2)
    
}