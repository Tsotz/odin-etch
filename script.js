const cont = document.querySelector("#container")

const grid = document.createElement("div");
grid.classList.add("grid");
grid.setAttribute("style", "display:flex; flex-wrap:wrap; width:400px; height:400px; border:2px solid black;");
cont.appendChild(grid);

for (let i = 0; i < 16 * 16; i++) {

    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = "25px";
    square.style.height = "25px";
    square.style.border = "1px solid gray";
    square.style.boxSizing = "border-box";
    grid.appendChild(square);

}
