let allButtons = document.getElementById("FirstButtons");
let test= allButtons.getElementsByClassName("PlayerButtons");
var game = new Game();   
for(let i = 0; i< test.length; i++){
   test[i].addEventListener("click", (e) => {
      if(test[i].id == "2plButton"){
         game.AddPlayers(2);
      }
      if(test[i].id == "3plButton"){
         game.AddPlayers(3);
      }
      if(test[i].id == "4plButton"){
         game.AddPlayers(4);
      }
      allButtons.style.display = "none";
      allButtons = document.getElementById("TakeCard");
      allButtons.style.display = "block";
   if(game.GetPlayerCount() >= 2){
      allButtons.addEventListener("click", (e) => {
         for(let i = 0; i < game.GetPlayerCount(); i++){
            console.log(game.GetPlayer(i).isTurn());
               if(game.GetPlayer(i).isTurn() == true){
                  game.GetPlayer(i).DealCard(game);
               }
      }
   })
}
})
}


