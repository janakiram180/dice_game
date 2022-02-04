function dice(){
var randomnumber1=Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src","images/dice"+randomnumber1+".png");
var randomnumber2=Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src","images/dice"+randomnumber2+".png");
if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="<h1>🎊Player one is the winner</h1>";
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="<h1>Player two is the winner🎊</h1>";
}
else{
    document.querySelector("h1").innerHTML="<h1>Its a draw</h1>";
}
}