//? Création :
let notes = [1, 12, 14, 356];
let tableauVide = [];

//? Tableaux d'objets :
let tasks = [
    {id : 1, name : 'Courses', description : 'acheter repas du soir', complete : false, category : 'Nourriture'},
    
    {id : 2, name : 'Litière Fenouil', description : 'Enlever le caca 💩', complete : true, category : 'Ménage'},

    {id : 3, name : 'Trier biscuits', description : 'Virer les périmés', complete : false, category : 'Nourriture'}
];

//? Ajouter valeurs : 
let taskToAdd = {
    id : 4, name : 'Accrocher boules de Noël', description : 'Il est temps', complete : false, category : 'Maison'
}
tasks.push(taskToAdd); // On pourrait aussi juste ajouter l'objet complet dans les (), sans créer une variable avant, mais c'est plus propre avec une variable.

//? Parcourir : Boucles prévues pour parcourir les tableaux :

//* for ... of () : 
// :( pas accès à l'indice
for (let task of tasks) { // = à chaque tour de boucle, on ajoute une tâche...
    console.log(task); // Mais, si on l'affiche, on n'a pas les indices qui vont avec !
};

//* forEach () : 
// :) accès à l'indice !
tasks.forEach ( (task, indice) => {
    console.log(task);
}); // Exactement le même résultat que le for of au-dessus, mais avec accès à l'indice si besoin.

// Le forEach ne marche pas toujours => for of à la place.
// Exemple : en fait non, elle n'en a pas donné -_-

    // Petite parenthèse : On peut créer une fonction de 2 manières:
    function direBonjour() {};
    // OU :
    const direBonjour = () => {}; // = créer une fonction vierge, qu'on peut remplir plus tard.
    // La 2e méthode permet de faire un truc cool mais j'ai po compris (? éviter de créer des fonctions qui ont le même nom ou qlqch du genre ?).

//! Toutes les méthodes utiles :

//? Trouver un élément en particulier grâce à un "prédicat" :
// prédicat = condition, fonction qui permet de trouver un élément : 
let task3 = tasks.find((task) => task.id === 3); // Si il trouve ce qu'on cherche, il nous renvoie l'id qui correspond. Sinon, il renvoie undefined.
console.log(task3);

// Attention : si plusieurs éléments correspondent à notre condition, la fonction find renvoie toujours le premier élément qu'il trouve :
let taskFood = tasks.find((task) => task.category === 'Nourriture');
console.log(taskFood); // renvoie juste le premier élément qui contient 'Nourriture'.

// Et, si la condition ne correspond à aucun élément du tableau, find renvoie undefined :
let taskFlop = tasks.find((task) => task.name === 'Sortir les poubelles'); // = n'existe pas dans le tableau
console.log(taskFlop);

//* Trouver TOUS les élément qui correspondent au prédicat : FILTER au lieu de find :
let foodTasks = tasks.filter( (task) => task.category === 'Nourriture' );
console.log(foodTasks);
// Attention : FILTER renvoie TOUJOURS UN TABLEAU, même si rien ne correspond (dans ce cas, tableau vide) :
let adminTasks = tasks.filter( (task) => task.category === 'Administratif' );
console.log(adminTasks);
// Dans ce cas, on doit faire attention au genre de condition qu'on écrit.
// Par exemple, si après on crée un if(!adminTasks) (qui veut dire "S'il n'y a pas de adminTasks"), le tableau adminTasks existera, mais vide, donc la condition sera biaisée.

    //*Tips : On se sert souvent du FILTER pour faire des suppressions en une fois :
console.clear();
console.log('Suppression avec un filter :');
console.log(tasks);
tasks = tasks.filter( task => task.id !== 2);
console.log(tasks);

//? Modifier la structure d'un tableau :
// = fonction qui renvoie un autre tableau, modifié ( = pas le tableau 1 modifié, mais une copie modifiée) :
console.log('Transformer un tableau:');
//* MAP :
let tasksV2 = tasks.map (task => task.name); // ici, le nouveau tableau devient juste un tableau de chaines de caractères avec les nom des tâches.
    // OU : let tasksV2 = tasks.map (task => {return task.name}); 
console.log(tasksV2);

let tasksV3 = tasks.map ( task => { // Ici, le {return} est nécessaire car lui-même contient des {}, qui doivent être entre {} (pas tout capté) :
    return {
        id : task.id,
        nom : task.name,
        effectue : task.complete
    }
});
console.log(tasksV3);

//* EVERY :
let isAllTasksFood = tasks.every(task => task.category === 'Nourriture');
// renvoie un booléen qui vérifie si toutes les tâches ont la catégorie Nourriture
console.log(isAllTasksFood);

//* SOME :
let oneMinTasksFood = tasks.some(task => task.category === 'Nourriture');
// renvoie un booléen qui vérifie si au moins une tâche a la catégorie Nourriture.
console.log(oneMinTasksFood);

//* Autre fonction utile avec MAP :
tasks = tasks.map( task => {
    return {
        ...task, //je récupère tout ce qu'il y a déjà dans la tâche
        points : Math.floor(Math.random() * 4 + 1) //je rajoute ça
    }
})
console.log(tasks);

// ? Calculer un total
// Sans la fonction reduce :
let total = 0;
tasks.forEach(task => {
    total += task.points;
})
console.log(total);

//* Avec la méthode REDUCE :
// (méthode = fonction propre à un élément, ici reduce est la fonction appliquée à tasks, donc la méthode de tasks, mais au final c'est juste une fonction jpp de ce chipotage de vocabulaire) :

let total2 = tasks.reduce((total2 , task) => total2 + task.points, 0);
console.log(total2);


//? Destructuring + Spread operator :
//* Destructuring :
// Comme pour les objets, on peut extraire des parties d'un tableau. L'ordre aura une importance, la première variable permettra de stocker la première valeur du tableau, et ainsi de suite.
const [ task1, task2 ] = tasks;
// On a maintenant accès à ces deux variables pour notre code :
console.log(task1);
// Sera très utilisé en React surtout, je ne sais plus pourquoi tralala

//* ... : Spread operator :
const foodWords = ['patates', 'fenouil', 'tomate', 'oeufs'];
const animalWords = ['chat', 'chien', 'cheval'];
// Si je fais ça :
const wordsFlop = foodWords + animalWords;
console.log(wordsFlop); // Le résultat est une concaténation en string de tous les mots, tout collés et moches.

// Ou ça :
const wordsMiFlop = foodWords.concat(animalWords);
console.log(wordsMiFlop); // Ici, ça marche mais c'est chiant à écrire et ç apeut être très long si on a pleins de variables à concaténer.

//* Ce qu'il faut faire : ...
const words = [...foodWords, ...animalWords];
console.log(words); // ici, le résultat est le même qu'au-dessus mais plus propre, les ... récupèrent le contenu des tableaux, et les additionne. 
// => ... peuvent servir à ADDITIONNER des  tableaux.

// max accepte en paramètre des chiffres séparés par des ,
// On va donc éclater (spread) notre tableau pour n'avoir que les chiffres dedans :
// Les ... servent aussi à aller chercher des ÉLÉMENTS PARTICULIERS d'un tableau :
const results = [12, 8, 9, 35, 13, 4, 6, 18];
let max = Math.max(...results); // = aller chercher le nombre le plus haut du tableau.
console.log(max);

// En React, on s'en sert aussi pour AJOUTER des éléments à un tableau déjà fait (en "cassant" la référence, quoi que ça veuille dire) :
foodWords = [...foodWords, 'lait'];
console.log(foodWords);

