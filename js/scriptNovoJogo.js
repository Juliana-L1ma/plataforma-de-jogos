var nivel = 1;

function proxIntro(){
    document.getElementById("introducao").src = './imgMandalore/introducao2-removebg-preview.png';
}
function voltarIntro(){
    document.getElementById("introducao").src = './imgMandalore/introducao1-removebg-preview.png';
}

function video(){
    document.getElementById("gif").style.display = "block";
}
function videoClose(){
    document.getElementById("gif").style.display = "none";
}

fetch('selecao.json')
.then(response => response.json())
.then(informacoes => {
    console.log(informacoes);
/*-----------------------  PEGANDO OS DADOS DAS ARMADURAS NO JSON ------------*/
        document.getElementById("nomeArmadura1").innerHTML = "<b>Nome da armadura: </b>" + informacoes.armadura1.nomeArmadura;
        document.getElementById("material1").innerHTML = "<b>Material: </b>" + informacoes.armadura1.material;
        document.getElementById("nivel1").innerHTML = "<b>Desbloqueada no: </b>" + informacoes.armadura1.nivel;
        document.getElementById("tipo1").innerHTML = "<b>Tipo: </b>" + informacoes.armadura1.tipo;
  
        document.getElementById("nomeArmadura2").innerHTML = "<b>Nome da armadura: </b>" + informacoes.armadura2.nomeArmadura;
        document.getElementById("material2").innerHTML = "<b>Material: </b>" + informacoes.armadura2.material;
        document.getElementById("nivel2").innerHTML = "<b>Desbloqueada no: </b>" + informacoes.armadura2.nivel;
        document.getElementById("tipo2").innerHTML = "<b>Tipo: </b>" + informacoes.armadura2.tipo;

        document.getElementById("nomeArmadura3").innerHTML = "<b>Nome da armadura: </b>" + informacoes.armadura3.nomeArmadura;
        document.getElementById("material3").innerHTML = "<b>Material: </b>" + informacoes.armadura3.material;
        document.getElementById("nivel3").innerHTML = "<b>Desbloqueada no: </b>" + informacoes.armadura3.nivel;
        document.getElementById("tipo3").innerHTML = "<b>Tipo: </b>" + informacoes.armadura3.tipo;

        document.getElementById("nomeArmadura4").innerHTML = "<b>Nome da armadura: </b>" + informacoes.armadura4.nomeArmadura;
        document.getElementById("material4").innerHTML = "<b>Material: </b>" + informacoes.armadura4.material;
        document.getElementById("nivel4").innerHTML = "<b>Desbloqueada no: </b>" + informacoes.armadura4.nivel;
        document.getElementById("tipo4").innerHTML = "<b>Tipo: </b>" + informacoes.armadura4.tipo;

        /* ------------------ PEGANDO OS DADOS DAS ARMAS NO JSON ----------*/
        document.getElementById("nomeArma1").innerHTML = "<b>Nome da arma: </b>" + informacoes.arma1.nomeArma;
        document.getElementById("nivelArma1").innerHTML = "<b>Desbloqueada no: </b>" + informacoes.arma1.nivelArma;
        document.getElementById("letal1").innerHTML = "<b>Letalidade: </b>" + informacoes.arma1.letal;
  
        document.getElementById("nomeArma2").innerHTML = "<b>Nome da armadura: </b>" + informacoes.arma2.nomeArma;
        document.getElementById("nivelArma2").innerHTML = "<b>Desbloqueada no: </b>" + informacoes.arma2.nivelArma;
        document.getElementById("letal2").innerHTML = "<b>Letalidade: </b>" + informacoes.arma2.letal;

        document.getElementById("nomeArma3").innerHTML = "<b>Nome da arma: </b>" + informacoes.arma3.nomeArma;
        document.getElementById("nivelArma3").innerHTML = "<b>Desbloqueada no: </b>" + informacoes.arma3.nivelArma;
        document.getElementById("letal3").innerHTML = "<b>Letalidade: </b>" + informacoes.arma3.letal;

        document.getElementById("nomeArma4").innerHTML = "<b>Nome da arma: </b>" + informacoes.arma4.nomeArma;
        document.getElementById("nivelArma4").innerHTML = "<b>Desbloqueada no: </b>" + informacoes.arma4.nivelArma;
        document.getElementById("letal4").innerHTML = "<b>Letalidade: </b>" + informacoes.arma4.letal;

    })

    /*---------------- função para aparecer os dados das armaduras quando clicar na imagem*/
