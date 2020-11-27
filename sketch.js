var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

var finishedPlayers = 0;
var passedFinish,bronze_img ,gold_img , silver_img;

function preload(){
  track = loadImage("https://raw.githubusercontent.com/vishnupriya-whitehatjr/CarGameRank/master/images/track.jpg");
  car1_img = loadImage("https://raw.githubusercontent.com/vishnupriya-whitehatjr/CarGameRank/master/images/car1.png");
  car2_img = loadImage("https://raw.githubusercontent.com/vishnupriya-whitehatjr/CarGameRank/master/images/car2.png");
  car3_img = loadImage("https://raw.githubusercontent.com/vishnupriya-whitehatjr/CarGameRank/master/images/car3.png");
  car4_img = loadImage("https://raw.githubusercontent.com/vishnupriya-whitehatjr/CarGameRank/master/images/car4.png");
  //ground = loadImage("/images/ground.png");
  silver_img = loadImage("https://raw.githubusercontent.com/vishnupriya-whitehatjr/CarGameRank/master/images/silver.png");
  gold_img = loadImage("https://raw.githubusercontent.com/vishnupriya-whitehatjr/CarGameRank/master/images/gold.png");
  bronze_img = loadImage("https://raw.githubusercontent.com/vishnupriya-whitehatjr/CarGameRank/master/images/bronze.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4 && finishedPlayers === 0){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2 && finishedPlayers === 4){
    //game.end();
    game.displayRank();
  }
  if(finishedPlayers ===4){
    game.update(2);
  }
}
