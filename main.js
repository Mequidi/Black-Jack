let player = {
    name : "Nikhil",
    chips : "150"
}

isBlackJack = false
isAlive = false;
isPlaying = false;
cards = [];
deck = [];
suit = [];
message = "";
errorMessage = "";

let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let errorEl = document.getElementById("error-el");
let playerEl = document.getElementById("player-el");
let testEl = document.getElementById("test-el");

function randomSuitSelector()
{
    let suits = ["♤","♡","♧","♢"];
    let randomSuitIndex = Math.floor((Math.random()*4));
    return suits[randomSuitIndex];
}
function randomCardSelector()
{
    let randomNumber=Math.floor((Math.random()*13));
    deck = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"]
    selectedCard = deck[randomNumber];
    return selectedCard;
}
function cardValueGenerator(x){
    if(Number.isInteger(x))
        return x;
    else if(x === "A")
        return 11;
    else if(x === "J" || x === "Q" || x === "K")
        return 10;
}

function startGame()
{
    errorEl.textContent = "";
    if(!isPlaying)
    {
        isAlive = true;
        isPlaying = true;
        isBlackJack = false;
        let firstCard = {
            actualCard :randomCardSelector(),
            cardValue :cardValueGenerator(selectedCard),
            cardSuit :randomSuitSelector()
        };
        console.log(firstCard);
        let secondCard = {
            actualCard :randomCardSelector(),
            cardValue :cardValueGenerator(selectedCard),
            cardSuit :randomSuitSelector()
        }
        cards = [firstCard,secondCard];
        sum = firstCard.cardValue + secondCard.cardValue;
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
    console.log(cards)
    for(let i = 0 ; i < cards.length ; i++)
    {
        cardsEl.textContent += cards[i].cardSuit + cards[i].actualCard + " ";
    }
    sumEl.textContent += sum;
    
    if(sum<=20)
    {
        message = "Would you like to draw a card ?"
    }
    else {if(sum===21)
    {
        message = "You got blackjack, you won!";
        isBlackJack = true;
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
    if(isBlackJack === false && isAlive)
    {
        let thirdCard = {
            actualCard :randomCardSelector(),
            cardValue :cardValueGenerator(selectedCard),
            cardSuit :randomSuitSelector()
        };
        cards.push(thirdCard);
        sum += thirdCard.cardValue;
        renderGame();
    }
    else
    {
        errorMessage = "You cant draw more cards , the game is over!";
        errorEl.textContent = errorMessage;
    }
}