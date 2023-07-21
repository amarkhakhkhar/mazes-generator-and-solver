/* 
    global
    animateBacktrackingMaze,
    animatePrimsMaze,
    animateEllersMaze,
    animateKruskalsMaze,
    animateAldousBroderMaze,
    animateWilsonsMaze,
    animateRecursiveDivisionMaze,
    animateHuntAndKillMaze,
    animateSidewinderMaze,
    animateBinaryTreeMaze
*/



function drawMaze(maze, canvasId) {
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext("2d");

    var rectWidth = Math.floor(canvas.width / maze[0].length);
    var rectHeight = Math.floor(canvas.height / maze.length);

    for (var i = 0; i < maze.length; i++) {
        for (var j = 0; j < maze[i].length; j++) {
            if (maze[i][j]) {
                ctx.fillRect(rectWidth * j, rectHeight * i,
                    rectWidth, rectHeight);
            }
            else {
                ctx.clearRect(rectWidth * j, rectHeight * i,
                    rectWidth, rectHeight);
            }
        }
    }
}




var backtrackCanvas = document.getElementById("backtracking-maze-animation");
var backtrackSolCanvas = document.getElementById("backtracking-maze-animation-sol");
var ctx1 = backtrackCanvas.getContext("2d");
var ctx1s = backtrackSolCanvas.getContext("2d");

ctx1.font = "20px 'PT Serif'";
ctx1s.font = "20px 'PT Serif'";
ctx1.textAlign = "center";
ctx1s.textAlign = "center";
ctx1.fillRect(0, 0, backtrackCanvas.width, backtrackCanvas.height);
ctx1s.fillRect(0, 0, backtrackCanvas.width, backtrackCanvas.height);
ctx1.fillStyle = "white";
ctx1s.fillStyle = "white";
ctx1.fillText("Click to animate", 240, 252);
ctx1s.fillText("Click to solve after animating", 240, 252);
var createdBacktrack;
async function backtrackSolOnClick() {
    var size = document.getElementById("size").value;
    ctx1s.clearRect(0, 0, backtrackCanvas.width, backtrackCanvas.height);
    backtrackSolCanvas.onclick = null;

    solveMaze(createdBacktrack, "backtracking-maze-animation-sol", size, size);
    // 0 is open, 1 is closed 
    // await solvingFunc();
    backtrackSolCanvas.onclick = backtrackSolOnClick;
}

backtrackSolCanvas.onclick = backtrackSolOnClick;

async function backtrackOnclick() {
    var size = document.getElementById("size").value;
    ctx1.clearRect(0, 0, backtrackCanvas.width, backtrackCanvas.height);
    backtrackCanvas.onclick = null;
    createdBacktrack = await animateBacktrackingMaze(size, size, "backtracking-maze-animation", 3);
    backtrackCanvas.onclick = backtrackOnclick;
}

backtrackCanvas.onclick = backtrackOnclick;





var primsCanvas = document.getElementById("prims-maze-animation");
var primsSolCanvas = document.getElementById("prims-maze-animation-sol");
var ctx2 = primsCanvas.getContext("2d");
var ctx2s = primsSolCanvas.getContext("2d");
var createdPrimes;
ctx2.font = "20px 'PT Serif'";
ctx2s.font = "20px 'PT Serif'";
ctx2.textAlign = "center";
ctx2s.textAlign = "center";
ctx2.fillRect(0, 0, primsCanvas.width, primsCanvas.height);
ctx2s.fillRect(0, 0, primsCanvas.width, primsCanvas.height);
ctx2.fillStyle = "white";
ctx2s.fillStyle = "white";
ctx2.fillText("Click to animate", 240, 252);
ctx2s.fillText("Click to solve after animating", 240, 252);

async function primsSolOnClick() {
    var size = document.getElementById("size").value;
    ctx2s.clearRect(0, 0, primsCanvas.width, primsCanvas.height);
    primsSolCanvas.onclick = null;
    console.log(createdPrimes);
    solveMaze(createdPrimes, "prims-maze-animation-sol",size, size);
    // 0 is open, 1 is closed 
    // await solvingFunc();
    primsSolCanvas.onclick = primsSolOnClick;
}

