let userScore =0;
let compScore =0;

const choices =  document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


// COMP CHOICE ......
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);

    return options[randIdx];
};

const drawGame = () => {
    console.log("The game is draw");
    msg.innerText = "It's a draw :|";
    msg.style.backgroundColor = "black";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win :) Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose :( Computer ${compChoice} beats ${userChoice} `;
        msg.style.backgroundColor = "red";
    }
};

const PlayGame = (userChoice) => {
    console.log("user Chooses", userChoice);
    const compChoice = genCompChoice();
    console.log("Comp chooses", compChoice);

    if (userChoice == compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);

    }

};

// USER CHOICR .......
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice =  choice.getAttribute("id");
        //console.log("choice was clicked", userChoice);
        PlayGame(userChoice);

    });
});
   
    
