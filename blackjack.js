let cards = []
let sum=0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el") 
let cardsEl=document.getElementById("cards-el")

function getRandomCard(){
  
  let randomNumber = Math.floor(Math.random()*13)+1
  if(randomNumber>10){
    return 10
  }
  else  if(randomNumber===1){
    return 11
  }
  else{
    return randomNumber
  }
  
}

function startGame(){
  isAlive=true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards=[firstCard ,secondCard]
  sum=firstCard+secondCard
  renderGame()
}

function renderGame(){
  cardsEl.textContent="cards:"
  for(let i= 0;i<cards.length;i++)
  {
      cardsEl.textContent += cards[i]+" "
  }
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
  let card = getRandomCard()
  sum += card
  cards.push(card)
  console.log(cards)
  renderGame()
}





