
function click(){
    var randNum = Math.floor(Math.random()*6)+1;
    var randImg = "dice"+randNum+".png";
    var randPath = "./assets/"+randImg;
    var image = document.querySelectorAll("img")[1];
    image.setAttribute("src",randPath);
}
var bn = document.getElementById("rollBtn");
bn.addEventListener("click",click);
