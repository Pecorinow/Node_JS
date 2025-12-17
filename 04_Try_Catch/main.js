// ! Objet Error :
// Il existe en JS un objet Error qui permet de créer une erreur avec un message perspnalisé. On s'en sert avec un mot cle qui s'appelle THROW qui servira à la "jeter".
let myError = new Error("mon message personnbalisé");
//console.log(myError);

// En  général, on va plutôt renvoyer des erreurs quand qlq chose se passe mal.
    //TODO Voir Mongo (le langage qu'on utilisera en base de donnée) et SQL / No SQL.

const users = [
    {
        id : 1,
        lastname : 'Poveda',
        firstname : 'Caroline',
        email : 'pecorino@test.be',
        password : 'Test1234=' // Le mdp ne ser ajamais noté en clair comme ça dans une DB, ici c'est juste pour l'exemple
    },
    {id : 2,
    lastname : 'Le Chat',
    firstname : 'Fenouil',
    email : 'fun-nouille@test.be',
    password : 'Miaou1234='},
];

// On va créer deux fonctions qui peuvent potentiellement échouer :

//* 1e fonction :
// On utilise la nouvelle notation qu'on a apprise, où on stocke la fonction dans une constante :
// function getUserById(id) {} devient :
const getUserById = (id) => {
    let userSearched = users.find( user => user.id === id);
    // = trouver l'user dont l'id est égal à l'id que j'aurai reçu en paramètre.

    // S'il y a bien un user avec cet id, notre userSarched est rempli avec un objet utilisateur. Sinon, userSearched contiendra undefined.
    if(!userSearched) { // = si c'est undefined...
        throw new Error('utilisateur inexistant'); // = créer un nouvel objet qui s'appelle Error
    }

    return userSearched; // = si c'est pas undefined, on renvoie bien l'utilisateur recherché.

    //* On gère les cas d'erreur en premier, car le THROW a le même effet qu'un return : il nous fait sortir de la fonction, et donc on ne passe jamais au return juste en dessous (qui est inutile, puisque dans le cas où le if s'applique, l'utilisateur n'existe pas). Si il existe, on ne passe jamais par le if et on passe direct au return.
}

//* 2e fonction :
const login = (email, password) => {
    // On récup d'abord l'utilisateur qui possède cette adrese mail :
    let userSearched = users.find(user => user.email === email);
    // Si on a rien dans userSarched, c'est qu'on a pas d'utilisateur avec ce mail :
    if(!userSearched) {
        throw new Error("Email inconnu");
    }

    // Si par contre on a bien récup un user, on va vérifier son mdp :
    if(userSearched.password !== password) {
        throw new Error("Mauvais mot de passe");
    }

    return userSearched; // Quand on sera en APi, on revnerra une version modifiée de l'utlisateur sans les données sensibles (mdp, mail...).
    // = un DTO, Data Transfer Object = format que prendront les objets selo les cas de figure (mail non modifiable, infos cachées...).
}

// ! Si on utilise ces fonctions sans Try Catch, on ira pas bien loin :
//* Cas où tout marche bien :
console.log("Cas où tout marche bien :");
console.log("Tentative de connexion :");
let connectedUser = login("pecorino@test.be", "Test1234=");
console.log(`Bienvenue ${connectedUser} !`);

console.log('On recherche l\'utilisateur qui a l\'id 2 pour l\'ajouter en ami :');
let friendlyUser = getUserById(2);
console.log(`${connectedUser.firstname} et ${friendlyUser.firstname} sont maintenant amis !`);

console.log();

//* Cas où tout ne marche pas  bien :
// console.log("Cas où tout marche PAS bien :");
// console.log("Tentative de connexion :");
// let connectedUser2 = login("spongeBob@test.be", "Bob1234=");
// console.log(`Bienvenue ${connectedUser2.firstname} !`);

// console.log('On recherche l\'utilisateur qui a l\'id 3 pour l\'ajouter en ami :');
// let friendlyUser2 = getUserById(3);
// console.log(`${connectedUser2.firstname} et ${friendlyUser2.firstname} sont maintenant amis !`);

// console.log();
 
// Ici, comme on n'avait pas de Try Catch, tout plante dès qu'il y a une erreur => on met tout en commentaires, sinon on ne peut plus afficher de code dans la page.


// ! Try... Catch :
// Utilisé côté API quand on risque de devoir renvoyer des messages d'erreur.
// Le but du Try Catch est d'essayer de faire une action (try), d'attraper une erreur s'il y en a (catch), et de pouvoir continuer à faire le reste du code sans que tout ne plante.

// Toutes les actions dépendantes les unes des autres devront se mettre dans le même bloc, pcq on essaie de faire la totlaité de l'action :

try { // On essaie de faire ces actions dans l'oredre, et à la première qui provoque une erreur, on passe dans le bloc catch :
    console.log("Connexion...");
    let connectedUser = login('abc', 'def'); // on peut mettre un nom qui existe déjà ailleurs, puisque connectedUser et friendlyUser n'existent ici que dans le bloc try.
    console.log('Récup user');
    let friendlyUser = getUserById(6);
    console.log(`${connectedUser.firstname} et ${friendlyUser.firstname} sont maintenant amis !`);

} catch(error) {
    console.error(error.message); //* Le 'error' peut s'écrire comme on veut, mais ce paramètre contient l'objet Error qu'on a throw en ligne 49 ou 54, selon que l'erreur vienne du mail ou du mdp.
    // Si les deux infos du dessus sont fausses, alors le catch affiche la première erreur détectée avec le message d'erreur correspondant.
    // Si une des infos est fausse, il affiche celle qui est fausse avec le message d'erreur correspondant.
}

console.log('Suite du programme'); // Si ça s'affiche malgré que les users n'existent pas, c'est que le catch a bien fait son boulot !

//* Exemple avec une API de musique où on essaie d'ajouter des titres à un album :
// track (name, duration)
// album (name, cover)

// addAlbum(nameAlbum, coverAlbum, tracks)
// -> 1) Ajouter l'album dans la DB et renvoyer son id
// -> 2) Pour chaque track, les ajouter en les reliant à l'id de l'album.
//* Ces deux actions doivent se faire avec un TRY CATCH, au cas où on essaierait d'ajouter une track à un album qui n'a pas encore été ajouté à la DB => Si la création de l'album plante, on n'ajoutera pas les tracks.
//* Il faut aussi ajouter un ASYNC : Si la création de l'album prend du temps, il faudra attendre que ce soit fini pour y ajouter les tracks !