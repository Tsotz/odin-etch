const cont = document.querySelector("#container")
const grid = document.createElement("div");
grid.classList.add("grid");
cont.appendChild(grid);






const but = document.querySelector("button")

but.addEventListener("click",function(){
    
   const size = prompt("Please choose a grid size\nMust be etween 0-100")
   if (size < 0 || size > 100 ) return;

    grid.innerHTML = "";

   for (let i = 0; i < size * size; i++) {

    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = "25px";
    square.style.height = "25px";
    square.style.border = "1px solid gray";
    square.style.boxSizing = "border-box";
    grid.appendChild(square);
    

}

const squares = document.querySelectorAll(".square")

squares.forEach(function(square){

    square.addEventListener("mouseover", function(){

        square.style.backgroundColor = "gray";
    
    });

})

grid.style.display = "flex";
grid.style.flexWrap = "wrap";
grid.style.flexShrink = "0";
grid.style.width = `${25 * size}px`; 
grid.style.height = `${25 * size}px`; 
grid.style.border = "2px solid black";

})




