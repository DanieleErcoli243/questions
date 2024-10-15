// traversing the dom

// seleziono i bottoni dal DOM

/* const btns = document.querySelectorAll('.question-btn');

// ciclo sui bottoni

btns.forEach(btn => {
    // aggancio un ascoltatore di eventi a tutti i bottoni
    btn.addEventListener('click', e => {
        // assegno una variabile all'elemento genitore dell'elemento genitore
        const question = e.currentTarget.parentElement.parentElement;
        // aggiungo e tolgo la classe per aprire il testo
        question.classList.toggle('show-text');
        });
        }) */

//using selectors inside the element

// seleziono le domande negli elementi

const questions = document.querySelectorAll('.question');

// ciclo sulle domande

questions.forEach(question => {

});