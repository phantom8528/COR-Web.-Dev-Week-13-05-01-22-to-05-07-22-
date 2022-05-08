//-------------------------------05/05/22-----------------------------------------
//Main.js - Central hub for all To-Do List App Functionality
//1. Create Express Server
const http = require('http');
const hostname = `127.0.0.1`;
const port = 3000;

const pgp = require('pg-promise')();//<--This is Required for accessing your database

const config = {
    host: 'localhost', // localhost the same as 127.0.0.1
    port: 5432,
    database: 'todoapp',
    user: 'corcoding'
};

const db = pgp(config); //<-- Connects to the database

const express = require('express');
const app = express();

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const server = http.createServer(app);

//2. Import in the database for the to-do list items

//3. Import components/microservices that

//4. Create Routes

app.use(express.static(__dirname + '/public'));
//Home Route
app.get('/', (req, res) => {
    // res.send('This is Where the Main Todo Application Will Go');
    res.render('home');
    

});




//------------------------NOTHING BEYOND THIS POINT----------------------------------------------
server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});

