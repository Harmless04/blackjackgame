let firstCard = 10
let secondCard = 11
let sum=firstCard + secondCard 
let hasBlackjack = false
let isAlive = true
let message = ""
function startGame(){
if(sum<=20) 
{
  message= "do you want to draw a new card?😍"
}
else if (sum==21)
{
  message="you've got blackjack!!😁🙌"
  hasBlackjack = true
}
else{
  message="you lost🤦‍♂️😢!!"
  isAlive = false
}

console.log(message)
}