function armadura1(){
    document.getElementById("sectionArmadura1").style.display = "block";
}
function armadura2(){
    document.getElementById("sectionArmadura2").style.display = "block";
}
function armadura3(){
    document.getElementById("sectionArmadura3").style.display = "block";
}
function armadura4(){
    document.getElementById("sectionArmadura4").style.display = "block";
}

    /*---------------- função para aparecer os dados das armas quando clicar na imagem*/
    function arma1(){
        document.getElementById("sectionArma1").style.display = "block";
    }
    function arma2(){
        document.getElementById("sectionArma2").style.display = "block";
    }
    function arma3(){
        document.getElementById("sectionArma3").style.display = "block";
    }
    function arma4(){
        document.getElementById("sectionArma4").style.display = "block";
    }


/*-------------- função para esconder os dados das armaduras quando clicar no otão de fechar*/
function fecharArmaduras(){
    document.getElementById("sectionArmadura1").style.display = "none";
    document.getElementById("sectionArmadura2").style.display = "none";
    document.getElementById("sectionArmadura3").style.display = "none";
    document.getElementById("sectionArmadura4").style.display = "none";
   
}

/*-------------- função para esconder os dados das armas quando clicar no botão de fechar*/
function fechar(){
    document.getElementById("sectionArma1").style.display = "none";
    document.getElementById("sectionArma2").style.display = "none";
    document.getElementById("sectionArma3").style.display = "none";
    document.getElementById("sectionArma4").style.display = "none";
   
}

/*------------ função para aparecer a skin escolhida no mural ----*/

function personagem1(){
    document.getElementById("personagemEscolhido").src = './imgMandalore/personagem1escolhido.png';
    document.getElementById("personagemEscolhido").style.width = "200px";
}
function personagem2(){
    document.getElementById("personagemEscolhido").src = './imgMandalore/personagem2escolhido.png';
    document.getElementById("personagemEscolhido").style.width = "200px";
}

/*------------ colocar a armadura clicada*/
function add1(){ 
    document.getElementById("armaduraEscolhido").src = './imgMandalore/classicArmadura.jpg';
    document.getElementById("armaduraEscolhido").style.width = "200px";
}
function add2(){ 
    if (nivel < 20) {
        Swal.fire("Desculpa guerreiro você ainda não está capacitado para utilizar esse equipamento, continue jogando para subir de nível!");
        } else {
        document.getElementById("armaduraEscolhido").src = './imgMandalore/PilotArmadura.jpg';
        document.getElementById("armaduraEscolhido").style.width = "200px";
    }
    
}
function add3(){ 
    if (nivel < 35) {
        Swal.fire("Desculpa guerreiro você ainda não está capacitado para utilizar esse equipamento, continue jogando para subir de nível!");
        }else{
        document.getElementById("armaduraEscolhido").src = './imgMandalore/hunterArmadura.jpg';
        document.getElementById("armaduraEscolhido").style.width = "200px";
    }
    
}

function add4(){ 
    if (nivel < 50) {
        Swal.fire("Desculpa guerreiro você ainda não está capacitado para utilizar esse equipamento, continue jogando para subir de nível!");
        }else{
        document.getElementById("armaduraEscolhido").src = './imgMandalore/EliteArmadura.jpg';
        document.getElementById("armaduraEscolhido").style.width = "200px";
    }
  
}

/*------------ colocar a arma clicada*/
function addArma1(){ 
    if (nivel < 10) {
        alert("Desculpe guerreiro mas você ainda não pode usar essa arma");
    } else{
        document.getElementById("armaEscolhido").src = './imgMandalore/jetpack.jpg';
        document.getElementById("armaEscolhido").style.width = "200px";
    }
    
}
function addArma2(){ 
    if (nivel < 15) {
        alert("Desculpe guerreiro mas você ainda não pode usar essa arma");
    } else {
        document.getElementById("armaEscolhido").src = './imgMandalore/espada.png';
        document.getElementById("armaEscolhido").style.width = "200px";
    }
    
}
function addArma3(){ 
    if (nivel < 1) {
        alert("Desculpe guerreiro mas você ainda não pode usar essa armadura");
    }else{
        document.getElementById("armaEscolhido").src = './imgMandalore/blaster.jpg';
        document.getElementById("armaEscolhido").style.width = "200px";
    }
    
}

function addArma4(){ 
    if (nivel <1) {
        alert("Desculpe guerreiro mas você ainda não pode usar essa armadura");
    }else{
        document.getElementById("armaEscolhido").src = './imgMandalore/rifle.png';
        document.getElementById("armaEscolhido").style.width = "200px";
    }
  
}
function aviso(){
    Swal.fire({
        title: 'OPS! Isso aqui foi uma prévia jogo em construção!',
        icon: 'info',
        html:
          'Fique de olho nesse perfil para saber quando irá lancar o jogo oficial ' +
          '<a style="color: black;" href="https://github.com/Juliana-L1ma"><b>Clique aqui</b></a>',
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!'
      });
}

