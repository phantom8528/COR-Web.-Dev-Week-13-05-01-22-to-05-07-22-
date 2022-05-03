//------------------------------------05/02/22----------------------------------------
const http = require('http');
const hostname = `127.0.0.1`;
const port = 3000;
const express = require('express');
const app = express();
const server = http.createServer(app);

//Exercise: Express.js - Small: Hello World Server 
app.get('/', (req, res) => {
    res.send("Hello World")
});

//Exercise: Express.js - Small: Add Routes
app.get('/cats', (req, res) => {
    res.send("Meow");
});

app.get('/dogs', (req, res) =>  {
    res.send("Woof!");
});

app.get('/cats_and_dogs', (req, res)=> {
    res.send("Dogs and cats living together ... mass hysteria");
});

//Exercise: Express.js - Small: Add Routes with Parameters
// app.get('/greet/:handle', (req, res)=> {
//     const {handle} = req.params;
//     // res.send(`<h1>Hello, ${handle}</h1>`);
//     res.send(`Hello ${handle}`)
// });

//Exercise: Express.js - Small: Send HTML Response
app.get('/greet/:handle', (req, res)=> {
    const {handle} = req.params;
    res.send(`<h1>Hello, ${handle}</h1>`);
});

server.listen(port, hostname, ()=> {
    console.log(`Server running at http://${hostname}:${port}`);
})
