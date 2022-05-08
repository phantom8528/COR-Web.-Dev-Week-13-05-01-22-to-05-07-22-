const pgp = require('pg-promise')();//<--This is Required for accessing your database

const config = {
    host: 'localhost', // localhost the same as 127.0.0.1
    port: 5432,
    database: 'todoapp',
    user: 'corcoding'
};

const item = pgp(config); //<-- Connects to the database

item.any("SELECT * from ITEMS").then((items) => 
    console.log(`
        Item ${items[0].id} | ${items[0].title}| Description: ${items[0].description}
        Item ${items[1].id} | ${items[1].title}| Description: ${items[1].description}
        Item ${items[2].id} | ${items[2].title}| Description: ${items[2].description}
    `)
    );

