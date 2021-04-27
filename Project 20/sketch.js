//Hi, I just wanted to let you know that I haven't tested the code because whenever I tried to test the code it wouldn't load and I'm not sure why
var cat, mouse;
var backgroundIMG, catIMG, catAnim, catIMG2, mouseIMG, mouseAnim, mouseIMG2;

function preload() {
    //load the images here
    backgroundIMG = loadImage("garden.png");
    catIMG = loadAnimation("cat1.png");
    catIMG2 = loadAnimation("cat4.png");
    catAnim = loadAnimation("cat2.png,cat3.png");

    mouseIMG = loadAnimation("mouse1.png");
    mouseIMG2 = loadAnimation("mouse4.png");
    mouseAnim = loadAnimation("mouse2.png,mouse3,png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,600,10,10);
    cat.addAnimation("catSit",catIMG);
    cat.addAnimation("catSit2",catIMG2);
    cat.changeAnimation("catSit");
    mouse = createSprite(200,200,10,10);
    mouse.addAnimation("mouseWalking",mouseIMG);
    mouse.addAnimation("mouseSearching",mouseIMG2);
    mouse.changeAnimation("mouseWalking");
}

function draw() {
    background(backgroundIMG);
    function keyPressed();
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        mouse.changeAnimation("mouseSearching");
        cat.changeAnimation("catSit2");
        cat.velocityX = 0;
    }

    drawSprites();
}


function keyPressed(){
    //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("mouseTease",mouseAnim);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25;
        cat.addAnimation("catWalking",catAnim);
        cat.changeAnimation("catWalking");
    }

}
