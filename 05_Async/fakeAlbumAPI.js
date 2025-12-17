const albums = [
    {id : 1, name : 'Merry Christmas', cover : 'https://en.wikipedia.org/wiki/Merry_Christmas_%28Mariah_Carey_album%29#/media/File:Merry_Christmas_Mariah_Carey.png'}
];

const tracks = [
    {id : 1, name : 'Silent Night', albumId : 1},
    {id : 2, name : 'All I want for Christmas is you', albumId : 1},
    {id : 3, name : 'O Holy Night', albumId : 1}
];

console.log(albums);
console.log(tracks);

// Pour cette fois, on va avoir besoin de promesses pour simuler nos appels vers une DB.
// On va utiliser un ORM, Object-Relationnal Mapping, qui nous permettra de renvoyer des promesses sans avoir à les faire en Node API (je pense, je suis pas sûre)

const getAlbums = (id) => {
    return new Promise ((resolve, reject) => {
        // setTimeaout sert à simuler que la DB met du temps à répondre :
        // setTimeout(fonctionAExecuter, TempsEnMillisecondes) :
        setTimeout(() => {
            let albumSearched = albums.find(album => album.id === id);
            // Si pas d'album :
            if(!albumSearched) {
                // reject va faire comme notre throw error, notre promesse ne ser apas tenue :
                reject(new Error (`Pas d'album avec l'id ${id}`));
            }

            // On va simuler que la DB est peut-être en train de brûler (oui) :
            // On crée un nombre aléatoire entre 1 et 5, si c'est 3 c'est que ça crame :
            if(Math.florr(Math.random() * 5 + 1 ) ===3) {
                reject(new Error('La DB ne répond pas'))
            }

            // Et enfin, si tout s'est bien passé, on résout la requête et on envoie l'album trouvé :
            resolve(albumSearched)
        }, 1000); // = 1000 milisecondes
    })
}

const getTracksOfAlbum = (idAlbum) => {

}

const addAlbum = (name, cover, tracks) => {

}

const addTracksToAlbum = (idAlbum, tracksToAdd) => {

}
