class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "Players/Player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
    });
  }
  static getPlayerinfo(){
    var playerinforef = database.ref("Players/Player");
    playerinforef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
