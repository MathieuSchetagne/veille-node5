const express = require('express');
const app = express();
const fs = require('fs');
app.set('view engine', 'ejs'); 
const bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
const MongoClient = require('mongodb').MongoClient;
app.use(express.static('public'));

var db // variable qui contiendra le lien sur la BD


app.get('/',  (req, res) => {
    
    var cursor = db.collection('adresse')
    .find().toArray(function(err, resultat){
    if (err) return console.log(err)
    // transfert du contenu vers la vue index.ejs (renders)
    // affiche le contenu de la BD           
    res.render('gabarit.ejs', {adresses: resultat})  
    });
})

app.get('/formulaire',  (req, res) => {
    console.log(__dirname);
    res.render('formulaire.ejs') 
   })



MongoClient.connect('mongodb://127.0.0.1:27017/carnet_adresse', (err, database) => {
 if (err) return console.log(err)
 db = database.db('carnet_adresse');
// lancement du serveur Express sur le port 8081
 app.listen(8081, () => {
 console.log('connexion à la BD et on écoute sur le port 8081')
 })
})

