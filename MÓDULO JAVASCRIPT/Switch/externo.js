let conversao;

let distanciaAnosLuz = prompt("Digite sua distância em anos-luz");

let opcao = prompt("Digite para qual deseja converter \n 1 - Parsec (pc) \n 2 - Unidade astronômica (AU) \n 3 - Quilômetros (km)");

switch(opcao)
{
    case "1":
        opcao = "Parsec (pc)"
        conversao = (distanciaAnosLuz * 0.306601)
        break;

    case "2":
        opcao =  "Unidade astronômica (AU)"
        conversao = (distanciaAnosLuz * 63241.1)
        break;

    case "3":
        opcao = "Quilômetros (km)"
        conversao = (distanciaAnosLuz * (9.5 * Math.pow(10,12)))
        break;

        default:
            alert("Distância em Anos-luz: " + lyDistance + "\n Unidade não identificada: Conversão fora do escopo")
}
    alert(" Distância em anos-luz " + distanciaAnosLuz + "\n Distância convertida em  " + opcao + " : "+ conversao);