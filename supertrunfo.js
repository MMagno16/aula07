var carta1 = {
  nome: "Branca de Neve",
  elemento: "princesa",
  imagem: "https://i.pinimg.com/originals/90/7d/c3/907dc39d90f88c11aeaabfe64cef12ca.png",
  atributos: {
    Delicadeza: 8,
    Aventureira: 6,
    Vestido: 6,
  }
};

var carta2 = {
 nome: "Cinderela",
  elemento: "princesa",
  imagem: "https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/04/Cinderela-Princesas-PNG-891x1024.png",
  atributos: {
    Delicadeza: 10,
    Aventureira: 5,
    Vestido: 10,
  }
};

var carta3 = {
  nome: "Aurora",
  elemento: "princesa",
  imagem: "https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/04/Bela-Adormecida-Princesas-PNG-720x1024.png",
  atributos: {
    Delicadeza: 9,
    Aventureira: 2,
    Vestido: 5,
  }
};

var carta4 = {
  nome: "Bela",
  elemento: "princesa",
  imagem: "https://imagensemoldes.com.br/wp-content/uploads/2021/04/Bela-Beauty-And-The-Beast-PNG-725x1024.png",
  atributos: {
    Delicadeza: 7,
    Aventureira: 7,
    Vestido: 10,
  }
};

var carta5 = {
  nome: "Ariel",
  elemento: "princesa",
  imagem: "https://imagensemoldes.com.br/wp-content/uploads/2020/04/Princesa-Ariel-Princesas-PNG-com-Fundo-Transparente-722x1024.png",
  atributos: {
    Delicadeza: 5,
    Aventureira: 10,
    Vestido: 5,
  }
};

var carta6 = {
  nome: "Rapunzel",
  elemento: "princesa",
  imagem: "https://imagensemoldes.com.br/wp-content/uploads/2020/04/Rapunzel-com-Fundo-Transparente.png",
  atributos: {
    Delicadeza: 2,
    Aventureira: 10,
    Vestido: 6,
  }
};

var carta7 = {
  nome: "Moana",
  elemento: "princesa",
  imagem: "https://www.pngplay.com/wp-content/uploads/12/Moana-Disney-Transparent-Background.png",
  atributos: {
    Delicadeza: 4,
    Aventureira: 10,
    Vestido: 2,
  }
};

var carta8 = {
  nome: "Merida",
  elemento: "princesa",
  imagem: "https://www.pngall.com/wp-content/uploads/2017/03/Merida-PNG-Pic.png",
  atributos: {
    Delicadeza: 1,
    Aventureira: 10,
    Vestido: 7,
  }
};

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8];
var cartaMaquina = 0;
var cartaJogador = 0;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
  cartaMaquina = cartas[numeroCartaMaquina];
  var numeroCartaJogador = parseInt(Math.random() * cartas.length);
  while (numeroCartaMaquina == numeroCartaJogador) {
      numeroCartaJogador = parseInt(Math.random() * cartas.length);
  }
  
cartaJogador = cartas[numeroCartaJogador];  
  
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  
   var exibirImagem = document.getElementById("ImagemCarta")
  exibirImagem.innerHTML = "<img src=" + cartaJogador.imagem + ">"
  
  exibirOpcoes()
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes")
  var opcoesTexto = "";
  
  for (var atributo in cartaJogador.atributos) {
     opcoesTexto += 
       "<input type='radio' name='atributo' value='" + 
       atributo + 
       "'>" + 
       atributo;
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  for(var i = 0; i < radioAtributos.length; i++) {
    if(radioAtributos[i].checked == true) {
      return radioAtributos[i].value; 
    }
  } 
}

  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var elementoResultado = document.getElementById("resultado")
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]
    
    if ( valorCartaJogador > valorCartaMaquina) {
      elementoResultado.innerHTML = "VOCÊ VENCEU!!! - A sua princesa era " + cartaJogador.nome + " e a outra princesa era " + cartaMaquina.nome 
      
    } else if( valorCartaJogador < valorCartaMaquina) {
      elementoResultado.innerHTML = "VOCÊ PERDEU!!! - A sua princesa era " + cartaJogador.nome + " e a outra princesa era " + cartaMaquina.nome 
      
    } else { 
      elementoResultado.innerHTML = "EMPATOU!!! - A sua princesa era " + cartaJogador.nome + " e a outra princesa era " + cartaMaquina.nome + "."
    }
  }
  