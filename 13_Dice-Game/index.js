
var randomNum1 = Math.floor(Math.random()*6)+1; 
var diceImg1 = "dice"+randomNum1+".png";
var imgPath = "./images/"+diceImg1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",imgPath);


var randNum2 = Math.floor(Math.random()*6)+1;
var randImg2 = "dice"+randNum2+".png";
var randPath2 = "./images/"+randImg2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randPath2);

if(randomNum1 > randNum2){
    document.querySelector("h1").innerHTML="PLAYER 1 WINS";
}
else if(randomNum1 < randNum2){
    document.querySelector("h1").innerHTML="PLAYER 2 WINS";
}
else if(randomNum1 == randNum2){
    document.querySelector("h1").innerHTML= "DRAW!!";
}
