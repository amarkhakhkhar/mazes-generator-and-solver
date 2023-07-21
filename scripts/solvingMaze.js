

// function printSolution(sol) {
// 	let N = maze.length
// 	for (let i = 0; i < N; i++) {
// 		for (let j = 0; j < N; j++)
// 			document.write(
// 				" " + sol[i][j] + " ");
// 		document.write("<br>");
// 	}
// }

function drawSolution(sol, canvasId, width, height,maze) {
	let N = sol.length
	var canvas = document.getElementById(canvasId);
	var ctx = canvas.getContext("2d");
	width -= width % 2; width++;
	height -= height % 2; height++;
	var rectWidth = Math.floor(canvas.width / width);
	var rectHeight = Math.floor(canvas.height / height);

	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, width * rectWidth, height * rectHeight);
	ctx.fillStyle = "#EC407A";


	console.log(sol);
	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {

			// Cell is open -> white
			if (sol[i][j] == 0 || maze[i][j] == 1) {
				ctx.fillStyle = "black";
				ctx.fillRect( j * rectHeight,i * rectWidth, rectWidth, rectHeight);
			}

			// Cell is closed -> black 
			if (maze[i][j] == 0) {
				ctx.fillStyle = "white";
				ctx.fillRect( j * rectHeight,i * rectWidth, rectWidth, rectHeight);
			}

			// Cell is part of solution -> green
			if (sol[i][j] == 2) {
				ctx.fillStyle = "green";
				ctx.fillRect( j * rectHeight,i * rectWidth, rectWidth, rectHeight);
			}
		}
	}


}

function isSafe(maze, x, y) {
	let N = maze.length
	// if (x, y outside maze) return false
	console.log(x, y, (x >= 0 && x < N && y >= 0
		&& y < N && maze[x][y] == 0))
	return (x >= 0 && x < N && y >= 0
		&& y < N && maze[x][y] == 0);
}

function solveMaze(maze, id, width, height) {
	let N = maze.length;
	// let sol = maze;
	let sol = new Array(N);

	for (let i = 0; i < N; i++) {
		sol[i] = new Array(N);
		for (let j = 0; j < N; j++) {
			sol[i][j] = 0;
		}
	}

	if (solveMazeUtil(maze, 0, 1, sol) == false) {
		console.log("failed");
		return false;
	}

	drawSolution(sol, id, width, height,maze);
	// printSolution(sol, id);
	return true;
}


function solveMazeUtil(maze, x, y, sol) {

	let N = maze.length

	// if (x, y is goal) return true
	if (x == N - 1 && y == N - 1
		&& maze[x][y] == 0) {
		sol[x][y] = 2;
		return true;
	}

	console.log("checking..")
	// Check if maze[x][y] is valid
	if (isSafe(maze, x, y) == true) {

		if (sol[N - 1][N - 2] == 2) {
			return true;
		}

		// Check if the current block is already part of solution path.
		if (sol[x][y] == 2)
			return false;

		// mark x, y as part of solution path
		sol[x][y] = 2;
		
		/* Move forward in x direction */
		if (solveMazeUtil(maze, x + 1, y, sol))
			return true;

		/* If moving in x direction doesn't give
		solution then Move down in y direction */
		if (solveMazeUtil(maze, x, y + 1, sol))
			return true;

		/* If moving in y direction doesn't give
		solution then Move backwards in x direction */
		if (solveMazeUtil(maze, x - 1, y, sol))
			return true;

		/* If moving backwards in x direction doesn't give
		solution then Move upwards in y direction */
		if (solveMazeUtil(maze, x, y - 1, sol))
			return true;

		/* If none of the above movements works then
		BACKTRACK: unmark x, y as part of solution
		path */
		sol[x][y] = 0;
		return false;
	}

	return false;
}


