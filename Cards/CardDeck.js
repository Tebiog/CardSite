var CardDeck = function(options = {}) { 
    var Cards = [];
    this.GetOneCard = (index) => {
        if(typeof(index) == "int"){
            return Cards[index];
        }
    }
    this.InitCards = () =>{
        Cards = CardInit.InitCards();
    }
    this.Shuffle = () =>{
        let tmp = [];
        let bannednums = [];
        let flag = false;
        let num;
        while(true){
            num = Math.floor(Math.random() * 36);
            for(let j = 0; j < bannednums.length; j++){
                if(bannednums[j] == num){
                    flag = true;
                }
            }
            if(flag == true){
                flag = false;
            }
            else{
                tmp.push(Cards[num])
                bannednums.push(num);
            }
            if(tmp.length > 35){
                break;
            }
        }
        Cards = tmp;
    }
    this.ChooseTrump = () =>{
     let trump = suitArr[Math.floor(Math.random() * 4)];
     console.log(`Trump is: ${trump}`);
     for(let i = 0; i < CardInit.GetCountCard(); i++){
        if(typeof(Cards[i]) == "object"){
            if(Cards[i].GetSuit() == trump){
                Cards[i].SetTrump();
            }
        }
     }
    }
    this.GetCardsCount = () => {
        return Cards.length;
    }
    this.TakeRandomCard = () => {
        let CardNum = Math.floor(Math.random() * Cards.length);
        return Cards[CardNum];
    }
    this.StartGame = () => {
        cd.InitCards();
        cd.Shuffle();
        cd.ChooseTrump();
    }
}

var cd = new CardDeck;
cd.StartGame();
let card = cd.TakeRandomCard();

