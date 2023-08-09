let currentWord = null;
let shuffledWords = [];

function canPlaceWord(grid, word, row, col, direction) {
    for (let i = 0; i < word.length; i++) {
        if (direction === 'across') {
            if (grid[row][col + i] !== ' ' && grid[row][col + i] !== word[i]) {
                return false;
            }
        } else {
            if (grid[row + i][col] !== ' ' && grid[row + i][col] !== word[i]) {
                return false;
            }
        }
    }
    return true;
}

function updatePuzzleDisplay(grid) {
    const puzzleTable = document.createElement('table');
    grid.forEach((rowData, rowIndex) => {
        const rowElement = document.createElement('tr');
        rowData.forEach((cellData, colIndex) => {
            const cellElement = document.createElement('td');
            if (cellData === ' ') {
                cellElement.textContent = '';
            } else {
                cellElement.textContent = cellData;
                cellElement.classList.add('filled');
                cellElement.dataset.index = rowIndex * grid.length + colIndex;
                const input = document.createElement('input');
                cellElement.appendChild(input);
            }
            rowElement.appendChild(cellElement);
        });
        puzzleTable.appendChild(rowElement);
    });
    puzzleContainer.innerHTML = '';
    puzzleContainer.appendChild(puzzleTable);
}

function handleCellClick(event) {
    const clickedCell = event.target;
    const row = parseInt(clickedCell.parentElement.dataset.row);
    const col = parseInt(clickedCell.dataset.col);

    if (currentWord) {
        const answer = prompt('Enter the word:');
        if (answer) {
            for (let i = 0; i < currentWord.word.length; i++) {
                if (currentWord.direction === 'across') {
                    grid[row][col + i] = answer[i] || ' ';
                } else {
                    grid[row + i][col] = answer[i] || ' ';
                }
            }
            updatePuzzleDisplay(grid);
            currentWord = null;
        }
    } else {
        const cellChar = grid[row][col];
        if (cellChar !== ' ') {
            const direction = prompt('Enter direction (across/down):');
            if (direction === 'across' || direction === 'down') {
                currentWord = { word: cellChar, direction, row, col };
            } else {
                alert('Invalid direction. Please enter "across" or "down".');
            }
        }
    }
}

document.getElementById('generateButton').addEventListener('click', () => {
    fetch('words.json')
        .then(response => response.json())
        .then(wordsAndClues => {
            shuffledWords = wordsAndClues
                .filter(item => item.word.length === 5)
                .sort(() => Math.random() - 0.5);

            const gridSize = 10;
            const grid = Array.from({ length: gridSize }, () => Array.from({ length: gridSize }, () => ' '));

            shuffledWords.forEach(wordInfo => {
                const word = wordInfo.word;
                const direction = Math.random() < 0.5 ? 'across' : 'down';
                const row = Math.floor(Math.random() * gridSize);
                const col = Math.floor(Math.random() * gridSize);

                if (canPlaceWord(grid, word, row, col, direction)) {
                    for (let i = 0; i < word.length; i++) {
                        if (direction === 'across') {
                            grid[row][col + i] = word[i];
                        } else {
                            grid[row + i][col] = word[i];
                        }
                    }
                }
            });

            updatePuzzleDisplay(grid);
        });
});

document.getElementById('checkButton').addEventListener('click', () => {
    const enteredAnswers = Array.from(document.querySelectorAll('.filled input')).map(input => input.value);
    let correctCount = 0;

    enteredAnswers.forEach((answer, index) => {
        if (answer.toLowerCase() === shuffledWords[index].word.toLowerCase()) {
            correctCount++;
            document.querySelector(`[data-index="${index}"]`).classList.add('correct');
        } else {
            document.querySelector(`[data-index="${index}"]`).classList.add('incorrect');
        }
    });

    alert(`You got ${correctCount} out of ${shuffledWords.length} correct!`);
});
