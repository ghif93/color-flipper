const colors = ["green","red", "rgba(133,122,200)","#f15025"];
const btn = document.getElementById("btn");
const colorSpan = document.querySelector(".color");


btn.addEventListener("click", function(){
   let color = randomHexColor();
    
    document.body.style.backgroundColor = color;
    colorSpan.textContent = color;
    console.log(color);
})

function randomHexColor(){
    const colorArray = ["0", "1", "2","4","5","6","7","8","9","A","B","C","D","E","F"];
    var colorHex = "#";
    for (var i =0; i<6;i++){

        colorHex=colorHex+(colorArray[getRandomNumber(colorArray.length)]);
        
    }
  
   return colorHex;
}

function getRandomNumber(numMax){
   return Math.floor(Math.random()*numMax);
}