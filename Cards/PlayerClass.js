
var Player = function(){
    var CardArr = []; 
    var isWin = false;
    var isTurn = false;
    this.Turn = () => {
        isTurn = true;
    }
    this.UnTurn = () => {
        isTurn = false;
    }
    this.isTurn = () => {
        return isTurn;
    }
    this.AddCard = (Card) => {
        CardArr.push(Card);
       
        let div = document.createElement('div');
        div.className = Card.GetSuit() + "img";
        div.style.height = 225;
        div.style.width =312;
        div.style.backgroundColor = "green";
        div.style.padding = 100;
    }
    this.RemoveCard = (Card) => {
        if(CardArr.length != 0) {
        CardArr.remove(Card);
        }
        else
        {
            return true;
        }  
    }


}
var Game = function(playersAmmount) {
    var Players = [];
    var cd;
    this.SetCD = (crdd) => {
        cd = crdd;
    }
    this.AddPlayer = (TmpPlayer) => {
        if(TmpPlayer == null){
            let player = new Player;
            for(let i = 0; i < 8; i++){
                player.DealCards(cd);
            }
            Players.push(player);
        }
        else{
            Players.push(TmpPlayer);
        }
        console.log(Players.length);
    }

    this.GetPlayer = (index) => {
        return Players[index];
    }
    this.GetPlayerCount = () => {
        return Players.length;
    }

    this.AddPlayers = (playerCount) => {
        let player = new Player;
        for(let i = 0; i < playerCount; i++){
            Players.push(player);
        }
        console.log(Players.length);        
    }

    this.DealCards = () => {
        if(Players.length >= 2){
            let playerCardsCount = CardInit.GetCountCard() / Players.length();
            for(let i = 0; i < Players.length; i++){
                for(let j = 0; j < playerCardsCount; j++){
                    Players[i].AddCard(cd.TakeRandomCard());
                }
            }
            
        }
    }


}


