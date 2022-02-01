let i = 0;
let proibido = "e";
let newSpaceship = "";

let spaceship = prompt("Digite o nome de sua nave: ");

for(i = spaceship.length -1; i >= 0; i--)
{
    if(spaceship[i] == proibido)
    {
        break;
    }
       newSpaceship += spaceship[i]; 
}

alert(" Nome original: " + spaceship + "\n Nome da nave após mudanças: " + newSpaceship);
        
        