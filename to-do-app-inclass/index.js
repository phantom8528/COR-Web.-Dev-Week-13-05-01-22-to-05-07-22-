const pgPromise = require('pg-promise')();
const config = {
    hostname: 'localhost',
    port: 5432,
    database: 'todoAppDB',
    user: 'corcoding'
};
const db = pgPromise(config);

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const server = http.createServer(app);

app.get('/', (req, res) => {
    const todos = db.query('SELECT * FROM todos')
        .then(function(todos) {
            // console.log(todos);
            res.render('home', {locals: {todos}});
            console.log(todos);
            // console.log(result);
        });
    console.log(todos);
    //List all to do's 
});

app.get('/new', (req, res) => {
    // Show new ones

    // const todos = db.query(`INSERT INTO todos VALUES (${req.params.todo})`)
    // .then(function(todos) {
    //     // console.log(todos);
    //     res.render('home', {locals: {todos}});
    //     console.log(todos);
    //     // console.log(result);
    // });
    res.render('new');

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});