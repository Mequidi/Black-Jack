let player = {
    name : "Nikhil",
    chips : "150"
}

isblackjack = false
isAlive = false;
isPlaying = false;
cards = []
message = "";
errorMessage = "";

let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let errorEl = document.getElementById("error-el");
let playerEl = document.getElementById("player-el");

function randomCard()
{
    let randomNumber=Math.floor((Math.random()*13)+1);
    if(randomNumber === 1)
        randomNumber = 11;
    else if(randomNumber >10)
        randomNumber = 10;
    return randomNumber;
}

function startGame()
{
    errorEl.textContent = "";
    if(!isPlaying)
    {
        isAlive = true;
        isPlaying = true;
        let firstCard = randomCard();
        let secondCard = randomCard();
        cards = [firstCard,secondCard];
        sum = firstCard + secondCard;
        renderGame();   
    }
    else    
    {
        errorMessage = "Game has already started !";
        errorEl.textContent = errorMessage;
    }
}

function renderGame()
{
    cardsEl.textContent = "Cards :";
    sumEl.textContent = "Sum :"
    playerEl.textContent = player.name + " $" + player.chips;

    for(let i = 0 ; i < cards.length ; i++)
    {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent += sum;
    
    if(sum<=20)
    {
        message = "Would you like to draw a card ?"
    }
    else {if(sum===21)
    {
        message = "You got blackjack, you won!";
        isblackjack = true;
        isPlaying = false;
    }
    else 
    {
        message = "Im sorry you lost!";
        isAlive = false;
        isPlaying = false;
    }
    }
    messageEl.textContent = message;
}

function newCard()
{
    errorEl.textContent = "";
    if(!isblackjack && isAlive)
    {
        let thirdCard = randomCard();
        cards.push(thirdCard);
        sum += thirdCard;
        renderGame();
    }
    else
    {
        errorMessage = "You cant draw more cards , the game is over!";
        errorEl.textContent = errorMessage;
    }
}