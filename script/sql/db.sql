CREATE TABLE users (
	id serial primary key,
	username varchar(255) not null,
	profile jsonb,
	created timestamp default timezone('UTC'::text, now()),
	modified timestamp
);

CREATE UNIQUE INDEX username_idx ON users (username);

CREATE TABLE tasks (
	id serial primary key,
	user_id integer not null references users (id),
	detail jsonb,
	created timestamp default timezone('UTC'::text, now()),
	modified timestamp
);

CREATE INDEX user_id_idx ON tasks (user_id);

CREATE VIEW user_tasks AS select t.* from users u inner join tasks t on u.id = t.user_id;

BEGIN;

INSERT INTO users (username, profile) values ('jb', '{"first": "Jacob", "last": "Briscoe"}');
INSERT INTO users (username, profile) values ('jd', '{"first": "John", "last": "Doe"}');
INSERT INTO users (username, profile) values ('jnd', '{"first": "Jane", "last": "Doe"}');

INSERT INTO tasks (user_id, detail) values ((select id from users where username='jb'), '{"description":"Get Milk", "complete":false}');
INSERT INTO tasks (user_id, detail) values ((select id from users where username='jb'), '{"description":"Let Dog Outside", "complete":true}');
INSERT INTO tasks (user_id, detail) values ((select id from users where username='jb'), '{"description":"Pickup Kids", "complete":false}');

INSERT INTO tasks (user_id, detail) values ((select id from users where username='jd'), '{"description":"Finish Learning Node.js", "complete":false}');

INSERT INTO tasks (user_id, detail) values ((select id from users where username='jnd'), '{"description":"Take a Holiday", "complete":true}');

COMMIT;

