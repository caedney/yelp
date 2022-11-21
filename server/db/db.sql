CREATE DATABASE yelp;

CREATE TABLE restaurants (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	location VARCHAR(50) NOT NULL,
	price_range INT NOT NULL CHECK(price_range >= 1 AND price_range <= 5)
);

ALTER SEQUENCE restaurants_id_seq RESTART WITH 1;

INSERT INTO restaurants (name, location, price_range) VALUES ('The Oatlands Chaser', 'Weybridge', 2);
INSERT INTO restaurants (name, location, price_range) VALUES ('The Running Mare', 'Byfleet', 2);
INSERT INTO restaurants (name, location, price_range) VALUES ('The Ivy', 'Byfleet', 1);
