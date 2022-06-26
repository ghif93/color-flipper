const colors = ["green","red", "rgba(133,122,200)","#f15025"];
const btn = document.getElementById("btn");
const colorSpan = document.querySelector(".color");


btn.addEventListener("click", function(){
    
     const color = colors[getRandomNumber(colors.length)]
     document.body.style.backgroundColor = color;
     colorSpan.textContent = color;
     console.log(color);
 })


 function getRandomNumber(numMax){
    return Math.floor(Math.random()*numMax);
 }