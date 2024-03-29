var numberOfWon =0;
var numberOfLost =0;

for(var i=1;i<=5;i++){
    var guessNumber = parseInt(prompt("Enter A Number From 1 To 5 :"));
    var randomNumber = Math.floor(Math.random()*5+1);
if(guessNumber == randomNumber){
    document.write("You Have Won" + "</br>");
    numberOfWon++; 
    }
else{
    document.write("You Have Lost.Random Number Was" + randomNumber + "</br>");
    numberOfLost++;
    }
}
document.write("Number Of Won" + numberOfWon + "</br>");
document.write("Number Of Lost" + numberOfLost + "</br>");