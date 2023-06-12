//matriz com a palavra e o tema
var sPerguntas = [["CARAMBOLA", "FRUTA"], ["JABOTICABA", "FRUTA"], ["JAMBO", "FRUTA"], ["CUPUAÇU", "FRUTA"],
['FORTALEZA', 'CIDADE'], ['HOLAMBRA', 'CIDADE'], ['TERESOPOLIS', 'CIDADE'], ['HORTOLANDIA', 'CIDADE'], ['CARAPICUIBA', 'CIDADE'],
['ALICATE', 'FERRAMENTA'], ['MARTELO', 'FERRAMENTA'], ['SERRA TICO-TICO', 'FERRAMENTA'], ['FORMÃO', 'FERRAMENTA'], ['CHAVE DE FENDA', 'FERRAMENTA'], ['ALMOFADA', 'OBJETO'], ['JORNAL', 'OBJETO'], ['BOLSA', 'OBJETO'], ['PALITO DE DENTE', 'OBJETO'], ['CHURRASQUEIRA', 'OBJETO'], ['STROGONOFF', 'COMIDA'], ['LASANHA', 'COMIDA'], ['MACARRONADA', 'COMIDA'], ['FRANGO XADREZ', 'COMIDA'], ['CANELONE', 'COMIDA'], ['AEROWILLYS', 'CARRO'], ['SANTANA', 'CARRO'], ['VARIANT', 'CARRO'], ['RENEGADE', 'CARRO'], ['VIRTUS', 'CARRO'], ['ROSA', 'FLOR'], ['GERBERA', 'FLOR'], ['CALANCHUE', 'FLOR'], ['ORQUIDEA', 'FLOR'], ['LIRIO', 'FLOR'], ['VIOLAO', 'INSTRUMENTO MUSICAL'], ['SAXOFONE', 'INSTRUMENTO MUSICAL'], ['UKULELE', 'INSTRUMENTO MUSICAL'], ['ESCALETA', 'INSTRUMENTO MUSICAL'], ['TROMBONE', 'INSTRUMENTO MUSICAL'], ['ADAM SANDLER', 'ATOR'], ['JOHNNY DEPP', 'ATOR'], ['DWAYNE JOHNSON', 'ATOR'], ['WILL SMITH', 'ATOR'], ['BRAD PITT', 'ATOR'], ['JULIA ROBERTS', 'ATRIZ'], ['MERYL STREEP', 'ATRIZ'], ['BRIE LARSON', 'ATRIZ'], ['SCARLETT JOHANSSON', 'ATRIZ'], ['ZOE SALDANA', 'ATRIZ'], ['PATO DONALD', 'PERSONAGEM'], ['HOMEM DE FERRO', 'PERSONAGEM'], [' CAPITAO AMERICA', 'PERSONAGEM'], ['CORINGA', 'PERSONAGEM'], ['AQUAMAN', 'PERSONAGEM'], ['SPACE INVADERS', 'JOGOS'], ['PAC-MAN', 'JOGOS'], ['HALF-LIFE', 'JOGOS'], ['CALL OF DUTY', 'JOGOS'], ['MINECRAFT', 'JOGOS']];


var iSorteados = [];
var iJogada = 0;
var sPalavraSorteada;
var iAcertos = 0;
var iErro = 0;
var cLetraClicada = '';
var sLetras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-'];
var iCertas = 0;
var iErradas = 0;

//***************************************************************
function criaLetras(sPalavra) {
    var formula = document.getElementById('tenta');
    var j = 0;

    console.log("PALAVRA: " + sPalavra);
    for (var i = 0; i < sPalavra.length; i++) {
        if (sPalavra[i].charCodeAt(0) != 32) {
            var letra = document.createElement("input");

            letra.setAttribute("type", "text");
            letra.setAttribute("name", "tenta" + j);
            letra.setAttribute("id", "tenta" + j);
            letra.setAttribute("maxlength", 1);
            letra.setAttribute("size", 1);
            letra.setAttribute("disabled", true);

            formula.appendChild(letra);
            letra.style.backgroundColor = "#ffffff";
            letra.style.color = "#000000";
            j++;
        } else {
            document.getElementById("tenta" + (j - 1)).style.margin = '0px 20px 0px 1px';
        }
    }

    sPalavraSorteada = limpa(sPalavra);
    document.getElementById("tema").innerHTML = sPerguntas[iSorteados[iJogada]][1] + " - " + sPalavraSorteada.length + " letras";
}

