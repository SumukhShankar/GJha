class Game {
  constructor() { }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })

  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }

   async start() {
    if (gameState === 0) {
      player = new Player();
      var playercountref = await database.ref("playerCount").once("value");
      if(playercountref.exists()) {
        playerCount = playercountref.val();
        player.getCount();
      }
     
      form = new Form()
      form.display();
    }
  }

  play() {
    form.FormHide();
    textSize(30);
    text("Game Start", 120, 100);
    Player.getPlayerinfo();
    if (allPlayers !== undefined) {
      var y_pos = 130;

      for (var plr in allPlayers) {
        if (plr === "Player" + player.index) {
          fill("red");
        }
        else {
          fill("black");
        }
        y_pos += 20;
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120, y_pos);
      }

    }

    if(keyIsDown("UP_ARROW") && player.index !== null){

      player.distance += 50;
      player.update();

    }




  }
}
