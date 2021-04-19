//(202, 167, 245) cor violeta
var nivel = 1;
var nivel = 2
var escolhaFase = 0

var deslocamentoBotaoMenu = 75
var xMinBotao = 210
var larguraBotao = 175
var xMaxBotao = xMinBotao + larguraBotao
var alturaBotao = 50

var yMinBotao1 = 128
var yMaxBotao1= yMinBotao1 + alturaBotao

var yMinBotao2 = yMinBotao1 + deslocamentoBotaoMenu
var yMaxBotao2 = yMinBotao2 + alturaBotao

var yMinBotao3 = yMinBotao1 + 2 * deslocamentoBotaoMenu
var yMaxBotao3 = yMinBotao3 + alturaBotao


var ImagemCredito1
var ImagemCredito2
var ImagemFundo

var tela = 0
//tela0 menu
//tela1 jogo, fase 1
//tela2 instruções
//tela3 credito

function opcaoBotao(xMin, xMax, yMin, yMax, largura, altura, opcao) { 
    if (mouseX > xMin && mouseX < xMax && mouseY > yMin && mouseY < yMax){   
    fill(250);
    if (mouseIsPressed) {
        escolhaFase = opcao;
        console.log("Escolha: ", escolhaFase)
    }
    } else {
      noFill();
    }
    rect(xMin, yMin, largura, altura, 15);
    textSize(26);
    fill(0);
}

function fase1(){
  image (ImagemFundo, 0, 0)
  fill(255)
  rect(60, 40, 470, 50)
  textSize(18);
  fill(0);
  textFont('Georgia');
  text("ASSOCIE AS SOMBRAS DAS FORMAS GEOMÊTRICAS",70, 57, 450);
  fill(255)
  rect(35, 120, 80, 100)
  rect(125, 120, 80, 100)
  rect(215, 120, 80, 100)
  rect(305, 120, 80, 100)
  rect(395, 120, 80, 100)
  rect(485, 120, 80, 100)
  rect(35, 240, 80, 100)
  rect(125, 240, 80, 100)
  rect(215, 240, 80, 100)
  rect(305, 240, 80, 100)
  rect(395, 240, 80, 100)
  rect(485, 240, 80, 100)
  fill(0)
  triangle(320, 310, 343, 265, 370, 310);
  triangle(50, 190, 73, 145, 100, 190);
  circle(163, 170, 40)
  circle(163, 290, 40)
  rect(223, 145, 65, 45)
  rect(403, 265, 65, 45)
  square(320, 145, 45)
  square(410, 145, 45)
  square(493, 150, 37)
  triangle(530, 187, 530, 150, 560, 187);
  square(223, 270, 37)
  triangle(260, 307, 260, 270, 290, 307);
  ellipse(75, 290, 65, 45);
  ellipse(525, 290, 65, 45); 
}

function fase2(){
  image (ImagemFundo, 0, 0)
  fill(255)
  rect(25, 40, 550, 50)
  textSize(18);
  fill(0);
  textFont('Georgia');
  text("ASSOCIE AS FORMAS GEOMÊTRICAS, AGORA COM CORES",30, 57, 530);
  fill(255)
  rect(35, 120, 80, 100);
  rect(125, 120, 80, 100);
  rect(215, 120, 80, 100);
  rect(305, 120, 80, 100);
  rect(395, 120, 80, 100);
  rect(485, 120, 80, 100);
  rect(35, 240, 80, 100);
  rect(125, 240, 80, 100);
  rect(215, 240, 80, 100);
  rect(305, 240, 80, 100);
  rect(395, 240, 80, 100);
  rect(485, 240, 80, 100);
  fill("red")
  triangle(320, 310, 343, 265, 370, 310);
  triangle(50, 190, 73, 145, 100, 190);
  fill("yellow")
  circle(163, 170, 40);
  circle(163, 290, 40);
  fill("blue")
  rect(223, 145, 65, 45);
  rect(403, 265, 65, 45);
  fill("green")
  square(320, 145, 45);
  square(410, 145, 45);
  fill("orange")
  square(493, 150, 37);
  triangle(530, 187, 530, 150, 560, 187);
  square(223, 270, 37);
  triangle(260, 307, 260, 270, 290, 307);
  fill("pink")
  ellipse(75, 290, 65, 45);
  ellipse(525, 290, 65, 45);   
}

function mouseClicked(){
  if(tela==1 && nivel ==1){
    if(escolhaFase == 1 && escolhaFase == 2 || escolhaFase == 1 && escolhaFase == 3 ||escolhaFase == 1 && escolhaFase == 4 ||escolhaFase == 1 && escolhaFase == 5 || escolhaFase == 1 && escolhaFase == 6 || escolhaFase == 1 && escolhaFase == 7 || escolhaFase == 1 && escolhaFase == 8 || escolhaFase == 1 && escolhaFase == 9 || escolhaFase == 1 && escolhaFase == 11 || escolhaFase == 1 && escolhaFase == 12 ) {
       tela = 4
       }
      if(escolhaFase == 1 && escolhaFase == 10 ){
        nivel = 2
      }
        
  }
}

