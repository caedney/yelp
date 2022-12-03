CREATE DATABASE yelp;

------------------------------------------------

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

------------------------------------------------

CREATE TABLE reviews (
	id BIGSERIAL NOT NULL,
	restaurant_id BIGINT NOT NULL,
	name VARCHAR(50) NOT NULL,
	review TEXT NOT NULL,
	rating INT CHECK(rating >= 1 AND rating <= 5) NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY(restaurant_id) REFERENCES restaurants(id)
);

INSERT INTO reviews (restaurant_id, name, review, rating) VALUES (1, 'Jack', 'Restaurant was amazing!', 5);

------------------------------------------------

SELECT TRUNC(AVG(rating),2) FROM reviews;

SELECT * FROM restaurants 
	LEFT JOIN(
		SELECT restaurant_id, COUNT(*) as rating_count, TRUNC(AVG(rating),1) as rating_average 
		FROM reviews 
		GROUP BY restaurant_id
	)
reviews on restaurants.id = reviews.restaurant_id;
