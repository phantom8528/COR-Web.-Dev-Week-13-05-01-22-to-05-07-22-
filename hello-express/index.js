//-----------------------Writing an Express App----------------------------

//1. Create the express server
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const express = require('express');
const app = express()
const server  = http.createServer(app);

//5. Importing the list of names
const db = require(`./db`);


//2. Our first route handler
app.get('/', (req, res) => {
    res.send('Hello from Express !');
});

//3. Adding a second route
// app.get('/friends', (req, res) => {
//     res.send('This will be the friends list');
// });
//go to http://localhost:3000/friends

app.get('/friends', (req, res) => {
    //6. Sending an html response
    let htmlData = ` `;
    htmlData  += `<ul>`;
    //loop through the array
    for (let friend of db){
        //put each friend's .name inside a <li></li>
        htmlData += `<li>${friend.name}</li>`;
    }
    htmlData  += `</ul>`;
    res.send(htmlData);
});

//7. Showing a friend's Details:
app.get('/friends/:handle', (req, res)=> {
    const {handle} = req.params;
    res.send(`<h1>${handle}</h1>`);
});
//Now visit the URL http://localhost:3000/friends/@fin


//8. Finding a friend by handle:
//Instead of showing the handle in the webpage, we'll locate the friend in the db array
//We'll use the .find() method, which accepts a function argument
app.get('/friends/:handle', (req, res)=> {
    const {handle} = req.params;
    const friend = db.find(f => f.handle === handle);

    if(friend){
        //Now use string concatneation to produce our more complete html strinrg
        let htmlData = ` `;
        htmlData =+ `<h1>${friend.name}</h1>`;
        htmlData =+ `<h3>${friend.handle}</h3>`;
        // htmlData =+ `<h3>${friend.skill}</h1>`;
        res.send(htmlData);
        //Error Handling:
    }else{
        // res.send(`no friend with handle ${handle}`);
        res.status(404).send(`no friend with handle ${handle}`);
        
    }

    // res.send(`<h1>${friend.handle}</h1>`);
});

//9. Listing our friends as a linked ul/li
//Modify your "/friends" route so that each friend's name is linked to their detail page
app.get('/friends', (req, res)=> {
    let htmlData = `<ul>`;
    for (let friend of db){
        htmlData += `<li>
                        <a href="${req.path}${friend.handle}">${friend.name}</a>
                    </li>`;
    }
    htmlData =+ `</ul>`;
    res.send(htmlData);
});



server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
console.log('this is a test of nodemon');
//4. installed nodemon: helps with automatically restarting on save


