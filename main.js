// Creare in HTML una griglia di 5x5 quadrati vuoti.
// Con jQuery, scrivere un numero random tra 0 e 10 dentro ognuno.
// BONUS 1: generare la griglia con jQuery
// BONUS 2: se il numero da inserire è pari scriverlo in rosso, se è dispari in nero, se è 0 in verde

//Creo un ciclo for per generare le 25 singole celle della griglia, al contempo generando un numero random e assegnandogli il rispettivo colore adeguato
for (i = 0; i < 25; i++) {
    //Genero un numero random che verrà inserito nella casella tra 0 e 10
    var random_number = getRandomNumber(0 ,10);
    console.log(random_number);

    //Aggiungo la casella al codice html, con la classe per il colore adeguata al numero
    if (random_number == 0) {
        $(".griglia").append("<div class=\"box numero-verde\">" + random_number + "</div>");
    } else if ((random_number % 2) == 0) {
        $(".griglia").append("<div class=\"box numero-rosso\">" + random_number + "</div>");
    } else {
        $(".griglia").append("<div class=\"box\">" + random_number + "</div>");
    }
}


//FUNZIONI

//Funzione che genere un numero randomico in un dato intervallo
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
