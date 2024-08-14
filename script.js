const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameOver = false;

cells.forEach(cell => {
	cell.addEventListener('click', handleCellClick);
});

function handleCellClick(event) {
	const cell = event.target;
	if (cell.innerHTML === '') {
		cell.innerHTML = currentPlayer;
		checkWinner();
		currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
	}
}

function checkWinner() {
	const winningCombinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
    ];
	for (const combination of winningCombinations) {
		const [a, b, c] = combination;
		if (cells[a].innerHTML === cells[b].innerHTML && cells[b].innerHTML === cells[c].innerHTML && cells[a].innerHTML !== '') {
			gameOver = true;
			alert(`Player ${cells[a].innerHTML} wins!`);
			return;
		}
	}
	if (!gameOver && cells.every(cell => cell.innerHTML !== '')) {
		gameOver = true;
		alert('It\'s a draw!');
	}
}
