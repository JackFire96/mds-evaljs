'use strict';
function checkInput() {
    var nom = document.getElementById('nom');
    var prenom = document.getElementById('prenom');
    var email = document.getElementById('email');
    var mdp = document.getElementById('mdp');
    var error = document.getElementById('error');
    if (nom.RegExp(/([.,;:?!§@àçèé&"'()])/)) {
        error.innerHTML('<p>Le champ "nom" contient des caractères non autorisés</p>');
    } else if (prenom.RegExp(/([.,;:?!§@àçèé&"'()])/)) {
        error.innerHTML('<p>Le champ "prénom" contient des caractères non autorisés</p>');
    } else if (!email.RegExp(/(\w+\@\w+.com|\w+\@\w+.fr)/)) {
        error.innerHTML('<p>Le fomat de l\'email est incorrect</p>');
    } else if(!mdp.RegExp('/([a-zA-Z0-9])/'))
}