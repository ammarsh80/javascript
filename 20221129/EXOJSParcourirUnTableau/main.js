let array = [1, 2, 3, 4, 5, 4, 3, 2, 1];

// avec la boucle for : (C'est la méthode la plus rapide)
for(let i= 0; i < array.length; i++)
{
     alert((array[i]));
}

// avec la boucle for in : (Cette méthode est la moins performante)
// for (let i in array) {
//     alert((array[i]));
// }


// avec la boucle for in : (cette boucla démarre directement par 2 et fini par 2!!)
// array.forEach(function(y) 
// { 
//     alert((array[y]));
// }
// );