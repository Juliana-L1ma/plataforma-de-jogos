function alerta(){
    Swal.fire('A Millennium Falcon está em suas mãos e agora você está em uma corrida espacial de naves.<br>Teste seu conhecimento em STAR WARS será que você consegue ganhar essa corrida?')
}
var perguntas = [
    ["Anakin", "Qual o nome do vilão Darth Vader?"], 
    ["Luke", "Qual o primeiro nome do filho de Darth Vader?"],
    ["Yoda", "Qual o Jedi mais poderoso?"],
    ["1977", "Em que ano lançou o primeiro filme de Star Wars?"], 
    ["Tatooine", "Qual o nome do planeta onde Luke Skywalker nasceu?"],
    ["amarelo", "Qual a cor do sabre de luz de Rey?"], 
    ["Palpatine", "Quem é o imperador, Lorde dos Sith?"], 
    ["Estrela da Morte", "O que começa a ser construído no final do Episódio III? (Dica: 3 palavras, começam com 'E', 'D' e 'M')"], 
    ["Han Solo", "Em 'O Despertar da Força', quem Kylo Ren mata?"], 
    ["Obi-Wan", "Qual o nome da pessoa que cortou os braços de Anakin? (Dica: '***-***')"]
];

var posicaoPergunta = 0;
document.getElementById("score").innerHTML = 0;
var marginLeftMillenium = 300;
var marginLeftNaves = 180;




function exibirPergunta() {
    document.getElementById("pergunta").innerHTML = perguntas[posicaoPergunta][1];
}

function conferir() {
    var resposta = document.getElementById("resposta").value;
    console.log(resposta);

    
// seleciona elemento
let millenniumPosix = document.getElementById('naveMillenium');
let naveTopPosix = document.getElementById('naveEmpire1');
let naveBottomPosix = document.getElementById('naveEmpire2');
// utiliza método
let millenniumPosixCoor = millenniumPosix.getBoundingClientRect();
let naveTopPosixCoor = naveTopPosix.getBoundingClientRect();
let naveBottomPosixCoor = naveBottomPosix.getBoundingClientRect();
// verificar as propriedades com as coord
console.log(millenniumPosixCoor.x);
console.log(naveTopPosixCoor.x);
console.log(naveBottomPosixCoor.x);

if (naveTopPosixCoor.x >= millenniumPosixCoor.x && naveBottomPosixCoor.x >= millenniumPosixCoor.x) {
    Swal.fire({
        title: 'Você perdeu a corrida!',
        imageUrl: './img/race.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
}

    if (resposta == perguntas[posicaoPergunta][0]) {
        millenium = document.getElementById("naveMillenium");
        emprire1 = document.getElementById("naveEmpire1");
        emprire2 = document.getElementById("naveEmpire2");


        millenium.style.marginLeft = marginLeftMillenium + "px";
        emprire1.style.marginLeft = marginLeftNaves + "px";
        emprire2.style.marginLeft = marginLeftNaves + "px";

        document.getElementById("score").innerHTML++
        console.log("acertou");
    } else {
        emprire1.style.marginLeft = marginLeftNaves + "px";
        emprire2.style.marginLeft = marginLeftNaves + "px";
        console.log("errou!");
    }

    posicaoPergunta++;
    marginLeftMillenium+=150;
    marginLeftNaves +=50;
    
    
    if (posicaoPergunta < perguntas.length) {
        exibirPergunta();
    }else{
        Swal.fire({
            title: 'Acabou você ganhou a corrida!',
            imageUrl: './img/race.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
    }
}


