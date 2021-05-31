let firstCard = 7;
let secondCard = 10;
let sum = firstCard + secondCard;

isAlive = false;
isPlaying = false;
message = "";
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");

function startGame()
{
    isAlive = true;
    isPlaying = true;
    let cards = [firstCard,secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame()
{
    cardsEl.textContent = "Cards :";

    for(let i = 0 ; i < cards.length ; i++)
    {
        cardsEl.textContent += cards[i] + " ";
        sum 
    }
    
    if(sum<=20)
    {
        message = "Would you like to draw a card ?"
    }
    else if(sum===21)
    {
        message = "You got blackjack, you won!";
    }
    else 
    {
        message = "Im sorry you lost!";
    }
    messageEl.textContent = message;
}
function newCard()
{
    let thirdCard = 10;
    cards.push=thirdCard;
    sum += thirdCard;
    renderGame();




}