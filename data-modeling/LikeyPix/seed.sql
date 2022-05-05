insert into users --Tells PostgreSQL what table we're adding new rows to
    (name, email) --Specifies the columns (and the order ) we will provide values for
values --Informs SQL what values will be listed next
    ('Alice', 'alice@email.com'),
    ('Bob', 'bob@email.com'),
    ('Cho', 'cho@email.com'),
    ('Daryl', 'daryl@email.com'),
    ('Emmy', 'emmy@email.com')
    ;
    -- Line 9: Ends the sql statement
    -- NOTE: Use single quotes ('') not double quotes for strings

insert into posts
    (url, user_id)
values
    ('walking-the-cat.jpg', 2),
    ('day-at-the-beach.jpg', 3),
    ('new-puppy.jps', 1),
    ('cat-in-a-box.jpg', 5),
    ('doggos.jpg', 5)
    ;
    
