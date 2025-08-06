let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = int(random(400));
  y = int(random(400));
  noCursor(); // Oculta o cursor para maior imersão
}

function draw() {
  // Fundo dinâmico com gradiente
  for (let i = 0; i < height; i++) {
    stroke(lerpColor(color("#1E88E5"), color("#FFC107"), i / height));
    line(0, i, width, i);
  }

  // Atualiza posição do ponto
  x = constrain(x + random(-5, 5), 0, 400);
  y = constrain(y + random(-5, 5), 0, 400);

  let distancia = dist(mouseX, mouseY, x, y);

  // Partículas de destaque ao redor do ponto
  for (let i = 0; i < 10; i++) {
    let offsetX = random(-10, 10);
    let offsetY = random(-10, 10);
    fill(255, 200, 0, 150);
    noStroke();
    circle(x + offsetX, y + offsetY, 5);
  }

  // Desenha círculo dinâmico com base na distância
  noFill();
  strokeWeight(3);
  stroke(lerpColor(color("#FF1744"), color("#00E676"), map(distancia, 0, 400, 1, 0)));
  circle(mouseX, mouseY, distancia);

  // Mensagem de "Encontrei!" no centro
  if (distancia < 30) {
    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Encontrei!", width / 2, height / 2);
    noLoop();
  }
}
