// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l’utente clicca su ogni cella:
// se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina,
// altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
// (come detto sull’effetiva interfaccia fate voi, non ci son specifiche vincolanti, ma partite semplici)
// La partita termina quando il giocatore clicca su una bomba
// o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve scoprire tutte le bombe e comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato un quadratino con un numero consentito. (quindi se ci pensate dovrete tenere traccia del punteggio).



let choiseDifficult = prompt("Benvenuto al gioco Campo minato: scegli difficolta: 1, 2, 3");
const difficolta = ["1", "2", "3"];
const gridCont = document.querySelector(".grid");
let contBomba = [];
let score = 0;


// Il COMPUTER DEVE GENERARE 16 NUMERI RANDOM CHE SERVONO PER LE BOMBE
// while (contBomba.length < 16) {
//     let numbBomba = Math.floor(Math.random() * 100) + 1;
//     if(contBomba.indexOf(numbBomba) === -1) {
//         contBomba.push(numbBomba);
//     }
// }
// console.log(contBomba);


// SE L'USER SCEGLIE DIFFICOLTA 1
if (choiseDifficult === difficolta[0]) {
    numeroBlocchi = 100;
    defaultClass = "square";
    while (contBomba.length < 16) {
        let numbBomba = Math.floor(Math.random() * 100) + 1;
        if(contBomba.indexOf(numbBomba) === -1) {
            contBomba.push(numbBomba);
        }
    }
    console.log(contBomba);

// SE L'USER SCEGLIE DIFFICOLTA 2
} else if (choiseDifficult === difficolta[1]) {
    numeroBlocchi = 81;
    defaultClass = "square1";
    while (contBomba.length < 16) {
        let numbBomba = Math.floor(Math.random() * 81) + 1;
        if(contBomba.indexOf(numbBomba) === -1) {
            contBomba.push(numbBomba);
        }
    }
    console.log(contBomba);

// SE L'USER SCEGLIE DIFFICOLTA 3
} if (choiseDifficult === difficolta[2]) {
    numeroBlocchi = 49;
    defaultClass = "square2";
    while (contBomba.length < 16) {
        let numbBomba = Math.floor(Math.random() * 49) + 1;
        if(contBomba.indexOf(numbBomba) === -1) {
            contBomba.push(numbBomba);
        }
    }
    console.log(contBomba);
}



// CICLO DOPO LA SCELTA DELLA DIFFICOLTA
for (i = 1; i <= numeroBlocchi; i++) {
    let newElement = generaElemento("div", defaultClass);
    newElement.setAttribute("id", i);
    newElement.addEventListener('click', 
        function() {
            let id = parseInt(newElement.id);
            if(contBomba.includes(id)) {
                this.classList.add("bomba");
                alert("hai perso e hai totalizzato " + score + " punti");

            } else if (contBomba !== id) {
                this.classList.add("selection_square");
                score++
            }
        }
    );
    newElement.append(i);
    gridCont.appendChild(newElement);
}



// FUNZIONI
function generaElemento(elementoGen, classPlus) {
    let cont = document.createElement(elementoGen);
    cont.classList.add(classPlus);
    return cont
}


