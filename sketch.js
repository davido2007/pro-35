//Create variables here
var dog, happydog, database, foodS, foodStock;
function preload()
{
  //load images here
  dog_img = loadImage("images/Dog.png");
  happydog_img = loadImage("images/happydog.png");

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  
  dog = createSprite(250,250);
  dog.addImage("dog",dog_img);

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(45,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
  drawSprites();
  //add styles here
  text("press UP_ARROW key to Feed Drago Milk!"(250,10))
  textSize(20)
fill(white)
stroke(black)
}


}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}
