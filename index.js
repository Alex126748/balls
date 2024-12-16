//счетчик кликов

// let clickCount = 0;
// function countClick() {
//     clickCount += 1;
//     document.querySelector('counter.button').textContent = clickCount;
// }

// document.querySelector('counter.button').addEventListener('click', countClick);



//поле и шарики
document.getElementById('generate').addEventListener('click', function() {
    const numBalls = Number(document.getElementById('num-balls').value);
    
    if (Number.isNaN(numBalls) || numBalls <= 0){
    alert('Введите число');
    return;
}

 const gridSize = Math.ceil(Math.sqrt(numBalls));

 const binaryArray = [];
 for(let i = 0; i < gridSize; i++) {
    const row = [];
    for (let j = 0; j < gridSize; j++) {
        row.push(0);
    }
    binaryArray.push(row);
 }

 let remainingCells = numBalls;
 for(let i = 0;i < gridSize && remainingCells > 0;i++){
    for(let j = 0;j < gridSize && remainingCells > 0;j++) {
        binaryArray[i][j] = 1;
        remainingCells--;
    }
 }
 console.log('Двумерный массив', binaryArray);

 const gameArea = document.getElementById('game-area');
 gameArea.innerHTML = '';
 gameArea.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
 gameArea.className = 'grid';

 for(let i = 0;i < gridSize; i++) {
    for( let j = 0; j < gridSize; j++) {
        const ball = document.createElement('div');
        ball.className = ('ball');
        // ball.textContent = binaryArray[i][j];
        
        if (binaryArray[i][j] === 1) {
            ball.style.backgroundColor = 'red'; // Красный шарик
        } else {
            ball.style.backgroundColor = 'transparent'; // Пустая клетка
        }
        
        gameArea.appendChild(ball);
    }
 }
});
