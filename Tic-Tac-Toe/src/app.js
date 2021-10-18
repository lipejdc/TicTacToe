// HTML ELEMENTS:

const boxDivs = document.querySelectorAll('.box'); //Nimmt alle Elemente mit der Klasse "box"

// GAME VARIABLES:

let isTurnX = true; //Wenn das wahr ist, ist X dran. Wenn es falsch ist, dann ist O dran.
let winner = null; //Diese Variable wird später geändert, um den Gewinner zu identifizieren.

// FUNCTIONS:

const checkGameStatus = function () {
    // 9 verschiedene Variablen, um zu überprüfen, ob es ein X oder O in der jeweiligen Zellen gibt
    // boxDiv Index identifiziert die Zelle, classList Index identifiziert, ob die Zelle ein X oder O hat
    const topLeft = boxDivs[0].classList[2];
    const topMiddle = boxDivs[1].classList[2]
    const topRight = boxDivs[2].classList[2]
    const middleLeft = boxDivs[3].classList[2]
    const middleMiddle = boxDivs[4].classList[2]
    const middleRight = boxDivs[5].classList[2]
    const bottomLeft = boxDivs[6].classList[2]
    const bottomMiddle = boxDivs[7].classList[2]
    const bottomRight = boxDivs[8].classList[2]

    // CHECKING FOR A WINNER:
     if (topLeft && topLeft === topMiddle && topLeft === topRight) {
         //Die erste Bedingung überprüft ob topLeft existiert. Ohne diese Bedingung ist das Statement true, weil topLeft, topMiddle
         // und topRight undefined sind. Erst wenn ein X oder O gesetzt wird, sind sie nicht mehr undefined.
         winner = topLeft; //Gewinner ist der Wert von topLeft (X oder O).
         alert(`${topLeft} has won!`);
     }
     else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
         winner = middleLeft;
         alert(`${middleLeft} has won!`);
     }
     else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
         winner = bottomLeft;
         alert(`${bottomLeft} has won!`);
     }
     else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
         winner = topLeft;
         alert(`${topLeft} has won!`);
     }
     else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
         winner = topMiddle;
         alert(`${topMiddle} has won!`);
     }
     else if (topRight && topRight === middleRight && topRight === bottomRight) {
         winner = topRight;
         alert(`${topRight} has won!`);
     }
     else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
         winner = topLeft;
         alert(`${topLeft} has won!`);
     }
     else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
         winner = topRight;
         alert(`${topRight} has won!`);
     } 
     else if (topRight && topMiddle && topLeft && middleLeft && middleMiddle && middleRight &&
        bottomLeft && bottomMiddle && bottomRight) {
            //Unentschieden: wenn es einen Wert auf all diesen Feldern gibt und niemand hat gewonnen.
            alert("It is a tie!");
        }
};


// EVENT HANDLERS:

const boxClick = function (e) {
    const getClasses = e.target.classList; // Bei jedem Event (click) wird das Target identifiziert (auf welche Zelle man geklickt hat). 
    // Es holt dann jede Klasse vom Element, das sich in dieser Zelle befindet (div).
    const location = e.target.classList[1]; //Bei jedem Event (click) wird das Target identifiziert (auf welche Zelle man geklickt hat). Index nimmt die zweite CSS-Klasse.
    console.log("location", location);

    if (getClasses[2] === 'x' || getClasses[2] === 'o') {
        return; // Wenn "x" oder "o" das zweite Klassen-Index haben (also die dritte Klasse des Elementes sind), tue nichts.
    }

    if (isTurnX) {
        getClasses.add('x'); //Bei jedem Event (click) auf einer Zelle, wird für das Element die CSS-Klasse "x" hinzugefügt
        checkGameStatus() //Ruft die Funktion "checkGameStatus" auf.
        isTurnX = !isTurnX //Wenn X schon auf das Spielfeld gesetzt wird, dann ist O dran.
    } 
    else {
        getClasses.add('o') //Bei jedem Event (click) auf einer Zelle, wird für das Element die CSS-Klasse "o" hinzugefügt
        checkGameStatus() //Ruft die Funktion "checkGameStatus" auf.
        isTurnX = !isTurnX //Wenn O schon auf das Spielfeld gesetzt wird, dann ist X dran.
    }
};

// EVENT LISTENERS:

    // Loop über jedes Element in boxDivs und speichert sie in der "boxDiv" Variable
for (const boxDiv of boxDivs) {
    boxDiv.addEventListener('click', boxClick) // AddEventListener für jedes boxDiv bzw. jede Zelle
}