function sorteia() {
    for (var m = 0; m < sPerguntas.length; m++) {
        iSorteados.push(m);
    }

    iSorteados = shuffleArray(iSorteados);
    criaLetras(sPerguntas[iSorteados[iJogada]][0]);
}



////////////////////confere a letra clicada
function confere(cLetra) {
    cLetraClicada = cLetra;

    var lAchou = false;

    for (var i = 0; i < sPalavraSorteada.length; i++) {
        if (cLetra == sPalavraSorteada.charAt(i)) {
            document.getElementById("tenta" + i).value = cLetra;

            iAcertos++;

            document.getElementById("acerto").innerHTML = "Letras acertadas: " + iAcertos;

            lAchou = true;
        }
    }

    if (lAchou == false) {
        iErro++;
        document.getElementById("imagem").src = 'img/forca' + (iErro + 1) + ".png";
    }
}


////////////  função que verifica se o jogo acabou
function acabou() {
    var lAcabou = false;

    if (iAcertos == sPalavraSorteada.length) {
        lAcabou = true;
        Swal.fire({
            title: 'Você conseguiu!',
            text: 'Finn escapou da forca, agora ele é um Jedi',
            imageUrl: './img/forca0.png',
            imageWidth: 400,
            imageHeight: 600,
            imageAlt: 'Ganhou',
          });

        iCertas++;
    } 
    else if (iErro == 6) {
        lAcabou = true;
        Swal.fire({
            icon: 'error',
            title: 'Você não conseguiu salvar Finn da Forca',
            imageUrl: './img/perdeu.jpg',
            imageWidth: 300,
            imageHeight: 500,
            imageAlt: 'Perdeu',
          })
        // alert("ENFORCADO!!!")
        iErradas++;
    }

    document.getElementById(cLetraClicada).disabled = true;

    if (lAcabou) {
        for (var i = 0; i < sPalavraSorteada.length; i++) {
            document.getElementById("tenta" + i).remove();
        }

        iJogada++;

        document.getElementById("palcerta").innerHTML = "Palavras corretas: " + iCertas + "<br>Palavras erradas: " + iErradas;

        criaLetras(sPerguntas[iSorteados[iJogada]][0]);

        iAcertos = 0;
        iErro = 0;
        document.getElementById("acerto").innerHTML = "Letras acertadas: " + iAcertos;
        document.getElementById("imagem").src = 'img/forca' + (iErro + 1) + ".png"

        for(var i = 0; i < sLetras.length; i++){
         document.getElementById(sLetras[i]).disabled = false;
        }
    }
}


function shuffleArray(d) {
    for (var c = d.length - 1; c > 0; c--) {
        var b = Math.floor(Math.random() * (c + 1));
        var a = d[c];
        d[c] = d[b];
        d[b] = a;
    }

    return d;
}


function limpa(sItem) {
    var sResultado = sItem;

    sResultado = replaceAll(sResultado, " ", "");

    sResultado = sResultado.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    return sResultado;
}

function replaceAll(str, de, para) {
    var pos = str.indexOf(de);

    while (pos > -1) {
        str = str.replace(de, para);
        pos = str.indexOf(de);
    }
    return (str);
}

//////////////////////////////////////////////////////////
function shake(e, oncomplete, distance, time) {
    var time = 500;
    var distance = 5;

    var start = (new Date()).getTime();
    animate();

    function animate() {
        var now = (new Date()).getTime();

        var elapsed = now - start;

        var fraction = elapsed / time;

        if (fraction < 1) {
            var x = distance * Math.sin(fraction * 4 * Math.PI);

            e.style.left = x + "px";

            setTimeout(animate, Math.min(25, time - elapsed));
        } else {
            if (oncomplete) oncomplete(e);
        }
    }
}


function shakeme(event1) {
    shake(event1.target);
} 