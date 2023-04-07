COMMANDES:
Ctrl +%: pour ouvrir le CMD
Ctrl +C: couper le CMD
Ctrl +D: sortir du CMD
Flèche du haut: remettre la dernière commande du CMD

IMPORTATION MODULE 'fs'
const fs = require('fs);
module de node “fs” est
un module qui contient plusieurs méthodes asynchrone dont il faut écrire le nom suivi de Sync pour
les rendre synchrone. 

POUR CREER UN DOSSIER (dezpuis le module 'fs')
méthode ‘mkdir’qui prend deux paramètres:le nom du dossier que nous souhaitons créer et une fonction callback (FCT if...else pour la gestion des erreurs)
méthode ‘existsSync’:pour que le dossier se créer seulement s'il n'existe pas déjà

POUR SUPPRIMER RECREER DOSSIER
rmdir remove  DONC VA SUPPRIMER LE DOSSIER , mkdir Make DONC VA CREER LE DOSSIER

CREER UN FICHIER SUR NODE JS:
const fs = require ('fs');
fs.writeFile avec 3 paramètres:( file:chemin du fichier, data:contenu (ce que nous voulons écrire dedans), options:la fction callback avec la gestion des erreurs)
+convertir en chaîne de caractères avec la méthode javascript “toString”

PUIS POUR LIRE LE DOSSIER
const fs = require ('fs');
fs.readFile qui a 2 paramètres: le chemin du fichier et une fonction callback qui va gérer les erreurs et les données

SUPPRIMER FICHIER
méthode fs.unlink qui a 2 paramètres (path, callback de gestion d'erreurs)
la fction callback a besoin de 2 parametres pr s executer correctement: resquest et response.

const fs = require ('fs');
    if(fs.existsSync('./monDossier/monFichier')){
        fs.unlink('./monDossier/monFichier', (error)=>{
            if(error){
                console.error(error); 
           }else{
            console.log('fichier supprimé');
           }
        })
    }else{
        fs.writeFile('./monDossier/monFichier','Ce fichier a été créé avec Node', (error)=>{
            if(error){
                console.error(error);
            }else{
            console.log('fichier créé');
            }
        })

NPM 
Node Package Manager, qui est un outil (programme) gérant les
bibliothèques de programmation Javascript pour Node.js
COMMANDES: "npm init" ou "npm init -y"

NODEMON
redémarrer vos applications Node.js automatiquement pour prendre en compte les changements sans couper/redémarrer le serveur

NODE EXPRESS
/ avec node express le serveur se relance automatiquement à chaque nouveau changement
// pour gérer les erreurs les plus courantes:status(200) de manière bcp plus simple qu avec des try catch ou if...else
// app.get va faire comme un if else, si le chemin demandé est Bon, il ne va pas aller forcément au else: donc on va mettre app.use





