//task1
let num1=parseInt(prompt("Enter Number one:"));
let num2= parseInt(prompt("Enter Number two:"));
let operator= prompt("Select the operator: + , -, / , * , ++ , -- , % ");
let result; if(operator=="+")
result=num1 + num2; else if(operator=="-")
result=num1 - num2; else if(operator=="/")
result=num1 / num2; else if(operator=="*")
result=num1 * num2; else if(operator=="%")
result=num1 % num2; else if(operator=="++"){
console.log("here")
let ch= prompt("Select number one or two :\npress 1 for one \n press 2 for two");
if(ch=="1") result=++num1; else if(ch=="2") result=++num2; else
alert("Invalid Selection!!!");
}
else if(operator=="--"){
let ch= prompt("Select number one or two :\npress 1 for one \n press 2 for two"); if(ch=="1")
result=--num1; else if(ch=="2") result=--num2; else
alert("Invalid Selection!!!");
}
else
alert("Invalid Selection!!!"); 
alert("Result is : "+ result);
//task2
function checkAge(age)
{
const con=2; if(age>=18){
let guess=prompt("Enter any any guess number : ");
if(con==guess)
alert("You Win!!");
else
alert("You Lose!!!")
}
else
alert("You are Underage!!!");
}
let age=prompt("Enter your age: "); 
checkAge(age);

//Task 3
var operation = true;

while(operation){
var operator1 = prompt("Alaram is Ringing \nPress S for Snooz and D for Dismiss : "); 
if(operator1 == "s"){
operation = true;

}
if(operator1 == "d")
{
     operation = false;
    alert("Good Morning");
}
if(operator1 != "s" && operator1 != "d")
{ 
    operation = false;
    alert("Wrong Input");
}
}

//Task 4

obj={
    username:"shahwaiz", password:"1234"
    }
    database=[obj.username,obj.password];
    feedback=database;
    feedback[2]="timeline";
    alert("object : \nUsername "+obj.username+"\nPassword : "+obj.password+"\nDatabase Array :\n"+database+"\n Feedback Array: \n"+feedback);
    