primsSolCanvas.onclick = primsSolOnClick;
async function primsOnclick() {
    var size = document.getElementById("size").value;
    ctx2.clearRect(0, 0, primsCanvas.width, primsCanvas.height);
    primsCanvas.onclick = null;
    createdPrimes = await animatePrimsMaze(size, size, "prims-maze-animation", 3);
    primsCanvas.onclick = primsOnclick;
}

primsCanvas.onclick = primsOnclick;




var ellersCanvas = document.getElementById("ellers-maze-animation");
var ellersCanvasSol = document.getElementById("ellers-maze-animation-sol");
var ctx3 = ellersCanvas.getContext("2d");
var ctx3s = ellersCanvasSol.getContext("2d");

ctx3.font = "20px 'PT Serif'";
ctx3s.font = "20px 'PT Serif'";
ctx3.textAlign = "center";
ctx3s.textAlign = "center";
ctx3.fillRect(0, 0, ellersCanvas.width, ellersCanvas.height);
ctx3s.fillRect(0, 0, ellersCanvas.width, ellersCanvas.height);
ctx3.fillStyle = "white";
ctx3s.fillStyle = "white";
var createdEllers;
ctx3.fillText("Click to animate", 240, 252);
ctx3s.fillText("Click to solve after animating", 240, 252);

async function ellersSolOnClick() {
    var size = document.getElementById("size").value;
    ctx3s.clearRect(0, 0, ellersCanvas.width, ellersCanvas.height);
    ellersCanvasSol.onclick = null;
    solveMaze(createdEllers, "ellers-maze-animation-sol",size, size);
    // 0 is open, 1 is closed 
    // await solvingFunc();
    ellersCanvasSol.onclick = ellersSolOnClick;
}

ellersCanvasSol.onclick = ellersSolOnClick;

async function ellersOnclick() {
    var size = document.getElementById("size").value;
    ctx3.clearRect(0, 0, ellersCanvas.width, ellersCanvas.height);
    ellersCanvas.onclick = null;
    createdEllers = await animateEllersMaze(size, size, "ellers-maze-animation", 8);
    ellersCanvas.onclick = ellersOnclick;
}

ellersCanvas.onclick = ellersOnclick;




var kruskalsCanvas = document.getElementById("kruskals-maze-animation");
var kruskalsSolCanvas = document.getElementById("kruskals-maze-animation-sol");
var ctx4 = kruskalsCanvas.getContext("2d");
var ctx4s = kruskalsSolCanvas.getContext("2d");

ctx4.font = "20px 'PT Serif'";
ctx4s.font = "20px 'PT Serif'";
ctx4.textAlign = "center";
ctx4s.textAlign = "center";
ctx4.fillRect(0, 0, kruskalsCanvas.width, kruskalsCanvas.height);
ctx4s.fillRect(0, 0, kruskalsCanvas.width, kruskalsCanvas.height);
ctx4.fillStyle = "white";
ctx4s.fillStyle = "white";
ctx4.fillText("Click to animate", 240, 252);
ctx4s.fillText("Click to solve after animating", 240, 252);
var createdKruskals;

async function kruskalsSolOnClick() {
    var size = document.getElementById("size").value;
    ctx4s.clearRect(0, 0, kruskalsSolCanvas.width, kruskalsSolCanvas.height);
    kruskalsSolCanvas.onclick = null;
    solveMaze(createdKruskals, "kruskals-maze-animation-sol", size, size);
    // 0 is open, 1 is closed 
    // await solvingFunc();
    kruskalsSolCanvas.onclick = kruskalsSolOnClick;
}

kruskalsSolCanvas.onclick = kruskalsSolOnClick;

