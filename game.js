var noOfLive = document.getElementById("LivesNo");
var msg = document.getElementById("message");
var input= document.getElementById("number").value;
var submit=document.getElementById("submit");

var randomNumber=Math.round(Math.random() * 100);//12

var lives=10;
var message;
submit.onclick = () => {
    console.log(randomNumber);
    var userInput=document.getElementById("number").value;
    lives--;
    if(userInput==randomNumber)
        location.href="./win.html";
    else if(lives==0)
        location.href="./lose.html";
    else if(userInput > randomNumber)
        message="Your guess is too high";
    else if(userInput < randomNumber)
        message="Your guess is too low";

    msg.style.display="inherit";
    msg.innerHTML=message;
    livesNo.innerHTML=lives;

}