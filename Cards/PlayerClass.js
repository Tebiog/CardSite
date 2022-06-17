
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
        if(Card != null){
                 CardArr.push(Card);
        let div = document.createElement('div');
        let cardIndex;
        switch(Card.GetSuit()){
            case "♥":{
                cardIndex = 1;
                break;
            }
            case "♠":{
                cardIndex = 2;
                break;
            }
            case "♦":{
                cardIndex = 3;
                break;
            }
            case "♣":{
                cardIndex = 4;
                break;
            }
            default:{
                console.log("aaaaaa");
            }
        }
        div.className = Card.GetValue()+cardIndex+".png";
        div.style.height = "312px";
        div.style.width = "225px";
        div.style.backgroundImage = `url('CardsPng/${Card.GetValue()+cardIndex}.png')`;
        div.style.padding = 100;
        document.getElementById("CradsDiv").appendChild(div);   
        }

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
    this.DealCard = (game) => {
            let playerCardsCount = CardInit.GetCountCard() / game.GetPlayerCount();
            let tmpCard;
            tmpCard = game.GetCD().TakeRandomCard();
            this.AddCard(tmpCard);                       
    }

}
var Game = function(playersAmmount) {
    var Players = [];
    var cd;
    this.SetCD = () => {
        cd = new CardDeck;
        cd.StartGame();
    }
    this.GetCD = () => {
        return cd;
    }
    this.AddPlayer = (TmpPlayer) => {
        if(TmpPlayer == null){
            let player = new Player;
            Players.push(player);
        }
        else{
            Players.push(TmpPlayer);
        }
        console.log(Players.length);
    }

    this.Start = () => {
        for(let i = 0; i < Players.length; i++){
            if(Players[i].GetCountCard() < 8){
                Players[i].DealCards();
            }
        }
    }

    this.GetPlayer = (index) => {
        if(Players[index] != null){
            return Players[index];
        }
        Players[0].Turn();  
    }
    this.GetPlayerCount = () => {
        return Players.length;
    }
    this.AddPlayers = (playerCount) => {
        for(let i = 0; i < playerCount; i++){
            Players.push(new Player);
        }
        console.log(Players.length);    
        Players[0].Turn();    
    }

    this.SetCD();


}


