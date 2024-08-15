//Primeiro joguinho com js feito com ajuda do curso, com algummas pequenas partes feita por mim antes de ver o video.
//meu código
//CHALLENGE#GAME -1

//criando número ateátorio igual meo ou igual a 20.
let numberSecreto = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let recorde = 0;

//evento de click para o botão 'check!'
document.querySelector('.check').addEventListener('click', function () {
  //pegando value do input com class = 'guess'
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //se guess for menor que 1, avisa que é invalido e encerra a função aqui.
  if (guess < 1) {
    document.querySelector('.message').textContent = `⛔Número Inválido !!`;
    return;
  }

  //se guess for igual ao número sorteado, implementa esse código.
  if (guess === numberSecreto) {
    document.querySelector('.message').textContent = `🎉📊 Meus Parabéns !!`;
    document.querySelector('.number').textContent = numberSecreto;
    document.querySelector('body').style.backgroundColor = `#60b347`;
    document.querySelector('.highscore').textContent = score;
    //se score for maior que recorde, recorde vira esse novo recorde = score e retorna para variavel.
    if (score >= recorde) {
      recorde = score;
    }
    document.querySelector('.highscore').textContent = recorde;
    return;
  }
  if (score > 0 && numberSecreto < guess) {
    document.querySelector('.message').textContent = `📈 Número Alto !`;
    score--;
    document.querySelector('.score').textContent = score;
  } else if (score > 0 && numberSecreto > guess) {
    document.querySelector('.message').textContent = `📉 Número Baixo !`;
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = `💣 Você Perdeu o GAME`;
    document.querySelector('.score').textContent = score = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  numberSecreto = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = `?`;
  document.querySelector('.message').textContent = `Comece a Adivinhar...`;
  document.querySelector('.highscore').textContent = `${recorde}`;
  document.querySelector('body').style.backgroundColor = `#222`;
  document.querySelector('.score').textContent = score;
});
