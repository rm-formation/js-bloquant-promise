function calcul(valeurDepart, callback) {
    const randInt = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
    setTimeout(function() {
        callback(valeurDepart + randInt);
    }, randInt);
};

//Calcul réécris promise
function calculReecrisPromise(valeurDepart) {
    const comportementAsync = function(resolve, reject) {
        const randInt = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
        setTimeout(function() {
            resolve(valeurDepart + randInt);
        }, randInt);
    };

    const promise = new Promise(comportementAsync);
    return promise;
}

//Calcul encapsulé promise
function calculEncapsuleePromise(valeurDepart) {
    const promise = new Promise(function(resolve, reject) {
        calcul(valeurDepart, function(resultat) {
            resolve(resultat);
        });
    });
    return promise;
}

//Utilisation calcul callback
/* calcul(100, function(resultat) {
    console.log("resultat : ", resultat);
    calcul(resultat, function(resultat2) {
        console.log("resultat2 : ", resultat2);
        calcul(resultat2, function(resultat3) {
            console.log("resultat3 : ", resultat3);
            calcul(resultat3, function(resultat4) {
                console.log("Résultat final : ", resultat4);
            });
        })
    });
});  */

//Utilisation calcul promise (réécris ou encapsulé)
/* console.log("Avant appel promise classique");
calculReecrisPromise(100).then(function(resultat1) {
    console.log("resultat1 : ", resultat1);
    calculReecrisPromise(resultat1).then(function(resultat2) {
        console.log("resultat2 : ", resultat2);
        calculReecrisPromise(resultat2).then(function(resultat3) {
            console.log("resultat3 : ", resultat3);
        });
    });
}); */

calculEncapsuleePromise(100)
    .then(function(resultat1) {console.log("resultat1", resultat1); return calculEncapsuleePromise(resultat1)})
    .then(function(resultat2) {console.log("resultat2", resultat2); return calculEncapsuleePromise(resultat2)})
    .then(function(resultat3) {console.log("resultat3", resultat3); return calculEncapsuleePromise(resultat3)})
    .then(function(resultat4) {console.log("resultat4", resultat4); return calculEncapsuleePromise(resultat4)});

console.log("Après appel promise");