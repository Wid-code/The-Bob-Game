// Bob download
var bob = document.getElementById("bob");
// Energy Bar download
var energyBar = document.getElementById("energyBarInside");
// Points download
var point = document.getElementById("points");

//Loading first level
var currentLevel = 1;
loadLevel(currentLevel);
bobRespawn();

// Bob movement
var isLeftDown = false;
var isRightDown = false;
var isSpaceBarDown = false;

// Allowing the movement when key is pressed
document.addEventListener("keydown", (event)=>{
    // left
    if(event.keyCode == 37){
        isLeftDown = true;
    }
    // right
    else if(event.keyCode == 39){
        isRightDown = true;
    }
    // spaceBar
    else if(event.keyCode == 32){
        isSpaceBarDown = true;
        velocity = -5;
    }
    
})
// Stoping the movement when key is not pressed
document.addEventListener("keyup", (event)=>{
    // left
    if(event.keyCode == 37){
        isLeftDown = false;
    }
    // right
    else if(event.keyCode == 39){
        isRightDown = false;
    }
    // spaceBar
    else if(event.keyCode == 32){
        isSpaceBarDown = false;
    }
})

// Bob respawn
function bobRespawn(){
    bobSpawnCoordinates.forEach(element => {
        if(element.level == currentLevel){
            bob.style.top = element.top;
            bob.style.left = element.left;
        }
    });
}


// Gravity & Energy
var gravity = 5;
var energy = 300;
var canMoveLeft = true;
var canMoveRight = true;

setInterval(() => {

    var bobProperties = {
        x: bob.getBoundingClientRect().x,
        y: bob.getBoundingClientRect().y,
        height: bob.getBoundingClientRect().height,
        width: bob.getBoundingClientRect().width,
        velocityX: 0,
        velocityY: 0,
        inAir: true
    }

    // Checking if Bob has fallen out of map
    function outOfMap(objectOne){
        if(objectOne.y >= window.innerHeight || objectOne.y < 0){
            console.log("dsdd");
            bobRespawn();
        }
        if(objectOne.x + objectOne.width <=0 || objectOne.x >= window.innerWidth){
            bobRespawn();
        }
    }

    
    // Checking if Bob has touched any vertical or horizontal walls
    function gravityUpDownCheck(objectOne, objectTwo){
     
        if(objectOne.x <= objectTwo.x + objectTwo.width && objectOne.x > objectTwo.x || objectOne.x + objectOne.width  <= objectTwo.x+objectTwo.width && objectOne.x + objectOne.width > objectTwo.x){
            if(objectOne.y -5 < objectTwo.y + objectTwo.height && objectOne.y > objectTwo.y){
                bobProperties.inAir = false;
                bobProperties.velocityY = 5;
                isSpaceBarDown = false;
                return true;
            } else  if(objectOne.y + objectOne.height +5> objectTwo.y && objectOne.y + objectOne.height < objectTwo.y +objectTwo.height){
                bobProperties.inAir = false;
                bobProperties.velocityY = 0;
                return true;
            }
            else{
                return false;
            }
        }
        else{
        return false;
        }
    }
    function gravityLeftRightCheck(objectOne, objectTwo){
    
        if(objectOne.y <= objectTwo.y + objectTwo.height && objectOne.y > objectTwo.y || objectOne.y + objectOne.height  <= objectTwo.y+objectTwo.height && objectOne.y + objectOne.height -20> objectTwo.y){

            if(objectOne.x -5< objectTwo.x + objectTwo.width && objectOne.x > objectTwo.x){
                bobProperties.inAir = false;
                bobProperties.velocityX = 0;
                // bobProperties.velocityY = 5;
                canMoveLeft = false;
                 return true;  

            }else if(objectOne.x + objectOne.width +5 > objectTwo.x && objectOne.x + objectOne.width < objectTwo.x + objectTwo.width){
                bobProperties.inAir = false;
                bobProperties.velocityX = 0;
                // bobProperties.velocityY = 5;
                canMoveRight = false;
                 return true;  
            }
        }   
        else{
            canMoveLeft = true;
            canMoveRight = true;
            return false;
        }
    }
    bobProperties.inAir = true;
    bobProperties.velocityY = gravity;
    for (let index = 0; index < objects.length; index++) {
        if(objects[index].objectType=="wall"){
        const isCollisionVertical = gravityUpDownCheck(bobProperties, objects[index]);
        if(isCollisionVertical){
            objects[index].doAction();
            break;
        };
    }
    }
    for (let index = 0; index < objects.length; index++) {
        if(objects[index].objectType=="wall"){
        const isCollisionHorizontal = gravityLeftRightCheck(bobProperties, objects[index]);
        if(isCollisionHorizontal){
            objects[index].doAction();
            break;
        };
    }
    }

    // Detecting collision ith point
   function pointCollision(objectOne, objectTwo, index) {
        if (objectOne.x < objectTwo.x + objectTwo.width &&
            objectOne.x + objectOne.width > objectTwo.x &&
            objectOne.y < objectTwo.y + objectTwo.height &&
            objectOne.y + objectOne.height > objectTwo.y){
                point.innerText++;
                playPointSound();
                objectTwo.remove();
                objects[index] = {}
        }
    }
    for (let index = 0; index < objects.length; index++) {
        if(objects[index].objectType=="point"){
        const isCollisionPoint = pointCollision(bobProperties, objects[index], index);
        if(isCollisionPoint);
        break;
    }
    }

    // Detecting when Bob enters the tunel
   function tunelCollision(objectOne, objectTwo) {
    if (objectOne.x < objectTwo.x + objectTwo.width &&
        objectOne.x + objectOne.width > objectTwo.x &&
        objectOne.y < objectTwo.y + objectTwo.height &&
        objectOne.y + objectOne.height > objectTwo.y){
            bobProperties.velocityY -= 8;
    }
}
for (let index = 0; index < objects.length; index++) {
    if(objects[index].objectType=="tunel"){
    const isCollisiontunel = tunelCollision(bobProperties, objects[index]);
    if(isCollisiontunel) break;
}
}

    // Detecting when Bob enters the portal to the next level
    function nextLevelPortal(objectOne, objectTwo){
        if(objectOne.x < objectTwo.x + objectTwo.width &&
            objectOne.x + objectOne.width > objectTwo.x &&
            objectOne.y < objectTwo.y + objectTwo.height &&
            objectOne.y + objectOne.height > objectTwo.y){
               if(document.getElementsByClassName("point").length <= 0){
                loadLevel(++currentLevel);
                bobRespawn();
               } 
            }
    }
    for (let index = 0; index < objects.length; index++) {
        if(objects[index].objectType=="portal"){
        const isCollisionportal = nextLevelPortal(bobProperties, objects[index]);
        if(isCollisionportal) break;
    }
    }
    
    // Bob movement
    var velocityX = bobProperties.x;

    if(isLeftDown && canMoveLeft){
        velocityX-=5;
        bob.style.left = velocityX + "px";
    }
    if(isRightDown && canMoveRight){
        velocityX+=5;
        bob.style.left = velocityX + "px";
    }
    if(isSpaceBarDown){
        
        if(energy>5){
            bobProperties.velocityY-=10; 
            energy-=3;
        }
    }
    else{
        if(energy<300){
            energy+=1;
        }
    }
    bob.style.top = bobProperties.y + bobProperties.velocityY + "px";
    energyBar.style.width = energy + "px";
    outOfMap(bobProperties);

}, 10);

// Point sound
function playPointSound(){
    var pointSound = new Audio('audio/point.mp3');
    pointSound.play();
}

