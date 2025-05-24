let userscore=0;
let compscore=0;

const userscorePara=document.querySelector("#user_score");
const compscorePara=document.querySelector("#comp_score");

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const genCompChoice=() => {
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame=()=>{
         msg.innerText="Game was draw.Play again!";
         msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin,userchoice,compChoice)=>{
    if(userWin){
        userscore++;
        userscorePara.innerText=userscore;
        msg.innerText=`You Win!  your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compscorePara.innerText=compscore;
    
        msg.innerText=`You lost! ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
};

const playgame=(userchoice)=>{
    const compChoice=genCompChoice();

    if(userchoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userchoice==="rock"){
            userWin=compChoice==="paper"? false:true;
        }else if(userchoice==="paper"){
            userWin=compChoice==="scissors"? false:true;
        }else{
            userWin=compChoice==="rock"? false:true;
        }
    showWinner(userWin,userchoice,compChoice);
}
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>
    {
        const userchoice=choice.getAttribute("id");
      playgame(userchoice)  
  });
});