function gameOver(){
  background("white");
  textSize(50)
  fill(0)
  text("NÃO FOI DESSA VEZ. TENTE NOVAMENTE",80,220,450)
  
  
}

function menuBotao (texto, yMin, yMax, opcao){
    if (mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMin && mouseY < yMax){
      fill(45, 210, 255)
      if (mouseIsPressed){
        tela = opcao;
      }
    } else {
      fill(41, 170, 255)
    }
    rect(xMinBotao, yMin, larguraBotao, alturaBotao, 15)
    textSize(20)
    fill(0)
    textAlign(CENTER)
    text(texto, xMinBotao+ 85, yMin + 30)
}
  
function telaMenu() {
    image (ImagemFundo,0, 0)
    fill(255)
    noStroke()
    ellipse(170, 49, 45, 45);
    ellipse(211, 53, 45, 45);
    ellipse(298, 48, 60, 45);
    ellipse(250, 35, 60, 45);
    ellipse(332, 49, 55, 45);
    ellipse(365, 40, 35, 45);
    ellipse(400, 43, 56, 45);
    ellipse(250, 86, 45, 45);
    ellipse(285, 85, 45, 45);
    ellipse(319, 89, 45, 45);
    ellipse(170, 49, 45, 45);
    ellipse(160, 80, 45, 45);
    ellipse(185, 80, 45, 45);
    ellipse(215, 87, 56, 45);
    ellipse(350, 83, 45, 45);
    ellipse(380, 86, 55, 45);
    ellipse(420, 83, 55, 45);
    ellipse(445, 45, 55, 45);
    ellipse(140, 70, 45, 45);
    ellipse(295, 70, 330, 60);

    textSize(37);
    fill(0,0,255);
    text("SKY MEMORIES", 298, 85);
   

    textFont('cursive');
    menuBotao("Jogar", yMinBotao1, yMaxBotao1, 1);
    menuBotao("Instruções", yMinBotao2, yMaxBotao2, 2);
    menuBotao("Créditos", yMinBotao3, yMaxBotao3, 3);
 }

function telaJogar(){
  if(keyIsDown(ESCAPE)){
    tela = 0
  }
  background("white");
  textSize(35);
  fill(10);
  text("JOGAR", 180, 70);
  textSize(16);
  text("FASES", 50,120, 460)
}

function telaInstrucoes(){
  if(keyIsDown(ESCAPE)){
    tela = 0
  }
  image (ImagemFundo, 0, 0)
  textSize(35);
  textFont('Georgia')
  fill(0);
  text("INSTRUÇÕES", 289, 70);
  textSize(17);
  text("1 - Use o mouse para selecionar duas cartas.", 60,120,480)
  text("2 - Observe se as formas são iguais, se sim continue jogando, se não comece de novo.", 60, 145,480 )
  text("3 - Responda as perguntas, quando feitas.", 60, 190,480)
  text("4 - Associe as imagens semelhantes.", 60, 214, 480)
  text("5 - Use a tecla 'Escape' para voltar para a tela inicial/menu.",60, 240, 480)
}

function telaCreditos(){
  if(keyIsDown(ESCAPE)){
    tela = 0
  }
  image (ImagemFundo, 0, 0)
  fill (41, 170, 255)
  rect (30, 105, 532, 120)
  rect(30, 242, 532, 120)
  textSize(35);
  fill(0);
  textFont('Georgia'); 
  text("CRÉDITOS",275, 80);
  textSize(20);
  text("ANÁLIA GOMES", 240,140);
  textSize(18);
  text("Função: educador.", 236, 160);
  textSize(16);
  fill(25);
  text("Graduanda de Pedagogia pela Universidade Potiguar, UNP.", 160, 168, 387);
  textSize(20);
  fill(10)
  text("LAYNA ANTUNES", 240, 272)
  textSize(18);
  text("Função: programadora.", 250,292)
  textSize(16)
  fill(25)
  text("Graduanda em Bacharelado em Ciências e Tecnologia  pela Universidade Federal do Rio Grande do Norte,      UFRN.", 158, 300, 385) 
  
  image (ImagemCredito1, 40, 115);
  image (ImagemCredito2, 40, 252); 
}

function preload(){
    ImagemCredito1 = loadImage ("foto_educadora.png")
    ImagemCredito2 = loadImage ("foto_programadora.png")
    ImagemFundo = loadImage ("Fundo.jpg")
    
  }

function setup() {
  createCanvas(600,400); 
}

function draw() {
  if(tela==0){
    telaMenu();
  }
  if(tela==1){
    telaJogar();
    if(nivel ==1){
       fase1();
    }
    if(nivel == 2){
      fase2()
    }
  }
  if(tela == 2){
      telaInstrucoes();
     }
  if(tela == 3){
    telaCreditos();  
    }
  if(tela == 4){
    gameOver();
  }
}