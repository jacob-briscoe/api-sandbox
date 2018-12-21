CREATE TABLE todo.users (
	id serial primary key,
	username varchar(255) not null,
	profile jsonb,
	created timestamp default timezone('UTC'::text, now()),
	modified timestamp
);

CREATE UNIQUE INDEX username_idx ON todo.users (username);

CREATE TABLE todo.tasks (
	id serial primary key,
	user_id integer not null references todo.users (id),
	detail jsonb,
	created timestamp default timezone('UTC'::text, now()),
	modified timestamp
);

CREATE INDEX user_id_idx ON todo.tasks (user_id);

CREATE VIEW todo.user_tasks AS select t.* from todo.users u	inner join todo.tasks t on u.id = t.user_id;

BEGIN;

INSERT INTO todo.users (username, profile) values ('jb', '{"first": "Jacob", "last": "Briscoe"}');
INSERT INTO todo.users (username, profile) values ('jd', '{"first": "John", "last": "Doe"}');
INSERT INTO todo.users (username, profile) values ('jnd', '{"first": "Jane", "last": "Doe"}');

INSERT INTO todo.tasks (user_id, detail) values ((select id from todo.users where username='jb'), '{"description":"Get Milk", "complete":false}');
INSERT INTO todo.tasks (user_id, detail) values ((select id from todo.users where username='jb'), '{"description":"Let Dog Outside", "complete":true}');
INSERT INTO todo.tasks (user_id, detail) values ((select id from todo.users where username='jb'), '{"description":"Pickup Kids", "complete":false}');

INSERT INTO todo.tasks (user_id, detail) values ((select id from todo.users where username='jd'), '{"description":"Finish Learning Node.js", "complete":false}');

INSERT INTO todo.tasks (user_id, detail) values ((select id from todo.users where username='jnd'), '{"description":"Take a Holiday", "complete":true}');

COMMIT;

