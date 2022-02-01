let i = 0;
let newSpaceship = "";

let spaceship = prompt("Digite o nome da sua nave espacial: ");
let inserir = prompt("Qual caractere deseja inserir ");
let substituir = prompt("Qual caracter deseja substituir? ");

for(i = 0; i < spaceship.length; i++)
{
    if(spaceship[i] == substituir)
    {
        newSpaceship += inserir;

    }else{
        newSpaceship += spaceship[i];
    }
}

alert("Novo nome da nave: " + newSpaceship);

