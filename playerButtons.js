let allButtons = document.getElementById("FirstButtons");
let test= allButtons.getElementsByClassName("PlayerButtons");
var game = new Game();
var CardsAI = new CardAI("easy");  
for(let i = 0; i< test.length; i++){
   test[i].addEventListener("click", (e) => {
      if(test[i].id == "2plButton"){
         game.AddPlayers(2, CardsAI);
      }
      if(test[i].id == "3plButton"){
         game.AddPlayers(3, CardsAI);
      }
      if(test[i].id == "4plButton"){
         game.AddPlayers(4, CardsAI);
      }
      allButtons.style.display = "none";
      allButtons = document.getElementById("TakeCard");
      allButtons.style.display = "block";
      for(let j = 0; j < 6; j++){        
         game.GetPlayer(0).DealCard(game, CardsAI, 0);
      }
      CardsAI.DealCardToAllAI(game.GetCD());
      if(game.GetPlayerCount() >= 2){
         allButtons.addEventListener("click", (e) => {
            for(let i = 0; i < game.GetPlayerCount(); i++)
            {
               if(game.GetPlayer(i).isTurn() == true)
               {
                  game.GetPlayer(i).DealCard(game, CardsAI, i);
               }
         }
   })
}
})
}


