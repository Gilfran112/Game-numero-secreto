// let titulo = document.querySelector ('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector ('p');
// paragrafo.innerHTML = 'Digite um número de 1 a 10'
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  //Esta função possui parâmetros que são as informações que queremos exibir, mas não possui um retorno.
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do Número Secreto');
  exibirTextoNaTela('p', 'Digite um número de 1 a 10');
}
  exibirMensagemInicial();

function verificarChute() { 
  let chute = document.querySelector('input').value; 

  if (chute == numeroSecreto) {
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    exibirTextoNaTela('h1', 'Acertou!');
    let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela('p', mensagemTentativa);

    document.getElementById('reiniciar').removeAttribute('disabled');

  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', 'O número secreto é menor');
    } else {
      exibirTextoNaTela('p', 'O número secreto é maior');
    }
    tentativas++
    limparCampo();
  }

}

function gerarNumeroSecreto() { //não definimos nenhum parâmetro. Por isso, não tem nenhuma informação entre os parênteses. Contudo, há um retorno. Qual é o retorno? A geração de um número entre 1 e 10.
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1 );
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite) {
      listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
      return gerarNumeroSecreto();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido
  }
}

function limparCampo() {
 chute = document.querySelector('input');
 chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroSecreto();
  limparCampo();
  tentativas = 1; 
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}





