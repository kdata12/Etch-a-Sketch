startBoard()

const allBoxes = document.querySelectorAll('.box')
//add event listener to all class boxes
allBoxes.forEach(box => box.addEventListener('mouseover', switchColor))

//trigger color change
function switchColor () {
    this.setAttribute('class', 'box hover')
}

function clearBoard() {
    allBoxes.forEach(box => box.setAttribute('class', 'box'));
}

function resize(){
    //ask for a prompt to enter # of squares
    let userIn = prompt("How many squares do you want?")
    //clear board;
    clearBoard()
    //make board empty
    emptyBoard()
    //take input and change number of squares
    changeBoard(userIn)
    
}

function emptyBoard(){
    //get all test class
    const test = document.querySelectorAll('.test')

    //remove all test classes
    test.forEach(test => test.remove());

    //rebind event listener
    const allBoxes = document.querySelectorAll('.box')
    //add event listener to all class boxes
    allBoxes.forEach(box => box.addEventListener('mouseover', switchColor))
}



function changeBoard(userIn=16) {
    const container = document.querySelector(".container");
    
    container.setAttribute('class', `container ${userIn}`);
    let numSquares = parseInt(container.classList[1]);
    const containerSize = 600;
    let pixel = containerSize/numSquares;


    for(let i = 0; i < numSquares; i++) {
        let column = document.createElement('div')
        column.setAttribute('class', `column-${i} test`);
        column.style.cssText = ` border: 0.5px solid black; 
                                    height: ${pixel}px; 
                                    width: 600px; 
                                    margin: 0; display: inline;
                                    display:flex`;
        container.appendChild(column);

        const row1 = document.querySelector(`div.column-${i}`);
        for(let i = 0; i < numSquares; i++) {
            let divSquare2 = document.createElement('div')
            divSquare2.setAttribute('class', `box`);
            divSquare2.style.cssText = `position: relative;border: 0.2px solid black; 
                                        height: ${pixel}px; 
                                        width: ${pixel}px; 
                                        margin: 0;`;
                row1.appendChild(divSquare2);
        }
    }   

}


function startBoard() {
    changeBoard();
}


















