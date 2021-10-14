const emailArray = ["a@b.com", "a@b.it", "a@b.co.uk"];
const email = prompt("Inserisci la tua e-mail.");
let validator = false;



for (let i = 0; i < emailArray.length && validator  != true ; i++) {
    
    if(emailArray[i] === email.toLowerCase()){
        validator = true;
    } else{
        validator = false;
    }
    console.log(email)
}

if (validator){
    alert("ACCESS GRANTED");
} else{
    alert("ACCESS DENIED");
}