CREATE DATABASE todoAppDB;

CREATE TABLE todos(
    id serial primary key,
    name varchar(50) not null, --NOTE: not null means the column can't be empty
    completed boolean null

);