//4e fichier a executer
var db = db.getSiblingDB("contact");// on oublie pas dans chaque nouveau fichier toujours avoir lutilisation de la base de donne
var del = db.contactlist.deleteMany(
    { "age": { $lt: 5 } }
 )
 print("contact modified");
 printjson(del);

 //!Meme chose pour celui ci on l'execute une fois la deuxieme fois ca ne marchera pas
 //! mongosh delete.js   pour executer
 // La modif passé on affiche la personne concerné.
var DbapresSupression=db.contactlist.find();
print("info apres suppression");
printjson(DbapresSupression);