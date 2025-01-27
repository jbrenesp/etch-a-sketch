const gridContainer = document.getElementById('grid');
const resizeButton = document.getElementById('resize-btn');
const containerSize = 460;
createGrid(20);

resizeButton.addEventListener('click', () => {
    let newSize = parseInt(prompt('Enter grid size'));

    if (newSize > 0 && newSize <= 100) {
        clearGrid();
        createGrid(newSize);
    } else{
        alert('Enter a number between 1 and 100.');
    }
});

function createGrid(size){
    const squareSize = containerSize / size;
    gridContainer.style.width = `${containerSize}px`;
    gridContainer.style.height = `${containerSize}px`;
    gridContainer.style.display = 'flex';
    gridContainer.style.flexWrap = 'wrap';

    for (let i = 0; i < size * size; i++){
        const square = document.createElement('div')
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.boxSizing = 'border-box';
        square.style.border = '1px solid blue';
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'lightblue';
    });
    gridContainer.appendChild(square)
  }
}

function clearGrid() {
    gridContainer.innerHTML = '';
}