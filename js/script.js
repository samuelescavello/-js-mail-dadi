// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

let email = ['samu@gmail.com', 'luca@gmail.com', 'lorenzo@gmail.com', 'nicola@gmail.com', 'woitec@gmail.com'];

const button = document.querySelector('.btn-danger')
button.addEventListener('click', function () {

    let userEmail = document.getElementById('mail').value;
    let trovato = false;
    for (let i = 0; i < email.length; i++) {
        if (userEmail === email[i]) {
            trovato = true;
        }
    }

    const output = document.getElementById('output')

    if (trovato) {
        output.innerHTML = 'sei stato invitato!!!'
    } else {
        output.innerHTML = ' mi dispiace , non sei stato invitato!!!'
    }

})


// Generare un numero random da 1 a 6, sia per il giocatore sia
//  per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
// }

let gameDadi = document.getElementById('game2')
game2.addEventListener('click', function () {
    let userRandom = getRndInteger(1, 6);
    let pcRandom = getRndInteger(1, 6)
    console.log(userRandom)
    console.log(pcRandom)

    if (userRandom === pcRandom) {
        num.innerHTML = `
        <p> hai PAREGGIATO il tuo numero é "${userRandom}"... il computer aveva "${pcRandom}"</p>
        `
    }else if (userRandom > pcRandom) {
        num.innerHTML = `
    <p> hai VINTO il tuo numero é "${userRandom}"... il computer aveva "${pcRandom}"</p>
    `
    } else
    num.innerHTML = `
    <p> hai PERSO il tuo numero é "${userRandom}"... il computer aveva "${pcRandom}"</p>
    `




})


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
