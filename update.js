//3e fichier a executer avec :mongosh update.js
//! A EXECUTER UNE SEULE FOIS POUR LA MODIFICATION
var db = db.getSiblingDB("contact");// on oublie pas dans chaque nouveau fichier toujours avoir lutilisation de la base de donne

// Mettre à jour le prénom du contact de "Kefi Seif" à "Kefi Anis"
var modif=db.contactlist.updateOne(
    { Nom:"Kefi",Prenom: 'Seif'}, // Filtre pour trouver le document à mettre à jour
    { $set: { Prenom: "Anis" }} // Nouvelle valeur du prénom
);
print("Le prénom du contact a été modifié avec succès.");
printjson(modif);

// La modif passé on affiche la personne concerné.
var personmodif=db.contactlist.find({Prenom:"Anis"});
print("info sur la personne modifié");
printjson(personmodif);