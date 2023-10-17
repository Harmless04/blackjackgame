let firstCard = 10
let secondCard = 11
let cards = [firstCard,secondCard]
let sum=firstCard + secondCard+newCard
let hasBlackjack = false
let isAlive = true
let message = ""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el") 
let cardsEl=document.getElementById("cards-el")

function startGame(){
  renderGame()
}

function renderGame(){
  cardsEl.textContent="cards:"+ cards[0] + " "+ cards[1]
  sumEl.textContent= "sum:"+sum
if(sum<=20)  
{
  message= "do you want to draw a new card?"
}

else if (sum==21)
{
  message="you've got blackjack!!"
  hasBlackjack = true
}
else{
  message="you lost!!"
  isAlive = false
}

messageEl.textContent = message
}
function newCard(){
  console.log("Drawing a new card from the deck")
  let Card = 7
  sum += card
  renderGame()
}



