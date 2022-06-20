
var Player = function(){
    var CardArr = []; 
    var isWin = false;
    var isTurn = false;
    
    this.GetCountCard = () => {
        return CardArr.length;
    }
    this.GetCardIndex = (Card) => {
        switch(Card.GetSuit()){
            case "♥":{
                return 1;
                break;
            }
            case "♠":{
                return 2;
                break;
            }
            case "♦":{
                return 3;
                break;
            }
            case "♣":{
                return 4;
                break;
            }
            default:{
                console.log("aaaaaa");
            }
        }
    }
    this.GetCardFromArr = (game, AI, playerC) => {
        let ActiveCard = game.GetActiveCard();
        while(true){
            for(let i = 0; i < CardArr.length; i++){
                if(CardArr[i].GetPoints() > ActiveCard.GetPoints()){
                    return CardArr[i];
                }
            }
            this.DealCard(game, AI, playerC)
        }
    }
    this.Turn = () => {
        isTurn = true;
    }
    this.UnTurn = () => {
        isTurn = false;
    }
    this.isTurn = () => {
        return isTurn;
    }
    this.AddCard = (Card, game, AII, playerC) => {
        if(Card != null){
                 CardArr.push(Card);
        let div = document.createElement('div');
        let cardIndex = this.GetCardIndex(Card);
        div.className = Card.GetValue()+cardIndex+".png";
        div.addEventListener('click', (e)=>{
            if(isTurn){
                div.remove();
                game.SetActiveCard(Card);
                isTurn = false;
                game.SetNextTurn(AII);
                document.getElementById("ActiveCard").style.backgroundImage = `url('CardsPng/${Card.GetValue()+cardIndex}.png')`;
            }
        })
        div.style.height = "312px";
        div.style.width = "225px";
        if(playerC != 0){
            div.style.backgroundImage = `url('CardsPng/CardBack.jpg')`;
            if(playerC == 1){
                div.style.transform = "rotate(90deg)";
            }
            if(playerC == 2){
                div.style.transform = "rotate(180deg)";
            }
            if(playerC == 3){
                div.style.transform = "rotate(90deg)";
            }
        }
        else{
            div.style.backgroundImage = `url('CardsPng/${Card.GetValue()+cardIndex}.png')`;           
        }

        div.style.margin = 10;
        let divName = "CradsDiv" + playerC;
        console.log(divName);
        document.getElementById(divName).appendChild(div);   
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
    this.DealCard = (game, AI, playerC) => {
            let tmpCard;
            tmpCard = game.GetCD().TakeRandomCard();
            this.AddCard(tmpCard, game, AI , playerC);                       
    }
}
var Game = function(playersAmmount) {
    var Players = [];
    var cd;
    var activeCard;
    var i = 0;
    this.SetActiveCard = (aC) => {
        activeCard = aC;
    }
    this.GetActiveCard = () => {
        return activeCard;
    }
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
    this.GetPlayer = (index) => {
        if(Players[index] != null){
            return Players[index];
        }
        Players[0].Turn();  
    }
    this.GetPlayerCount = () => {
        return Players.length;
    }
    this.AddPlayers = (playerCount, CaAI) => {
        for(let i = 0; i < playerCount; i++){
            Players.push(new Player);
        }
        Players[0].Turn();   
        for(let i = 1; i < playerCount; i++){
            CaAI.SetAI(Players[i]);
        } 
    }
    this.SetNextTurn = (CarAI) => {
        i++;
        if(i>Players.length){
            i=0;
        }
        Players[i].isTurn();
        console.log("Turn: "+ i);
        if(i != 0){
            CarAI.SetTurn(i+1);
            CarAI.nextTurn(this);
        }
    }
    this.SetCD();


}


