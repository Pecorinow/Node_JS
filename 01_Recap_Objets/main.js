// Révisions objets
// Création
let user = {
    id : 1,
    firstname : 'Anne',
    "last name" : 'Onyme',
    email : 'anne.onyme@mousse.be',
    password : 'Soup',
}

// Utilisation
// Opérateur d'accès .
console.log(user.firstname);
console.log(user["firstname"]);

// ? Quand utiliser les []
// 1) Quand le json est fait avec les fesses
console.log( user["last name"] );
// 2) Quand vous voulez récupérer une propriété en particulier mais le nom est stocké dans une variable
let nomProp = 'email';
console.log( user[nomProp] ); //Je cherche une propriété qui porte le nom qui sera stocké dans la variable nomProp
console.log( user.nomProp ); //Je cherche une propriété qui s'appelle littéralement nomProp (et qui n'existe pas donc undefined)

// "Nouveautés"
// Récupérer les propriétés d'un objet pour boucle dessus
let userProperties = Object.keys(user);
console.log(userProperties);

for(let propertyName of userProperties){
    console.log(`${propertyName} : ${ user[propertyName] }`);
}

// destructuring 

// Utilisation n°1 : Object assignement destructuring
// const email = user.email;
// const password = user.password;

// En faisant cette ligne de code, on extraie de user les propriétés mises entre les {} et on les met dans une variable du même nom
const { email, password } = user;
console.log(email);
console.log(password);

// Utilisation n°2 : Extracting properties
// (copy)
// On fait une copie de notre utilisateur mais on rajoute une nouvelle propriété
let userBis = {
    ...user, //on récupère tout ce qu'il y a dans l'objet user
    role : 'Admin' //et on rajoute une propriété en plus
}
console.log(userBis);

// Cet opérateur permet également de modifier une propriété déjà existante
// Inutile dans notre cas de figure mais serait efficace dans un map de tableau par ex : 
userBis = {
    ...userBis,
    password : 'Taylor'
}

// ? Rappel 
// ! On peut créer des objets dans lequels on met des fonctions
const konsol = {
    ecrire : (message) => {
        console.log(message);
    },

    erreur : (message) => {
        console.error(message)
    }
}

konsol.ecrire("Coucou");
konsol.erreur("Aaaaaaaaah");

// On va beaucoup l'utiliser en Node pour faire des "utilitaires"
const userController = {
    getAll : () => {
        console.log("Renvoie tous les utilisateurs")
    },

    getById : (id) => {
        console.log(`Renvoie l'utilisateur qui a l'id ${id}`);
        
    },
}

// Pas forcément utile pour Node mais plus pour API et Json en général

const question = {
    enonce : "Que signifie HTML ?",
    reponses : [
        { id : 'A', texte : 'Hyper Turbo Mega Lol'},
        { id : 'B', texte : 'HyperText Markup Language'},
        { id : 'C', texte : 'HyperTendre Makup Lingette' }
    ],
    bonneReponse : 'B'
}

//users + tasks + categories

// const task = {
//     id : 1,
//     name : 'Aller à la commune',
//     description : 'Aller changer le é de son nom de famille à la commune au service population étrangère',
//     date : '2025-12-05',
//     complete : false,
//     categoryId : 1,
//     userId : 2
// }

const task = {
    id : 1,
    name : 'Aller à la commune',
    description : 'Aller changer le é de son nom de famille à la commune au service population étrangère',
    date : '2025-12-05',
    complete : false,
    categoryId : 1,
    category : {
        id : 1,
        name : 'Administratif'
    },
    userId : 2,
    user : {
        id : 2,
        firstname : 'Aude',
        lastname : 'BeurivÉ',
        //ce qu'on veut SAUF les infos sensibles
    }
} 

// opérateur ... -> Spread operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax









