//import './fakeAlbumAPI.js'; // = pour pouvoir utiliser la DB fakeAlbumAPI sans devoir alourdir le HTML avec un autre script.

const infoAlbum = async(id) => { // On prévient ici que la fonction est asynchrone, fonctionne avec le await plus bas
    //TODO :
    // But : récup l'album grâce son id
    // Si cet album existe, récup les chansons de cet album

    try {
        let album = await getAlbum(id); // = attends que la fonction s'exécute.
        let tracks = await getTracksOfAlbum(id); // TODO pourquoi on ne met pas albumId dans les parenthèses ??
        console.log('INSOF SUR L\'ALBUM :')
        console.log(`Album : ${album.name}`)
        console.log(`Cover : ${album.cover}`)
        console.log(`Titres :`)
        tracks.forEach((track, i) => {
            console.log(`Chansons n°${i+1} : ${track.name}`)
        });
    }
    catch(error) {
        // Si la récupération de l'album OU des tracks ne fonctionne pas, on arrive ici :
        console.error(error.message);
    }
}

infoAlbum(2);