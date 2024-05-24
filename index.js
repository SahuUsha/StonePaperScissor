let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
let msgpara = document.querySelector("#msg");
let msgbox = document.querySelector(".msg-containe");
const userChoicepara = document.querySelector("#yourscore");
const compChoicePara = document.querySelector("#compScore");
const resetbtn = document.querySelector("#resetbtn")



const generateCompChoice=()=>{
    // generate string randomly is not possible but we can genrate number 
    // so use array for index
const options = ["rock" , "paper" , "scissors"];
const randIndex = Math.floor(Math.random()*3);
return options[randIndex];

// Math.floor  ----> take integer only , remove number after point
// Marh.random ----> to generate random number 
}

const Draw =() =>{

msgpara.innerText = "Game Draw , play Again .";
msgpara.style.backgroundColor = "#161c2c";

}

const playGame=(userChoice)=>{
    // console.log("user Choice = " , userChoice);

    // to geenrate computer choice  --> modular way of programming --> make small function for every single work
   const compChoice = generateCompChoice();
//    console.log("comp Choice = " , compChoice);

   if(userChoice === compChoice){
    Draw();
   }else {
    let userWin = true;
    if(userChoice === "rock"){
        // paper , scissors
        userWin = compChoice === "paper" ? false : true;
    }
    else if(userChoice === "paper"){
        // scissors , rock
        userWin = compChoice === "scissors"? false : true;
    }
    else{
        //  rock , paper 
        userWin = compChoice === "rock" ? false : true;
    }
   showWinner(userWin , userChoice , compChoice);
}
};

const showWinner=(winner , userChoice , compChoice)=>{
    if(winner){
       
        msgpara.innerText = `You Won ! your ${userChoice} beat ${compChoice} `;
        msgpara.style.backgroundColor = "green";
        userScore++;
        userChoicepara.innerText = userScore; ;

    }else{
     
        msgpara.innerText = `You lose !  ${compChoice} beat your ${userChoice}`;
        msgpara.style.backgroundColor = "red";
        compScore++;
        compChoicePara.innerText = compScore;
    }

}
choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click" ,()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);

    } )

})

const reset=()=>{
    userChoicepara.innerText = 0;
    compChoicePara.innerText = 0;
    msgpara.innerText ="Play Your move"
    msgpara.style.backgroundColor = "#161c2c";
}

resetbtn.addEventListener("click",reset);
