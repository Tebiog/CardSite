
var Card = function(suits, values, point) {
    var suit;                                      //private
    var value;
    var isTrump;
    var points;
    var state; 
    
        this.SetTrump = () => {
            isTrump = true;
        }
        this.SetSuit = (suitt) => {
           suit = suitt;
        }
        this.SetValue = (tvalue) => {
            value = tvalue;
        }
        this.SetPoint = (tpoints) => {
            points = tpoints;
        }
        this.RetTrump = () => {
            return isTrump;
        }
        this.GetSuit = () => {
            return suit;
        }
        this.GetValue = () => {
            return value;
        }
        this.GetPoints = () => {
            return points;
        }
    this.SetSuit(suits);
    this.SetValue(values);
    this.SetPoint(point);

}
var suitArr = ["♣", "♦", "♥", "♠"];
var valueArr = ["6", "7", "8", "9", "10","V", "Q", "K", "A"];
class CardInit{
    
    static GetCountCard = () => {
        return (suitArr.length*valueArr.length );
    } 
    static GetOneCard = (index) => {
        if(index<36 && index>0){
            let card = new Card(
                suitArr[index % suitArr.length],
                valueArr[index % valueArr.length],
                valueArr % valueArr.length+6,
            );
            
            return card;
        }
        else{
            return undefined;
        }
    }
    

    static InitCards = () => {
        var tmparr = [];
        for(var i = 1; i < CardInit.GetCountCard(); i++){
            tmparr[i] = CardInit.GetOneCard(i);
        }
        return tmparr;
    }
}