async function kruskalsOnclick() {
    var size = document.getElementById("size").value;
    ctx4.clearRect(0, 0, kruskalsCanvas.width, kruskalsCanvas.height);
    kruskalsCanvas.onclick = null;
    createdKruskals = await animateKruskalsMaze(size, size, "kruskals-maze-animation", 3);
    kruskalsCanvas.onclick = kruskalsOnclick;
}

kruskalsCanvas.onclick = kruskalsOnclick;





var aldousBroderCanvas = document.getElementById("aldous-broder-maze-animation");
var aldousBroderSolCanvas = document.getElementById("aldous-broder-maze-animation-sol");
var ctx5 = aldousBroderCanvas.getContext("2d");
var ctx5s = aldousBroderSolCanvas.getContext("2d");

ctx5.font = "20px 'PT Serif'";
ctx5s.font = "20px 'PT Serif'";
ctx5.textAlign = "center";
ctx5s.textAlign = "center";
ctx5.fillRect(0, 0, aldousBroderCanvas.width, aldousBroderCanvas.height);
ctx5s.fillRect(0, 0, aldousBroderCanvas.width, aldousBroderCanvas.height);
ctx5.fillStyle = "white";
ctx5s.fillStyle = "white";
ctx5.fillText("Click to animate", 240, 250);
ctx5s.fillText("Click to solve after animating", 240, 250);

var createdAB;

async function ABSolOnClick() {
    var size = document.getElementById("size").value;
    ctx5s.clearRect(0, 0, aldousBroderSolCanvas.width, aldousBroderSolCanvas.height);
    aldousBroderSolCanvas.onclick = null;
    solveMaze(createdAB, "aldous-broder-maze-animation-sol", size, size);
    // 0 is open, 1 is closed 
    // await solvingFunc();
    aldousBroderSolCanvas.onclick = ABSolOnClick;
}

aldousBroderSolCanvas.onclick = ABSolOnClick;

async function aldousBroderOnclick() {
    var size = document.getElementById("size").value;
    ctx5.clearRect(0, 0, aldousBroderCanvas.width, aldousBroderCanvas.height);
    aldousBroderCanvas.onclick = null;
    createdAB = await animateAldousBroderMaze(size, size, "aldous-broder-maze-animation", 50);
    aldousBroderCanvas.onclick = aldousBroderOnclick;
}

aldousBroderCanvas.onclick = aldousBroderOnclick;








var wilsonsCanvas = document.getElementById("wilsons-maze-animation");
var wilsonsSolCanvas = document.getElementById("wilsons-maze-animation-sol");
var ctx6 = wilsonsCanvas.getContext("2d");
var ctx6s = wilsonsSolCanvas.getContext("2d");

ctx6.font = "20px 'PT Serif'";
ctx6s.font = "20px 'PT Serif'";
ctx6.textAlign = "center";
ctx6s.textAlign = "center";
ctx6.fillRect(0, 0, wilsonsCanvas.width, wilsonsCanvas.height);
ctx6s.fillRect(0, 0, wilsonsCanvas.width, wilsonsCanvas.height);
ctx6.fillStyle = "white";
ctx6s.fillStyle = "white";
ctx6.fillText("Click to animate", 240, 252);
ctx6s.fillText("Click to solve after animating", 240, 252);

var createdWilsons;

async function wilsonsSolOnClick() {
    var size = document.getElementById("size").value;
    ctx6s.clearRect(0, 0, wilsonsSolCanvas.width, wilsonsSolCanvas.height);
    wilsonsSolCanvas.onclick = null;
    solveMaze(createdWilsons, "wilsons-maze-animation-sol",size , size);
    // 0 is open, 1 is closed 
    // await solvingFunc();
    wilsonsSolCanvas.onclick = wilsonsSolOnClick;
}

wilsonsSolCanvas.onclick = wilsonsSolOnClick;

async function wilsonsOnclick() {
    var size = document.getElementById("size").value;
    ctx6.clearRect(0, 0, wilsonsCanvas.width, wilsonsCanvas.height);
    wilsonsCanvas.onclick = null;
    createdWilsons = await animateWilsonsMaze(size, size, "wilsons-maze-animation", 10);
    wilsonsCanvas.onclick = wilsonsOnclick;
}

