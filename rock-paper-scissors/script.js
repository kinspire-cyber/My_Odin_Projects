console.log("Hello World!");

// Function to get a random choice for the computer
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3); // Random number between 0 and 2
    return choices[randomIndex];
}

// Function to get the player's choice
function getHumanChoice() {
    let input = prompt("Enter your choice (rock, paper, scissors): ");
    console.log(input);
    return input
}

//Function to play the game
function playGame() {
    let humanScore = 0; // Reset scores
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase(); // Make case-insensitive
    
        if (humanChoice === computerChoice) {
            console.log(`It's a tie! Both chose ${humanChoice}`);
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++; // Increment human score
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++; // Increment computer score
        }
    }
    for (let i = 0; i < 5; i++) { // Play 5 rounds
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log(`Final Scores: Human - ${humanScore}, Computer - ${computerScore}`);
}

playGame(); // Start the game

