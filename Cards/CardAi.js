var CardAI = function(udifficulty, uplayer){
    let difficulty;
    this.SetDifficulty = (tdifficulty) => {
        difficulty = tdifficulty;
    }
    this.nextTurn = () =>{
        if(difficulty == "easy"){
            console.log("easy");
        }
        if(difficulty == "hard"){
            console.log("hard");
        }
    }
    this.SetDifficulty(udifficulty);
}