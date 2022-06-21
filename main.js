// gerencia o Canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');


const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
ctx.clearRect(0, 0, width,height);


// gera um número aleatório
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// gera uma cor aleatória
function randomRGB() {
  return `rgb(255, 255, 255)`;
}


//define um vetor de bolas
const bolas = [];

while (bolas.length < 25) {
   const size = random(10,20);
   const bola = new Bola(
      // posição de sempre uma bola de distância
      // fora das bordas para evitar erros de desenho
      random(20 + size,50 - size),
      random(20 + size,50 - size),
      random(-7,7),
      random(-7,7),
      randomRGB(),
      size
   );

   //atualiza o vetor
  bolas.push(bola);
}

//realiza um loop em todas as bolas geradas
function loop() {
   ctx.fillStyle = 'rgba(0.1, 0.1, 0.1, 0.1)';
   ctx.fillRect(0, 0,  width, height);

   for (const bola of bolas) {
    bola.draw();
    bola.update();
    bola.collisionDetect(bolas);
   }

   requestAnimationFrame(loop);
}

loop();

