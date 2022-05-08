//--------------------05/05/22----------------------------------

//In-Class: PG Promise - Connecting db to js file
//--------------------------------------------------------------
const pgp = require('pg-promise')();
const config = {
    host: 'localhost', // localhost the same as 127.0.0.1
    port: 5432,
    database: 'codeschool',
    user: 'corcoding'
};

const db = pgp(config); //<-- Connects to the database

//Writing a Query
// db.query(`

// CREATE TABLE students (
//     id serial primary key,
//     name VARCHAR(50),
//     email VARCHAR(50)
// );

// `);

function addStudent (name, email) {
    db.query(`
    INSERT INTO students
        (name, email)
    VALUES
        ('${name}', '${email}');
    
    `);
    console.log(`${name} Was Added to students`);
}

// addStudent('Gabriel', 'gabriel@jefferson.com');



