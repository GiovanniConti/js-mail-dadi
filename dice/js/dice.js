let leftDiceNumber = 0;
let rightDiceNumber = 0;
const roll = document.querySelector(".roll");

roll.addEventListener("click", function() {

    leftDiceNumber = Math.ceil(Math.random() * 6);
    rightDiceNumber = Math.ceil(Math.random() * 6);

    const leftNumber = document.querySelector(".left-number");
    const rightNumber = document.querySelector(".right-number");

    leftNumber.innerHTML += `${leftDiceNumber}`;
    rightNumber.innerHTML += `${rightDiceNumber}`;

    console.log(leftDiceNumber);
    console.log(rightDiceNumber);

    if(leftDiceNumber > rightDiceNumber){
        setTimeout(function(){ alert("$$$$$ YOU WON $$$$$"); }, 1000);
    } else{
        setTimeout(function(){ alert("YOU LOST"); }, 1000);
        
    }
});
