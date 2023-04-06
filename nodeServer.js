// le callback a besoin de 2 parametres pr s executer correctement: resquest et response.
// va s executer sur l ordi mais n est pas écouté sans la méthode listener qui va prendre 3 parametres:protocole, domaine, callback
// const http = require('http');
// const server = http.createServer(
//     (Requeste, Response)=>//parametres de la callback
//     {console.log("Server created successfully.")}//execution du code
// );
// server.listen(8080, "localhost",()=>{
//     console.log("Server listening on port 8080");
// })

// Les objets request et Response
// lES REQUETES sont des requetes http qui utilisent des méthodes (=des verbes htt, les plus utilisés:get, post,put, patch, delete)
// Ici on recupere la methode GET
// const http = require('http');
// const server = http.createServer(
//     (Requeste, Response)=>
//     {console.log("Server created successfully.")
//     console.log(Requeste.method);
//     console.log(Requeste.url);
// }
// );
// server.listen(8080, "localhost",()=>{
//     console.log("Server listening on port 8080");
// })


// AVEC if...ELSE
// const http = require('http');
// const server = http.createServer(
//     (Requeste, Response)=>
//     {console.log("Server created successfully.")
//     if(Requeste.url === '/' || Requeste.url === '/home'){
//         console.log('<p> êtes sur la home page');
//     }else{
//         console.log('<p> êtes sur une page qui n\'existe pas');
//     }
// }
// );
// server.listen(8080, "localhost",()=>{
//     console.log("Server listening on port 8080");
// })

// ON PEUT AUSSI VERIFIER LA METHODE
// const http = require('http');
// const server = http.createServer(
//     (Requeste, Response)=>
//     {console.log("Server created successfully.")
//     if((Requeste.url === '/' || Requeste.url === '/home') && Requeste.method === 'GET' ) {
//         console.log('<p> êtes sur la home page');
//     }else{
//         console.log('<p> êtes sur une page qui n\'existe pas');
//     }
// }
// );
// server.listen(8080, "localhost",()=>{
//     console.log("Server listening on port 8080");
// })

// FAIRE LES VERIFICATIONS POUR LA HOME Page,POUR LA PAGE profil, LA PAGE CONTACTS
// const http = require('http');
// const server = http.createServer(
//     (Requeste, Response)=>
//     {console.log("Server created successfully.")
//     if((Requeste.url === '/' || Requeste.url === '/home') && Requeste.method === 'GET' ) {
//         console.log('<p> êtes sur la page home');
//     }else if ((Requeste.url === '/' || Requeste.url === '/contact') && Requeste.method === 'GET' ) {
//         console.log('<p> êtes sur la page contact');
//     }else if ((Requeste.url === '/' || Requeste.url === '/profil') && Requeste.method === 'GET' ) {
//         console.log('<p> êtes sur la page profil');
//     } else {
//         console.log('404 page non valide');
//     }
// }
// );
// server.listen(8080, "localhost",()=>{
//     console.log("Server listening on port 8080");
// })



// EXERCICE 2
// Une fois que nous avons fini l’exercice et tester nos url dans la barre d’adresse, nous pouvons constater que cela fonctionne très bien, mais nous aimerions en faire plus. En effet nous voudrions afficher directement sur la page la réponse car l’utilisateur ne navigue pas en regardant la console mais bien en affichant des pages. Voyons cela ensemble :
// Tout d’abord il faut savoir que lorsque nous envoyons une requête à un serveur il est possible de lui passer des informations sur cette requête dans ce que nous appelons le header. Il en va bien sûr de même pour la réponse, ce qui nous permettra de définir le genre de réponse que le serveur renverra. Par exemple le format de la réponse (text, html, json, etc…) ou encore quel port à le droit d’effectuer la requête c’est ce que l’on appel le CORS (cross-origin resource sharing) qui par défaut ne permet qu'aux requêtes qui proviennent du même serveur et utilisent le même port de s'exécuter.
// Bien définissons ensemble l’en-tête de la réponse par exemple “text/plain”. Pour ça on utilisera la méthode “setHeader” sur l'objet Response, qui prend en paramètre la clé (“content-type”) et la valeur de l’en-tête. Puis dans les conditions au lieu du “console.log” nous utiliserons “Response.write” pour écrire sur le document. Enfin nous finirons par un Response.end() pour dire au serveur d'arrêter l'exécution de la réponse une fois qu’il a fini ses vérifications.
// A l'aide de ce que nous venons de voir et des recherches internet si nécessaire, suivre les instructions pour voir s’afficher les messages appropriés sur les pages consultées.

