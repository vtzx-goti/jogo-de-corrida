function setup() {
  createCanvas(400, 400);
}

let xJogador = [0, 0, 0, 0];
let yJogador = [75, 150, 225, 300];
let jogador = ["🚐", "🚑", "🚓", "🚌"];
let teclas = ["a", "s", "d", "f"];
let quantidade = jogador.length;

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    background("#8B8D89");
  } else {
    background("#2F3031");
  }
}

function desenhaJogadores() {
  textSize(40);
  for (let i = 0; i < quantidade; i++) {
    text(jogador[i], xJogador[i], yJogador[i]);
  }
}

function desenhaLinhaDeChegada() {
  fill("rgb(252,244,244)");
  rect(385, 0, 50, 400);
  fill("rgba(2,2,2,0.87)");
  for (let yAtual = 0; yAtual < 400; yAtual += 20) {
    rect(385, yAtual, 50, 10);
  }
}

function verificaVencedor() {
  for (let i = 0; i < quantidade; i++) {
    if (xJogador[i] > 350) {
      text(jogador[i] + " venceu!", 50, 200);
      noLoop();
    }
  }
}

function keyReleased() {
  for (let i = 0; i < quantidade; i++) {
    if (key == teclas[i]) {
      xJogador[i] += random(20);
    }
  }
}
