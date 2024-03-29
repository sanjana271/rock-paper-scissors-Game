let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
}

const drawGame = () => {
    msg.innerText="Its a Draw.";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin, userChoice, compchoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else 
    {
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lost! ${compchoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame = (userChoice) => {
    const compchoice = genCompChoice();

    if (userChoice === compchoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            if (compchoice === "paper") {
                userWin = false;
            } else { true };
        } else if (userChoice === "paper") {
            if (compchoice === "scissor") {
                userWin = false;
            } else { true };
        }else{
            if(compchoice==="rock"){
                userWin=false;
            }else{true;}
        }

        showWinner(userWin, userChoice, compchoice);
    }
}

    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            const userChoice = choice.getAttribute("id");
            playGame(userChoice);
        })
    });