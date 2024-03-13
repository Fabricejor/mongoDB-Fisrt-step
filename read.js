//! 2e partie Utilisation de la base de donnees
//2e fichier a excuter
//afficher les informations d'une personne (exemple le dernier)
// on va utiliser des syntaxe purement javascript  mais qui pourront etre applicable a mongosh
var db = db.getSiblingDB("contact");// on oublie pas dans chaque nouveau fichier toujours avoir lutilisation de la base de donne
var infoPersonne=db.contactlist.find({_id:5});
print("info sur la personne de id=5");
printjson(infoPersonne);

// Afficher tous les contacts dont l'âge est supérieur à 18 ans.
var majeurpersonne=db.contactlist.find({age:{$gt:18}}); //!  gt=greater than
print("info sur les  personnes majeurs");
printjson(majeurpersonne);

// Afficher tous les contacts dont l'âge est supérieur à 18 ans et dont le nom contient "ah"
var req =db.contactlist.find(
    { $and: [//condition du et
            { age: { $gt: 18 } },
            { Nom: /ah/ }//Attention a la maj ici 
            ] 
    }
);
print("info sur les  personnes majeurs et don le nom contient ah");
printjson(req);
