// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', function (req, res){
//     res.send('Hello world')
// })

// app.listen(port, ()=>{
//     console.log("Server listening on port" + port);
// })


// app.get('/', function (req, res){
//     res.send('Hello world')
//     POUR CREER HELLO WORLD SUR LA PAGE : localhost : 3000


// POUR RENVOYER DU HTML
// avec node express le serveur se relance automatiquement à chaque nouveau changement
// pour gérer les erreurs les plus courantes:status(200) de manière bcp plus simple qu avec des try catch ou if...else
// app.get va faire comme un if else, si le chemin demandé est Bon, il ne va pas aller forcément au else: donc on va mettre app.use
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', function (req, res){
//     res.status(200).sendFile('./HTML/index.html',{root:__dirname})
// })

// app.listen(port, ()=>{
//     console.log("Server listening on port" + port);
// })



// app.get va faire comme un if else, si le chemin demandé est Bon, il ne va pas aller forcément au else: donc on va mettre app.use
// middleware: QUAND ça RENVOIE UNE Réponse, il s'arrete dans le script
// mais sinon il tourne en boucle donc il faut la fonctionj next() pour lui dire de continuer le reste du code même s'il a trouvé sa respponse à la request

// POUR INSERER DES IMAGES AVEC NODE EXPRESS
// const express = require('express')
// const app = express()
// const port = 3000

// app.use((req, res, next)=>{
//     console.log('Requête effectuée: ' + Date().toString());
//     next()
// })

// app.use(express.static('public'));

// app.get('/home', function (req, res){
//     res.status(200).sendFile('./HTML/index.html',{root:__dirname})
// })
// app.get('/contact', function (req, res){
//     res.status(200).sendFile('./HTML/contact.html',{root:__dirname})
// })
// app.get('/profil', function (req, res){
//     res.status(200).sendFile('/HTML/profil.html',{root:__dirname})
// })
// app.get('/product', function (req, res){
//     res.status(200).sendFile('/HTML/product.html',{root:__dirname})
// })

// app.get('/', function (req, res){
//     res.status(301).redirect('/home')
// })

// app.use((req, res)=>{
//     res.status(404).sendFile('/HTML/404.html',{root:__dirname})
// })

// app.listen(port, ()=>{
//     console.log("Server listening on port" + port);
// })



// MIDDLEWARE TIERS: un middleware écrit par qqn d'autre
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(express.static('public'));
app.use(express.static('HTML'));
app.use(morgan('tiny'))
app.get('/home', function (req, res){
    res.status(200).sendFile('./HTML/index.html',{root:__dirname})
})
app.get('/contact', function (req, res){
    res.status(200).sendFile('./HTML/contact.html',{root:__dirname})
})
app.get('/profil', function (req, res){
    res.status(200).sendFile('/HTML/profil.html',{root:__dirname})
})
app.get('/product', function (req, res){
    res.status(200).sendFile('/HTML/product.html',{root:__dirname})
})

app.get('/', function (req, res){
    res.status(304).redirect('/home')
})

app.use((req, res)=>{
    res.status(404).sendFile('/HTML/404.html',{root:__dirname})
})

app.listen(port, ()=>{
    console.log("Server listening on port" + port);
})

// EXERCICE FAIRE UNE NAVBARRE QUI VA NOUS PERMETTRE DE NAVIGUER ENTRE TOUTES LES PAGES
// pour la page home: c'est une ressource statique donc on met comme lien: "/"

