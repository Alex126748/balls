
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
 gameArea.classList.add('grid');

  let clickCounter = 0;
  const counterDisplay = document.getElementById('click-counter');


 for(let i = 0;i < gridSize; i++) {
    for( let j = 0; j < gridSize; j++) {
        const ball = document.createElement('div');
        // ball.className = ('ball');
        if (binaryArray[i][j]===1) {
            ball.className = 'ball'
        }else {
            ball.className = 'ball-zero'
        }

        //нажатие на шарики
ball.addEventListener('click', function () {
    if(ball.classList.contains('ball')){
        ball.classList.remove('ball')
        ball.classList.add('ball-zero')
    }
    clickCounter ++;
    counterDisplay.textContent = `Лопнувшие шарики: ${clickCounter}`;
})

        gameArea.appendChild(ball);
    }
 }
});
