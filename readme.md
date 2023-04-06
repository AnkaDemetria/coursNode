POUR CREER UN DOSSIER
dans le terminal: on coupe le serveur avec controle C, puis on tape node .\gestionfichier.js et la fonction callback nous renvoie dossier créé; elle nous sert pour le renvoi d erreurs

POUR SUPPRIMER RECREER DOSSIER
rmdir remove  DONC VA SUPPRIMER LE DOSSIER , mkdir Make DONC VA CREER LE DOSSIER

CREER UN FICHIER SUR NODE JS:fs.writeFile( file:chemin du fichier, data:contenu, options:la fction callback avec la gestion des erreurs )

PUIS POUR LIRE LE DOSSIER
const fs = require ('fs');
fs.readFile

UTILISER IF ELSE SUR LE FICHIER pour soit l'ajouter:fs.readFile(chemin:path, callback) soit le supprimer: fs.unlink(path, callback)
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

il faut savoir que lorsque nous envoyons une requête à un serveur il est possible de lui passer des informations sur cette requête dans ce que nous appelons le header. Il en va bien sûr de même pour la réponse, ce qui nous permettra de définir le genre de réponse que le serveur renverra. Par exemple le format de la réponse (text, html, json, etc…) ou encore quel port à le droit d’effectuer la requête c’est ce que l’on appel le CORS (cross-origin resource sharing) qui par défaut ne permet qu'aux requêtes qui proviennent du même serveur et utilisent le même port de s'exécuter.
// Bien définissons ensemble l’en-tête de la réponse par exemple “text/plain”. Pour ça on utilisera la méthode “setHeader” sur l'objet Response, qui prend en paramètre la clé (“content-type”) et la valeur de l’en-tête. Puis dans les conditions au lieu du “console.log” nous utiliserons “Response.write” pour écrire sur le document. Enfin nous finirons par un Response.end() pour dire au serveur d'arrêter l'exécution de la réponse une fois qu’il a fini ses vérifications.



NODE EXPRESS
/ avec node express le serveur se relance automatiquement à chaque nouveau changement
// pour gérer les erreurs les plus courantes:status(200) de manière bcp plus simple qu avec des try catch ou if...else
// app.get va faire comme un if else, si le chemin demandé est Bon, il ne va pas aller forcément au else: donc on va mettre app.use