wilsonsCanvas.onclick = wilsonsOnclick;



var recursiveDivisionCanvas = document.getElementById("recursive-division-maze-animation");
var recursiveDivisionCanvasSol = document.getElementById("recursive-division-maze-animation-sol");
var ctx7 = recursiveDivisionCanvas.getContext("2d");
var ctx7s = recursiveDivisionCanvasSol.getContext("2d");

ctx7.font = "20px 'PT Serif'";
ctx7s.font = "20px 'PT Serif'";
ctx7.textAlign = "center";
ctx7s.textAlign = "center";
ctx7.fillRect(0, 0, recursiveDivisionCanvas.width, recursiveDivisionCanvas.height);
ctx7s.fillRect(0, 0, recursiveDivisionCanvas.width, recursiveDivisionCanvas.height);
ctx7.fillStyle = "white";
ctx7s.fillStyle = "white";
ctx7.fillText("Click to animate", 240, 252);
ctx7s.fillText("Click to solve after animating", 240, 252);

var createdRecursive;

async function recursiveSolOnClick() {
    var size = document.getElementById("size").value;
    ctx7s.clearRect(0, 0, recursiveDivisionCanvasSol.width, recursiveDivisionCanvasSol.height);
    recursiveDivisionCanvasSol.onclick = null;
    solveMaze(createdRecursive, "recursive-division-maze-animation-sol",size, size);
    // 0 is open, 1 is closed 
    // await solvingFunc();
    recursiveDivisionCanvasSol.onclick = recursiveSolOnClick;
}

recursiveDivisionCanvasSol.onclick = recursiveSolOnClick;

async function recursiveDivisionOnclick() {
    var size = document.getElementById("size").value;
    ctx7.clearRect(0, 0, recursiveDivisionCanvas.width, recursiveDivisionCanvas.height);
    recursiveDivisionCanvas.onclick = null;
    createdRecursive = await animateRecursiveDivisionMaze(size, size, "recursive-division-maze-animation", 35);
    recursiveDivisionCanvas.onclick = recursiveDivisionOnclick;
}
recursiveDivisionCanvas.onclick = recursiveDivisionOnclick;



// var huntAndKillCanvas = document.getElementById("hunt-and-kill-maze-animation");
// var huntAndKillCanvasSol = document.getElementById("hunt-and-kill-maze-animation-sol");
// var ctx8 = huntAndKillCanvas.getContext("2d");
// var ctx8s = huntAndKillCanvasSol.getContext("2d");

// ctx8.font = "20px 'PT Serif'";
// ctx8s.font = "20px 'PT Serif'";
// ctx8.textAlign = "center";
// ctx8s.textAlign = "center";
// ctx8.fillRect(0, 0, huntAndKillCanvas.width, huntAndKillCanvas.height);
// ctx8s.fillRect(0, 0, huntAndKillCanvas.width, huntAndKillCanvas.height);
// ctx8.fillStyle = "white";
// ctx8s.fillStyle = "white";
// ctx8.fillText("Click to animate", 240, 252);
// ctx8s.fillText("Click to solve after animating", 240, 252);

// var createdHK;

// async function HKSolOnClick() {
//     ctx8s.clearRect(0, 0, huntAndKillCanvasSol.width, huntAndKillCanvasSol.height);
//     huntAndKillCanvasSol.onclick = null;
//     console.log(createdHK);
//     solveMaze(createdHK, "hunt-and-kill-maze-animation-sol", 11, 11);
//     // 0 is open, 1 is closed 
//     // await solvingFunc();
//     huntAndKillCanvasSol.onclick = HKSolOnClick;
// }


// huntAndKillCanvasSol.onclick = HKSolOnClick;


