create table users (
    id serial primary key,
    name varchar(50) not null,
    email varchar(50) not null
);

create table posts(
    id serial primary key,
    url text not null,
    user_id integer references users (id)
);

-- Creating the Tags Table
create table tags(
    id serial primary key,
    tag varchar(50) not null
);

--Create Tabs_Posts Table
-- -------------------------------
-- The purpose of a linking table is to associate the rows of two tables
-- --> Only have foreign keys
-- --> Are named for the two tables they link

create table tags_posts (
    tag_id integer references tags (id),
    post_id integer references posts (id)
);

-- 05/05/22
-- Created a pics table in the terminal with the one column url
