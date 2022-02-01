let velocidade = 0;
let nome = prompt("Piloto, digite seu nome: ");

velocidade = prompt(nome + " , sua velocidade atual é: " + velocidade + "km/s \n Digite para qual velocidade deseja mudar: ");
confirm("Deseja alterar a velocidade para: " + velocidade + "km/s ? ");

if(velocidade < 0)
{
    alert("Nave está parada. Considere partir e aumentar a velocidade ");

}else if(velocidade < 40){
    alert("Você está devagar, podemos aumentar mais");

}else if(velocidade >= 40 && velocidade < 80){
    alert("Parece uma boa velocidade para manter");

}else if(velocidade >= 80 && velocidade < 100)
{
    alert("Velocidade alta. Considere diminuir");

}else{
    alert(" Velocidade perigosa \n Controle automático forçado.");
}

alert(nome + ", velocidade atual: " + velocidade + "km/s");