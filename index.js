let valorVitorias = calcularVitorias(106,2);
let nivel = informarNivel(valorVitorias);
console.log("O Herói tem de saldo de " + valorVitorias + " está no nível de " + nivel + ".");


function calcularVitorias(vitorias, derrotas){
    let valorVitorias = vitorias - derrotas;
    return valorVitorias;

}

function informarNivel(valorVitorias){
    let nivel; 
    switch (true) {
        case (valorVitorias <= 10):
        nivel = "Ferro";
        break;
    case (valorVitorias > 10 && valorVitorias <= 20):
        nivel = "Bronze";
        break;
    case (valorVitorias > 20 && valorVitorias <= 50):
        nivel = "Prata";
        break;
    case (valorVitorias > 50 && valorVitorias <= 80):
        nivel = "Ouro";
        break;
    case (valorVitorias > 80 && valorVitorias <= 90):
        nivel = "Diamante";
        break;
    case (valorVitorias > 90 && valorVitorias <= 100):
        nivel = "Lendário";
        break;
    case (valorVitorias >= 101):
        nivel = "Imortal";
        break;
    }
    return nivel;    
};