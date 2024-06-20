choice_map = { 
    0: "rock", 
    1: "paper", 
    2: "scissors"
};

let humanScore = 0
let botScore = 0

function playRound(player_choice, bot_choice) {
    message = document.querySelector(".message")
    score = document.querySelector(".score")
    player_choice = player_choice.toLowerCase()
    if (player_choice === bot_choice) {
        message.textContent = "It's a tie!"
    }
    else if (player_choice == "rock") {
        if (bot_choice == "scissors") {
            message.textContent = "You win! Rock beats scissors!"
            humanScore++
        }
        else {
            message.textContent = "You lose! Paper beats rock!"
            botScore++
        }
    }
    else if (player_choice == "paper") {
        if (bot_choice == "rock") {
            message.textContent = "You win! Paper beats rock!"
            humanScore++
        }
        else {
            message.textContent = "You lose! Scissors beats paper!"
            botScore++
        }
    }
    else if (player_choice == "scissors") {
        if (bot_choice == "paper") {
            message.textContent = "You win! Scissors beats paper!"
            humanScore++
        }
        else {
            message.textContent = "You lose! Rock beats scissors!"
            botScore++
        }
    }
    score.textContent = `Your Score: ${humanScore} \nComputer Score: ${botScore}`
}

function getComputerChoice() {
    let num = getRandomInt(3);
    let bot_choice = choice_map[num]
    return bot_choice
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playRound(button.textContent, getComputerChoice());
    });
  });




