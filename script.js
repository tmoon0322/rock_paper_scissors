choice_map = { 
    0: "rock", 
    1: "paper", 
    2: "scissors"
};

let humanScore = 0
let botScore = 0

function playRound(player_choice, bot_choice) {
    player_choice = player_choice.toLowerCase()
    if (player_choice === bot_choice) {
        console.log("It's a tie!")
    }
    else if (player_choice == "rock") {
        if (bot_choice == "scissors") {
            console.log("You win! Rock beats scissors!")
            humanScore++
        }
        else {
            console.log("You lose! Paper beats rock!")
            botScore++
        }
    }
    else if (player_choice == "paper") {
        if (bot_choice == "rock") {
            console.log("You win! Paper beats rock!")
            humanScore++
        }
        else {
            console.log("You lose! Scissors beats paper!")
            botScore++
        }
    }
    else if (player_choice == "scissors") {
        if (bot_choice == "paper") {
            console.log("You win! Scissors beats paper!")
            humanScore++
        }
        else {
            console.log("You lose! Rock beats scissors!")
            botScore++
        }
    }
    console.log(`Your Score: ${humanScore}`)
    console.log(`Computer Score: ${botScore}\n`)

}

function getPlayerChoice() {
    let player_choice = prompt('Type in "rock", "paper", or "scissors" to make your choice: ')
    return player_choice
}

function getComputerChoice() {
    let num = getRandomInt(3);
    let bot_choice = choice_map[num]
    return bot_choice
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getPlayerChoice(), getComputerChoice())
    }
    if (humanScore > botScore) {
        console.log("You Win!")
    }
    else {
        console.log("You Lose!")
    }
}

playGame()



