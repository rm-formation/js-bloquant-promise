function bloquant() {
    const randInt = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
    const startTime = Date.now();
    while (Date.now() - startTime < 5000) {
        console.log("Bloquant en cours");
    }
    if (randInt % 5 === 0) {
        throw new Error("Bloquant : erreur");
    }
    return randInt;
}

let compteurClick = 0;
let totalBloquant = 0;

/*
Bases à mettre en place :
- Au click sur "bouton-click", on incrémente compteurClick 
et on affiche la nouvelle valeur dans div-compteur-click
- Au click sur "bouton-bloquant", on attends la fin du comportement, 
on ajoute le résultat à "totalBloquant", et on affiche la nouvelle
valeur dans div-total-bloquant

Objectif : 
Créer une nouvelle fonction "bloquantPromise" qui encapsule bloquant et retourne une promise
Quand bloquant lance une erreur, je ne met pas à jour le total et j'affiche l'erreur dans la console.
Qu'il y ai une erreur ou non, j'affiche dans la console que le comportement est terminé.
Tester de deux façons : 
- le bouton "click" doit rester utilisable pendant que le comportement 
bloquant est exécuté
- Tester ensuite de lancer plusieurs fois bloquant au clic, 
*/

