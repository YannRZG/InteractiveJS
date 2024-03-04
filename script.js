// exo 1
var function1 = document.querySelector('footer');

    function1.addEventListener('click', function() {
    
});
var footer = document.querySelector('footer');

var clickNum = 0;

footer.addEventListener('click', function() {

    clickNum++;
    console.log("clic numéro " + clickNum);
});


// exo 2

var hamburgerButton = document.querySelector('.navbar-toggler');

var navbarHeader = document.querySelector('#navbarHeader');

hamburgerButton.addEventListener('click', function() {
    // Ajout ou suppression de la classe 'collapse' de l'élément navbarHeader
    navbarHeader.classList.toggle('collapse');
});



//exo 3
var firstCard = document.querySelectorAll('.col-md-4')[0];
console.log("voici la firstCard : " , firstCard);

var editButton = document.querySelector('.btn.btn-sm.btn-outline-secondary');
console.log("Voici le editButton de la firstCard : " , editButton);
editButton.addEventListener('click', function() {
    firstCard.style.color = 'red';
});
// Sans les console.log
var firstCard = document.querySelector('.col-md-4');
var editButton = firstCard.querySelector('.btn.btn-sm.btn-outline-secondary');

editButton.addEventListener('click', function() {
    firstCard.style.color = 'red';
});



//exo 4
var secondCard = document.querySelectorAll('.col-md-4')[1];
console.log("voici la secondCard : ", secondCard);

var editButton = document.querySelector('.btn.btn-sm.btn-outline-secondary');
console.log("Voici le editButton de la secondCard : ", editButton);
editButton.addEventListener('click', function() {
    if (secondCard.style.color === 'green'){

        secondCard.style.color = '' ;
        
    }else {
        secondCard.style.color = 'green';
        }
});


//exo 5 
// Sélection de la navbar
var navbar = document.querySelector('header');

// Variable pour suivre l'état de la deleteBootsrap
var deleteBootsrap = false;

// Détecter les double-clics sur la navbar
navbar.addEventListener('dblclick', function() {
    // Si la fonctionnalité nucléaire est désactivée, la désactiver
    if (!deleteBootsrap) {
        // Sélection du lien vers le fichier CSS Bootstrap
        var bootstrapLink = document.querySelector('link[href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"]');
        
        // Suppression du lien vers le fichier CSS Bootstrap
        bootstrapLink.remove();
        
        // Mettre à jour le statut de la fonctionnalité nucléaire
        deleteBootsrap = true;
    } else {
        // Si la fonctionnalité nucléaire est activée, la désactiver
        // Création d'un élément link pour relier à nouveau la page au fichier CSS Bootstrap
        var newLink = document.createElement('link');
        newLink.rel = 'stylesheet';
        newLink.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
        
        // Ajout du lien au niveau de la tête (head) de la page
        document.head.appendChild(newLink);
        
        // Mettre à jour le statut de la fonctionnalité nucléaire
        deleteBootsrap = false;
    }
});

// exo 6

// Sélection de toutes les cartes
var cards = document.querySelectorAll('.card');

// Parcourir chaque carte et ajouter un écouteur d'événements pour le survol de chaque carte
cards.forEach(function(card) {
    var viewButton = card.querySelector('.btn.btn-sm.btn-success');
    var cardImage = card.querySelector('.card-img-top');
    var cardText = card.querySelector('.card-text');

    // Ajout de l'écouteur d'événements pour le survol du bouton "View"
    viewButton.addEventListener('mouseenter', function() {
        // Réduire la taille de la carte avec une transition
        card.style.transform = 'scale(0.8)';
        // Réduire la taille du texte et de l'image de la carte avec une transition
        cardImage.style.transform = 'scale(0.2)';
        cardText.style.opacity = '0';
    });

    // Ajout de l'écouteur d'événements pour la fin du survol du bouton "View"
    viewButton.addEventListener('mouseleave', function() {
        // Restaurer la taille normale de la carte avec une transition
        card.style.transform = 'scale(1)';
        // Restaurer la taille normale du texte et de l'image de la carte avec une transition
        cardImage.style.transform = 'scale(1)';
        cardText.style.opacity = '1';
    });
});

//exo 7
// bouton "==>" avec la classe .btn-secondary
var moveButton = document.querySelector('.btn.btn-secondary');


moveButton.addEventListener('click', function() {

    var cardList = document.querySelector('.album.py-5.bg-light .row');

// Sélection de la dernière card 
    var lastCard = cardList.lastElementChild;

// Déplacement de la dernière card pour la placer en premier
    cardList.insertBefore(lastCard, cardList.firstElementChild);
});