const cont = document.querySelector("#container")
const grid = document.createElement("div");
grid.classList.add("grid");
cont.appendChild(grid);



let mode = "color";

const color = document.querySelector("#color");
const dark = document.querySelector("#dark");


color.addEventListener("click", function(){ mode = "color";})
dark.addEventListener("click", function(){ mode = "dark";})


const but = document.querySelector(".buttons")

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

    square.addEventListener("mouseover", function(){  // if you pull out the if statement, squares changes colors always
        
        if (mode === "color"){
        if (!square.style.backgroundColor){

        square.style.backgroundColor = `${randomColor()}`;
        
        }
        }
        if (mode === "dark") {

            if (!square.style.backgroundColor){

                square.style.backgroundColor = "black";
                square.style.opacity = `${darkerSq()}`;
                }

        }




    });

    })

        grid.style.display = "flex";
        grid.style.flexWrap = "wrap";
        grid.style.flexShrink = "0";
        grid.style.width = `${25 * size}px`; 
        grid.style.height = `${25 * size}px`; 
        grid.style.border = "2px solid black";

})


const randomColor = function() {

    let id = "#";

    for (i=0; i < 6; i++){

        const ranHex = Math.floor(Math.random() * 16).toString(16);
        id += ranHex;
        
    }

    return id;
    
    
}

const numList = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
let index = 0;
let direction = 1;
const darkerSq = function () {

    let opacity = numList[index];

    if (index === numList.length - 1) {

        direction = -1;
        

    } else if (index === 0){

        direction = 1;

    }

    index += direction;

    return opacity.toString();

}

