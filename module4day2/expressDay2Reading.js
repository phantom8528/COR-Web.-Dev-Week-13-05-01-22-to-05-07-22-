//----------------------------05/01/22-----------------------------
/**
 * Express.js is a library for Node.js that helps you organize 
 * and optimize your code.
 * It includes:
 * - Functions to determine the Request Method and URL
 * - A pattern for reusinsg Request handler functions
 * - Access to a large number of third party modules
 * - A system for creating and using HTML templates
 */
//This is our Handler function
//------------------------------------------------
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-type', 'text/plain');
//     res.end('Hello World');
// });

//Req: represents the request
//Res: represents the response
//They are always passes in this order (req, res);

//For Req, the url is understood as "/", even if we didn't put it there
//--> Ex.) http://localhost:3000/another-page, "/another-page" is the url
// Ex.) Node.js version of creating a server

// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     const {url} = req; //<-- Extract the url from the path request
//     //Above line similar to: const url = req.url
//     console.log(`The URL path is: ${url}`);
//     res.statusCode = 200;
//     res.setHeader('Content-type', 'text/plain');
//     res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http//${hostname}:${port}/`);
// });

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//To handle different pages we can use the URL as part of an if/else statement
//Ex.) Node.js version of handling multiple pages 

// const http = require('http');
// const hostname = `127.0.0.1`;
// const port = 3000;

// const server = http.createServer((req, res) => {
//     //Extract the url from the request 
//     const {url} = req;
//     console.log(`The URL path is: ${url}`);
    
//     //We use if/else for every seperate page, image, video, font, CSS file, JavaScript file, etc.
//     //This is where express comes in

//     if (url === '/'){
//         res.statusCode = 200;
//         res.setHeader = ('Content-Type', 'text/plain');
//         res.end('Hello World');
//     }else{
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('This is not a homepage');
//     }
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http//${hostname}:${port}/`);
// });

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//Translating to Express:

//Ex.) Express.js version of creating a server 
const http = require('http');
const hostname = `127.0.0.1`;
const port = 3000;
const express = require('express');
const app = express();
const server = http.createServer(app);

//Routing: working with URL paths:
app.get('/', (req,res) => {
    res.send('Hello World');
});
//Accepts two arguments:
//--> The path "/"
//--> The handler function

//Ex.) Handling other pages using the wildcard string "*"
app.get('*', (req, res)=> {
    res.send('This is not a homepage');
});

//Ex.) To listen for POST requests, we might do the following:
app.post('/', (req, res)=> {
    //...handle the data submitted in the form
});

server.listen(port, hostname, ()=> {
        console.log(`Server running at http//${hostname}:${port}/`);
});

