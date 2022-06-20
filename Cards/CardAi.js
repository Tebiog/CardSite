var CardAI = function(udifficulty){
    let difficulty;
    let AllAI = [];
    this.SetDifficulty = (tdifficulty) => {
        difficulty = tdifficulty;
    }
    this.nextTurn = (game) =>{
        for(let i = 0; i < AllAI.length; i++){
            console.log(AllAI[i].isTurn());
            if(AllAI[i].isTurn() == true){
                    console.log("USDGFYUHSD");
                    let choosenCard = AllAI[i].GetCardFromArr();
                    game.SetActiveCard(choosenCard);
                    game.SetNextTurn(AllAI[i+1]);
                    document.getElementById(choosenCard.GetValue() + choosenCard.GetIndex() + ".png").remove();
                    document.getElementById("ActiveCard").style.backgroundImage = `url('CardsPng/${Card.GetValue()+cardIndex}.png')`;
                }
            }
    }
    this.SetTurn = (index) => {
        AllAI[index].Turn;
        
    }
    this.DealCardToAllAI = (cd, game) => {
        for(let i = 0; i < AllAI.length; i++){
            console.log(i);
            for(let j = 0; j < 6; j++){
                AllAI[i].AddCard(cd.TakeRandomCard(), game, this, i+1);            
            }
        }
    }
    this.SetAI = (player) => {
        AllAI.push(player);
    }
    this.TestTextFunc = () => {
        console.log("Ok")
    }
    this.SetDifficulty(udifficulty);
}