class Player{
    constructor(){
this.index = null;
this.distance = 0;
this.name = null;
    }
    // getting count from the database
    getCount(){
        var playerCountRef = database.ref('playerCount')
        playerCountRef.on("value", function(data){
            playerCount = data.val();

        })
    }
    // updating the count in the database
    updateCount(count){
        //  back slash represants root directory
        database.ref('/').update({
            playerCount : count
        })
    }
    // updating the player count in the database
    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name : this.name,
            distance : this.distance
        })
    }
static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value", (data) => {
        allPlayers = data.val();
    } )
}
}

