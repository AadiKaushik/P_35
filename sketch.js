var dog, happyDog, database, foodS, foodStock

function preload()
{
happyDog=loadImage("images/dogImg.png");
dog=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  dog1 = createSprite(250 ,390,20,20);
  dog1.addImage(dog);
  dog1.scale= 0.3 ;


  database = firebase.database();
  foodStock = database.ref('food1')
  foodStock.on('value',readStock);

  
}


function draw() {  

  background(46, 139, 87);

  if( keyWentDown(UP_ARROW)) 
{
  
    if(foodS <= 0)
    {
      foodS=0;
    }
    else{
      foodS=foodS-1
    }
  
  writeStock(foodS);
  dog1.addImage(happyDog);
}


  drawSprites();
  //add styles here
  fill("white")
  textSize(26);
  
  stroke("red");
  strokeWeight(6)
text("there are "+ foodS +" bottles left",120,200 );
stroke("blue")
text("note: press up arrow key to feed the dog",20,40);

}

function readStock(data)
{
  foodS = data.val();
}
 
function writeStock(x){


  database.ref('food1').update({

  })
}




