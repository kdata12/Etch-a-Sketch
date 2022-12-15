const container = document.querySelector(".container");
let numSquares = parseInt(container.classList[1]);
numSquares = 16;
const containerSize = 585;
const pixel = containerSize/numSquares;
//rows
for(let i = 0; i < 16; i++) {
    let column = document.createElement('div')
    column.setAttribute('class', `column-${i}`);
    column.style.cssText = ` border: 0.5px solid black; 
                                height: ${pixel}; 
                                width: 600px; 
                                margin: 0; display: inline;
                                clear:both;
                                display:flex`;
    container.appendChild(column);

    const row1 = document.querySelector(`div.column-${i}`);
    for(let i = 0; i < 16; i++) {
        let divSquare2 = document.createElement('div')
        divSquare2.setAttribute('class', `box`);
        divSquare2.style.cssText = `position: relative;border: 0.2px solid black; 
                                    height: ${pixel}px; 
                                    width: ${pixel}px; 
                                    margin: 0; display: inline;
                                    clear:both;
                                    `;
            row1.appendChild(divSquare2);
    }
}


const allBoxes = document.querySelectorAll('.box')
//if mouse is over ANY BOXES

//add event listener to all class boxes
allBoxes.forEach(box => box.addEventListener('mouseover', switchColor))

//trigger color change
function switchColor () {
    this.setAttribute('class', 'box hover')
}

















