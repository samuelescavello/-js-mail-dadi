// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

let email = ['samu@gmail.com', 'luca@gmail.com', 'nicola@gmail.com', 'woitec@gmail.com'];

const button = document.querySelector('.btn')
button.addEventListener('click', function(){
    
    let userEmail = document.getElementById('mail').value ;
    let trovato = false ;
    for(let i = 0 ; i < email.length ; i++){
        if(userEmail === email[i]){
            trovato = true ;
        }
    }

    const output = document.getElementById('output')

    if(trovato){
        output.innerHTML = 'sei stato invitato!!!'
    }else{
        output.innerHTML = ' mi dispiace , non sei stato invitato!!!'
    }

})