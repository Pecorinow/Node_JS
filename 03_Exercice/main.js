// Panier de produits

// Créez un panier de produits

// Un produit possède

// un id
// un nom
// une categorie
// un prix à l'unité
// une quantité

// Ajoutez un produit

// dans le panier
// Parcourez le panier

// pour afficher les produits
// Trouvez le produit

// qui possède l'id X (mettez un nombre qui existe chez vous)
// Trouvez tous les produits

// de la catégorie X (mettez un nom de catégorie que vous avez fait)
// Trouvez s'il y a au moins un produit

// contenant le mot 'Chocolat' dans le nom (indice : avec includes) et si oui, affichez un message ('C'est Saint Nicolas, le chocolat est offert')
// Modifiez les produits

// pour rajouter à tous les produits une nouvelle propriété prixTotal où vous mettrez la valeur de prix*quantité de chaque produit
// Calculer le total du panier


// option 1 : (on s'en fiche de la question d'avant, on fait payer le chocolat hein)
// option 2 : (on offre le chocolat donc on ne le compte pas)


// -> Bonus : Récupérez le prix le plus grand parmi les produits puis trouver le produit qui possède le prix le plus grand et l'afficher



let panier = [
    {id : 1, nom : 'pain', catégorie : 'Nourriture', prix : 2.5, quantite : 1},

    {id : 2, nom : 'vin', catégorie : 'Boisson', prix : 5.5, quantite : 2},

    {id : 3, nom : 'boursin', catégorie : 'Nourriture', prix : 6, quantite : 2},

    {id : 4, nom : 'tarte tatin', catégorie : 'Nourriture', prix : 10, quantite : 1}
];
console.log(panier);

// Ajoutez un produit
panier = [...panier, {id : 5, nom : 'petit chien', catégorie : 'Animaux', prix : 1000, quantite : 1}];
console.log(panier);

// Parcourez le panier pour afficher les produits
panier.forEach( (produit) => {
    console.log(produit);
});

// Trouvez le produit qui possède l'id X (mettez un nombre qui existe chez vous)
// Version avec un if :
let produitATrouver = panier.find((produit)=> produit.id === 4);
console.log(produitATrouver);

if(!produitATrouver) {
    console.log(`Il n'y a pas de produit avec cet id !`);
} else {
    console.log(`Le produit à trouver est ${produitATrouver.nom}`);
}

// Trouvez tous les produits de la catégorie X (mettez un nom de catégorie que vous avez fait)
let miam = panier.filter((produit) => produit.catégorie === 'Nourriture');
console.log(miam);

// Trouvez s'il y a au moins un produit contenant le mot 'tatin' dans le nom (indice : avec includes) et si oui, affichez un message ('C'est la meilleure tarte de l\'Univers, tant-pis pour le chocolat 🍮')
if (panier.some(produit => produit.nom.includes('tatin'))) {
    console.log('C\'est la meilleure tarte de l\'Univers, tant-pis pour le chocolat');
};
    //let jeVeuxUneTarte = panier.some(produit => produit.nom.includes('tatin'));
    //console.log(jeVeuxUneTarte); // renvoie true => il y a bien un produit qui contient 'tatin' 🍮!

// Modifiez les produits pour rajouter à tous les produits une nouvelle propriété prixTotal où vous mettrez la valeur de prix*quantité de chaque produit
panier = panier.map( produit => {
    return {...produit, prixTotal : Math.floor(produit.quantite * produit.prix)
    }
});
console.log(panier);

// Calculer le total du panier
// option 1 : (on s'en fiche de la question d'avant, on fait payer le chocolat hein)
let prixPanier = panier.reduce((prixPanier, produit) => prixPanier + produit.prixTotal, 0);
console.log(prixPanier); // Omg c'est juste j'y crois pas je suis un génie

//! option 2 : (on offre le chocolat donc on ne le compte pas)
let prixPanier2 = panier.reduce((prixPanier2, produit) => {
    if(!produit.nom.includes('tatin')) {
        return prixPanier2 + produit.prixTotal, 0;
    } else {
        return prixPanier2 + 0;
    }
}, 0);
console.log(prixPanier2);


// -> Bonus : Récupérez le prix le plus grand parmi les produits puis trouver le produit qui possède le prix le plus grand et l'afficher
let prices = panier.map(produit => produit.prix);
console.log(prices);

let prixMax = Math.max(...prices);
console.log(prixMax);

let produitLePlusCher = panier.find((produit) => produit.prix === prixMax);
console.log(produitLePlusCher);
// Je sui sun génie