// async function huntAndKillOnclick() {
//     ctx8.clearRect(0, 0, huntAndKillCanvas.width, huntAndKillCanvas.height);
//     huntAndKillCanvas.onclick = null;
//     createdHK = await animateHuntAndKillMaze(11, 11, "hunt-and-kill-maze-animation", 10);
//     huntAndKillCanvas.onclick = huntAndKillOnclick;
// }
// huntAndKillCanvas.onclick = huntAndKillOnclick;



var sidewinderCanvas = document.getElementById("sidewinder-maze-animation");
var sidewinderCanvasSol = document.getElementById("sidewinder-maze-animation-sol");
var ctx9 = sidewinderCanvas.getContext("2d");
var ctx9s = sidewinderCanvasSol.getContext("2d");

ctx9.font = "20px 'PT Serif'";
ctx9s.font = "20px 'PT Serif'";
ctx9.textAlign = "center";
ctx9s.textAlign = "center";
ctx9.fillRect(0, 0, sidewinderCanvas.width, sidewinderCanvas.height);
ctx9s.fillRect(0, 0, sidewinderCanvas.width, sidewinderCanvas.height);
ctx9.fillStyle = "white";
ctx9s.fillStyle = "white";
ctx9.fillText("Click to animate", 240, 252);
ctx9s.fillText("Click to solve after animating", 240, 252);


var createdSW;

async function SWSolOnClick() {
    ctx9s.clearRect(0, 0, sidewinderCanvasSol.width, sidewinderCanvasSol.height);
    sidewinderCanvasSol.onclick = null;
    solveMaze(createdSW, "sidewinder-maze-animation-sol", 41, 41);
    // 0 is open, 1 is closed 
    // await solvingFunc();
    sidewinderCanvasSol.onclick = SWSolOnClick;
}


sidewinderCanvasSol.onclick = SWSolOnClick;

async function sidewinderOnclick() {
    ctx9.clearRect(0, 0, sidewinderCanvas.width, sidewinderCanvas.height);
    sidewinderCanvas.onclick = null;
   createdSW = await animateSidewinderMaze(41, 41, "sidewinder-maze-animation", 5);
    sidewinderCanvas.onclick = sidewinderOnclick;
}
sidewinderCanvas.onclick = sidewinderOnclick;



var binaryTreeCanvas = document.getElementById("binary-tree-maze-animation");
var binaryTreeCanvasSol = document.getElementById("binary-tree-maze-animation-sol");
var ctx0 = binaryTreeCanvas.getContext("2d");
var ctx0s = binaryTreeCanvasSol.getContext("2d");

ctx0.font = "20px 'PT Serif'";
ctx0s.font = "20px 'PT Serif'";
ctx0.textAlign = "center";
ctx0s.textAlign = "center";
ctx0.fillRect(0, 0, binaryTreeCanvas.width, binaryTreeCanvas.height);
ctx0s.fillRect(0, 0, binaryTreeCanvas.width, binaryTreeCanvas.height);
ctx0.fillStyle = "white";
ctx0s.fillStyle = "white";
ctx0.fillText("Click to animate", 240, 252);
ctx0s.fillText("Click to solve after animating", 240, 252);

var createdBT;

async function BTSolOnClick() {
    ctx0s.clearRect(0, 0, binaryTreeCanvasSol.width, binaryTreeCanvasSol.height);
    binaryTreeCanvasSol.onclick = null;
    solveMaze(createdBT, "binary-tree-maze-animation-sol", 41, 41);
    // 0 is open, 1 is closed 
    // await solvingFunc();
    binaryTreeCanvasSol.onclick = BTSolOnClick;
}


binaryTreeCanvasSol.onclick = BTSolOnClick;

async function binaryTreeOnclick() {
    ctx0.clearRect(0, 0, binaryTreeCanvas.width, binaryTreeCanvas.height);
    binaryTreeCanvas.onclick = null;
    createdBT =await animateBinaryTreeMaze(41, 41, "binary-tree-maze-animation", 10);
    binaryTreeCanvas.onclick = binaryTreeOnclick;
}
binaryTreeCanvas.onclick = binaryTreeOnclick;