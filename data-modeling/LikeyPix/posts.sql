create table posts(
    id serial primary key,
    url text not null,
    user_id integer references users (id)
);