// const http = require('http');
// const server = http.createServer(
//     (Requeste, Response)=>
//     {
//         Response.setHeader('Content-Type', 'text/html; charset=utf8');
//         console.log("Server created successfully.")
//     if((Requeste.url === '/' || Requeste.url === '/home') && Requeste.method === 'GET' ) {
//        Response.write('<p> Vous êtes sur la home page </p>');
//     }else if ((Requeste.url === '/' || Requeste.url === '/contact') && Requeste.method === 'GET' ) {
//         Response.write('<p> vous êtes sur la page contact </p>');
//     }else if ((Requeste.url === '/' || Requeste.url === '/profil') && Requeste.method === 'GET' ) {
//         Response.write('<p> Vous êtes sur la page profil </p>');
//     } else {
//         Response.write('404 page non valide');
//     }
//     Response.end();
//     }
// );
// server.listen(8080, "localhost",()=>{
//     console.log("Server listening on port 8080");
// })

// CREER UN DOSSIER HTML
// DANS LA fonction CALLBACK DE LA METHODE CREATESERVEUR ON VA CREER UNE VARIABLE QUI SERA EGALE A UNE STRING VIDE (let fichier ="";),
// creer une variable pour exporter (const fs = require('fs');)


const http = require('http');
const fs = require('fs');

const server = http.createServer(
    (Requeste, Response)=>{
        let fichier ="";
        Response.setHeader('Content-Type', 'text/html; charset=utf8');
        console.log("Server created successfully.")
    if((Requeste.url === '/' || Requeste.url === '/home') && Requeste.method === 'GET' ) {
        fichier = "./HTML/index.html";
    }else if ((Requeste.url === '/' || Requeste.url === '/contact') && Requeste.method === 'GET' ) {
        fichier = "./HTML/contact.html";
    }else if ((Requeste.url === '/' || Requeste.url === '/profil') && Requeste.method === 'GET' ) {
        fichier = "./HTML/profil.html";
    } else {
        fichier = "./HTML/404.html";
        Response.write('404 page non valide');
    }
    fs.readFile(fichier, 
        (Error, Data)=>{
            if (Error) {
                console.error(Error);
                Response.end();
            } else {
                Response.write(Data);
                Response.end();
            }
        })
}
);
server.listen(8080, "localhost",()=>{
    console.log("Server listening on port 8080");
})


// ON A BESOIN D UN WATCHER POUR ACTUALISER TOUT SEUL LE SERVEUR ET PAS DEVOIR EL REDEMARRER A CHAQUE NOUVEAU CHANGEMENT: nodemon
// ON Va L INSTALLER AVEC NPM I NODEMON




// const http = require('http');
// const fs = require('fs');

// const server = http.createServer(
//     (Requeste, Response)=>{
//         let fichier ="";
//         Response.setHeader('Content-Type', 'text/html; charset=utf8');
//         console.log("Server created successfully.")
//     if((Requeste.url === '/' || Requeste.url === '/home') && Requeste.method === 'GET' ) {
//         fichier = "./HTML/index.html";
//     }else if ((Requeste.url === '/' || Requeste.url === '/contact') && Requeste.method === 'GET' ) {
//         fichier = "./HTML/contact.html";
//     }else if ((Requeste.url === '/' || Requeste.url === '/profil') && Requeste.method === 'GET' ) {
//         fichier = "./HTML/profil.html";
//     }else if ((Requeste.url === '/' || Requeste.url === '/profil') && Requeste.method === 'GET' ) {
//         fichier = "./HTML/product.html";
//     } else {
//         fichier = "./HTML/404.html";
//         Response.write('404 page non valide');
//     }
//     fs.readFile(fichier, 
//         (Error, Data)=>{
//             if (Error) {
//                 console.error(Error);
//                 Response.end();
//             } else {
//                 Response.write(Data);
//                 Response.end();
//             }
//         })
// }
// );
// server.listen(8080, "localhost",()=>{
//     console.log("Server listening on port 8080");
// })


// NODE EXPRESS

