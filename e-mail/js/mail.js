const emailArray = ["a@b.com", "a@b.it", "a@b.co.uk"];
const email = prompt("Inserisci la tua e-mail.");
let x = 0;

console.log(email)

for (let i = 0; i < emailArray.length && x < 1; i++) {
    
    if(emailArray[i] === email){
        x++;
    } else{
        x=x;   
    }
    
}

if (x == 1){
    alert("ACCESS GRANTED");
} else{
    alert("ACCESS DENIED");
}