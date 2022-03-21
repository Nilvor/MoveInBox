const ScorePlayer = document.querySelector("#Score");
const EnemyBall = document.querySelector("#Ball");
const StartMessage = document.querySelector(".PStart");
const StartBtn = document.querySelector(".StartBtn");
const PadGame = document.querySelector(".Pad");
const Game = document.querySelector(".Game");


let LocPad = PadGame.getBoundingClientRect();
let LocGame = Game.getBoundingClientRect();


let keys={
    ArrowUp: false,
    ArrowRight: false,
    ArrowDown: false,
    ArrowLeft: false,
}

document.addEventListener("keydown",KeyIn);
document.addEventListener("keyup",KeyOut);

function KeyIn(e){
    e.preventDefault();
    keys[e.key] = true;
}

function KeyOut(e){
    e.preventDefault();
    keys[e.key] = false;
}

let player ={
    Score :0,
    TotalBall :0,
    InPlay :false,
    Speed :10,
}

StartBtn.addEventListener("click",StartGame);

function StartGame() {
    StartMessage.style.display="none";
    StartBtn.style.display = "none";
    player.score= 0;
    player.inplay= true;
    ScorePlayer.TextContent = player.Score;
    EnemyBall.textContent = player.TotalBall;
    requestAnimationFrame(PlayGame);
}

function PlayGame(){
    if(player.inplay){

        if(keys.ArrowUp && LocPad.y > 100){
            LocPad.y -= player.Speed;
        }
        if(keys.ArrowRight && LocPad.x < (LocGame.width - LocPad.width - 20 )){
            LocPad.x += player.Speed;
        }
        if(keys.ArrowDown && LocPad.y < (LocGame.height - LocPad.height - 20 )){
            LocPad.y += player.Speed;
        }
        if(keys.ArrowLeft && LocPad.x>10){
            LocPad.x -= player.Speed;
        }
        PadGame.style.left = LocPad.x + "px";
        PadGame.style.top = LocPad.y + "px";
        requestAnimationFrame(PlayGame);

    }
}

