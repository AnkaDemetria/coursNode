// const fs = require ('fs');
// fs.mkdir('./monDossier', ()=>{
//     console.log('dossier créé');
// })

// POUR CREER UN DOSSIER
// dans le terminal: on coupe le serveur avec controle C, puis on tape node .\gestionfichier.js et la fonction callback nous renvoie dossier créé; elle nous sert pour le renvoi d erreurs

// const fs = require ('fs');
// fs.mkdir('./monDossier', (error)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log('dossier créé');
//     }
// })

// FUNCTION IF ELSE POUR CREEER DOSSIER
// const fs = require ('fs');

//     if(fs.existsSync('./monDossier')){
//         console.log('le dossier existe deja');
//     }else{
//         fs.mkdir('./monDossier', (error)=>{
//         if(error){
//             console.error(error);
//     }else{
//             console.log('dossier créé');
//         }
//     })
// }

// POUR SUPPRIMER RECREER DOSSIER
    // rmdir remove  DONC VA SUPPRIMER LE DOSSIER , mkdir Make DONC VA CREER LE DOSSIER

// const fs = require ('fs');
//     if(fs.existsSync('./monDossier')){
//         fs.rmdir('./monDossier', (error)=>{
//             if(error){
//                 console.error(error); 
//            }else{
//             console.log('dossier supprimé');
//            }
//         })
//     }else{
//         fs.mkdir('./monDossier', (error)=>{
//             if(error){
//                 console.error(error);
//             }else{
//             console.log('dossier créé');
//             }
//         })
//     }


    // EXERCICE
// CREER UN FICHIER SUR NODE JS:fs.writeFile( file:chemin du fichier, data:contenu, options:la fction callback avec la gestion des erreurs )
// const fs = require ('fs');

//     if(fs.existsSync('./monDossier')){
//         fs.rmdir('./monDossier', (error)=>{
//             if(error){
//                 console.error(error); 
//            }else{
//             console.log('dossier supprimé');
//            }
//         })
//     }else{
//         fs.mkdir('./monDossier', (error)=>{
//             if(error){
//                 console.error(error);
//             }else{
//             console.log('dossier créé');
//             }
//         })
//         fs.writeFile('./monDossier/monFichier.txt','Ce fichier a été écrit avec Node', 
//         (Error)=>{
//             if (Error) {
//                 console.error(Error);
//             } else {
//                 console.log('Le fichier a été créé');
//             }
//         })
//     }

 
// PUIS POUR LIRE LE DOSSIER
// const fs = require ('fs');

//     fs.readFile('./monDossier/monFichier.txt', 
//         (Error, Data)=>{
//             if (Error) {
//                 console.error(Error)
//             } else {
//                 console.log(Data.toString());
//             }
//         })

// EXERCICE: comme pour le dossier, UTILISER IF ELSE SUR LE FICHIER pour soit l'ajouter:fs.readFile(chemin:path, callback) soit le supprimer: fs.unlink(path, callback)


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
    }


   


