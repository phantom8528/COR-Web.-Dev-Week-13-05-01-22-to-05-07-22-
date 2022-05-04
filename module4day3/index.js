//------------------------05/02/22------------------------------
//1. Install the template engine
//2. Configure the Template Engine
const http = require('http');

const hostname = `127.0.0.1`;
const port = 3000;

const express = require('express');
const app = express();

const es6Render = require('express-es6-template-engine');
app.engine('html', es6Render);
app.set('views', 'templates');
app.set('view engine', 'html');

const server = http.createServer(app);
const db = require('./db');
//3. Create a template directory
//In the root of your project, create a new directory named templates:


//4. Creating the templates
//Let's create some simple templates to replace the hard-coded HTML Strings that we are res.send()-ing.

//5. Create static template: See Reading

//6. Using res.render()
//It has 2 Jobs:
//--a. Read a template file from the file system
//--b. Fill in values for any placeholders

//11. Update res.render() calls so that the partials is provided to the template
//12. Using a Variable in a Partial
//12d. Add locals object title key
app.get('/', (req, res) => {
//     res.render('home', {locals: {title: 'Address Book App'},
//     {partials: {head: `/partials/head`}});
// }});
res.render('home', {locals: {title: 'Address Book App'},partials: {head: '/partials/head'}});

});


//7. A Template with data
//Replace the if friend(){ block with a call to res.srender('friend')

// app.get('/friends', (req, res) => {
//     res.render('friends');
// });

//9. A template with an array
//9a. Rewrite "/friends" route to loop through the list of names in you db
//9b. Goto "friends-list.html" next and add some more stuff
//10. Linking individual Friend Pages
//10a. add req.path to the locals object
//10b. Goto "friends-list.html"
//12. Lets add styling for the other routes to
app.get('/friends', (req, res) => {
    res.render('friends-list',
        {locals: {title: 'Friends List',friends: db, path: req.path},
        partials:{head: `/partials/head`}
        });
});

//12a. Add a trailng comma after locals: {}
app.get('/friends/:handle', (req, res) => {
    const {handle} = req.params;
    // const friend = db.find(f => f.handle === handle);
    const friend = db.find(f => f.handle === handle);
    if(friend){
        res.render('friends', 
            {locals: {title: `${friend.name}'s info`,friend}, 
            partials: {head: `/partials/head`}
            });
    }else{
        res.status(404).send(`no friend with the handle ${handle}`);
    }

    //FROM THE PREVIOUS VERSION OF ADDRESS BOOK IN MODULE 4 DAY 2
    // if(friend){
    //     let htmlData = ` `;
    //     htmlData += `<h1>${friend.name}</h1>`;
    //     htmlData += `<h3>${friend.handle}</h3>`;
    //     htmlData += `<h3>${friend.skill}</h3>`;
    //     res.send(htmlData);
    // }else{
    //     res.status(404)
    //     .send(`no friend with handle ${handle}`)
    // }
});


//---------------------THIS IS WHERE THE BODY ENDS--------------------
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

