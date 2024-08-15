//Primeiro joguinho com js feito com ajuda do curso, com algummas pequenas partes feita por mim antes de ver o video.
//meu código
//CHALLENGE#GAME -1

//criando número ateátorio igual meo ou igual a 20.
let numberSecreto = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let recorde = 0;
//btn 'check!'.
const btnCheck = document.querySelector('.check');
//variave para incluir messagem.
const mensagemDisplay = document.querySelector('.message');
//variavel para exibir o numberSecreto.]
const numeroSecretoDisplay = document.querySelector('.number');
//variavel para pontuaçãoRecorde.
const pontuaçãoRecorde = document.querySelector('.highscore');
//variavel para score.
const scoreInicial = document.querySelector('.score');

//evento de click para o botão 'check!'
btnCheck.addEventListener('click', function () {
  //variavel para armazenar os numeros digitados enviado enn string e usando Number(para transformar en número
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //se guess for menor que 1, avisa que é invalido e encerra a função aqui
  if (guess < 1) {
    mensagemDisplay.textContent = `⛔Número Inválido !!`;
    return;
  }
  //se guess for igual ao número sorteado, implementa esse código.
  else if (guess === numberSecreto) {
    mensagemDisplay.textContent = `🎉📊 Meus Parabéns !!`;
    numeroSecretoDisplay.textContent = numberSecreto;
    document.querySelector('body').style.backgroundColor = `#60b347`;
    pontuaçãoRecorde.textContent = score;
    //se score for maior que recorde, recorde vira esse novo recorde = score e retorna para variavel.
    if (score >= recorde) {
      recorde = score;
    }
    pontuaçãoRecorde.textContent = recorde;
    return;
  }
  //aqui verificamos se score é maior ou menor que 0 && se numberSecreto for menor ou maior que guess(numero digitado nno input!!)
  //score-- dimiui o score de 20 em meos 1
  else if (score > 0 && numberSecreto < guess) {
    mensagemDisplay.textContent = `📈 Número Alto !`;
    score--;
    scoreInicial.textContent = score;
  } else if (score > 0 && numberSecreto > guess) {
    mensagemDisplay.textContent = `📉 Número Baixo !`;
    score--;
    scoreInicial.textContent = score;
  } else {
    mensagemDisplay.textContent = `💣 Você Perdeu o GAME`;
    scoreInicial.textContent = score = 0;
  }
});

//estabelecendo um reset para as configurações padrões do game antes de iniciar o GAME.
document.querySelector('.again').addEventListener('click', function () {
  numberSecreto = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.guess').value = '';
  numeroSecretoDisplay.textContent = `?`;
  mensagemDisplay.textContent = `Comece a Adivinhar...`;
  pontuaçãoRecorde.textContent = `${recorde}`;
  document.querySelector('body').style.backgroundColor = `#222`;
  scoreInicial.textContent = score;
});
