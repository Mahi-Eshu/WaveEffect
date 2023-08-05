const container = document.getElementById('container'); //container
const randomWaveButton = document.getElementById('randomWave'); //randombutton
const circlesArr = []; //total circles
let rows = 15;
let cols = 15;


for(let i=0; i<rows; i++) {
	circlesArr[i] = [];
	for(let j=0; j<cols; j++) {
		const circle = document.createElement('div');
		circle.classList.add('circle');
		container.appendChild(circle);
		circlesArr[i].push(circle);	
	}
}

circlesArr.forEach((cols, i) => {
	cols.forEach((circle, j) => {
		circle.addEventListener('click', () => {
			growCircles(i, j);
		});
	});
});

function growCircles(i, j) {
	if(circlesArr[i] && circlesArr[i][j] && !circlesArr[i][j].classList.contains('grow')) {
		circlesArr[i][j].classList.add('grow');
		setTimeout(() => {
			growCircles(i-1, j)
			growCircles(i+1, j)
			growCircles(i, j-1)
			growCircles(i, j+1)
		}, 50)
		
		setTimeout(() => {
			circlesArr[i][j].classList.remove('grow');
		}, 300);
	}
}

function makeRandomWave() {
	const randomCoords = [Math.floor(Math.random() * cols),Math.floor(Math.random() * rows)];
	growCircles(randomCoords[0],randomCoords[1]);
}

randomWaveButton.addEventListener('click',makeRandomWave);
