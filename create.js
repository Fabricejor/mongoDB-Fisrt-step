// ! J'ai ecris des fichier scripts qui pourront etre executer avec la comande mongosh nomfichier.js

// 1er fichier a executer

// * Premiere partie Configuration de la base de donnes
// use contact;// creer une base de donnés si elle existe pas
var db = db.getSiblingDB("contact");// equivalent de use contact en js
db.createCollection("contactlist") ;// 2 creer une collection

//on creer un tableau d'objet
var documents = [
    {_id:1,Nom: "Ben Lahmer", Prenom: "Fares", Email: "fares@gmail.com", age:26},
    {_id:2,Nom: "Kefi", Prenom : "Seif", Email : "kefi@gmail.com", age:15},
    {_id:3,Nom: "Fatnassi", Prenom : "Sarra", Courriel : "sarra.f@gmail.com", age : 40},
    {_id:4,Nom: "Ben Yahia", Prenom : "Rym", age:4},
    {_id:5,Nom: "Cherif", Prenom : "Sami", age:3}
];// on complete avec les _id sinon si on laisse vide c une chaine de charactere aleatoires et sa posera probleme pour les requete de selection surtout si quelqun dautre execute le script
db.contactlist.insertMany(documents); // et on insere le tableau dans la conlection

