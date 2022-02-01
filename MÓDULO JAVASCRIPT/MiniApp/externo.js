let dataPartidaEntrada = prompt(" Digite a data de partida \n Formato: DD/MM/YYYY");

let dataPartida = moment(dataPartidaEntrada,"DD/MM/YYYY");

let hoje = moment();

let diferença = hoje - dataPartida;

let formato = prompt(" Escolha como deverá ser exibido o tempo de partida \n 1 - Segundos \n 2 - Minutos \n 3 - Horas \n 4 - Dias");

if (formato == "1")
{
    let segundosDePartida = Math.round(diferença / 1000);
    alert("Tempo de voo: " + segundosDePartida + " segundos");

}else if(formato == "2"){
    let minutosDePartida = Math.round(diferença / 1000 / 60);
    alert("Tempo de voo: " + minutosDePartida + " minutos");

}else if(formato == "3"){
    let horasDePartida = Math.round(diferença / 1000 / 3600);
    alert("Tempo de voo: " + horasDePartida + " horas");

}else if(formato == "4"){
    let diasDePartida = Math.round(diferença / 1000 / 3600 /24);
    alert("Tempo de voo: " + diasDePartida + " dias");

}else{
    alert("Opção inválida, recarregue a página");
}