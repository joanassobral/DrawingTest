let currentX; let currentY;
let currentPopcornId=0;

document.body.onmousemove = function(event){
    currentX = event.clientX;
    currentY = event.clientY;
}

setInterval(function(){
    let popcorn = document.createElement("img");
            popcorn.src = "media/popcorn/" + currentPopcornId + ".png"
            popcorn.style.top = currentY + "px";
            popcorn.style.left = currentX + "px";
            document.body.appendChild(popcorn)

    currentPopcornId>2?currentPopcornId=0:currentPopcornId++;
},200)