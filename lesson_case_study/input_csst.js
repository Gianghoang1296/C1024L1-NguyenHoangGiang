var canvas,
    ctx,
    menuActive = true,
    westX = 300,
    westY = 500,
    velX = 0,
    velY = 0,
    maxVelY = 6,
    speed = 3,
    jumpSpeed = 2,
    inertia = 0.92,
    keys = [],
    jumping = false,
    onGround = true,
    onPlatform = false,
    gravity = .3,
    platformX = [100,520],
    platformY = [200,110],
    groundX = [],
    groundY = [],
    platformNumber,
    currentOffsetX = 0,
    min_offset = 100,
    max_offset = 900, 
    blockstart = 0,
    groundBlocks = 20;
    const BLOCK_HEIGHT = 45,
    BLOCK_WIDTH = 45
   ;
    

window.onload = function(){
  canvas = document.getElementById("game Canvas");
  ctx = canvas.getContext("2d");
  drawMenu();
  //starts game if enter is pressed
 $(document).keypress(function(even ) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13' && menuActive == true)
          {
            menuActive = false;
            drawLevel();    //initial level draw
          }
    });
}
function drawMenu() {
    ctx.font = "50px Consolas";
    ctx.fillStyle = "#c3c3d5";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "black";
    ctx.fillText("Office Hours",340,100); 
    ctx.font = "30px Consolas";
    ctx.fillText("Press Enter To Start", 340, 300);
  }
  