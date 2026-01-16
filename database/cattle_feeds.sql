CREATE DATABASE cattle_feeds_shop;
USE cattle_feeds_shop;
CREATE TABLE products(
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(100),
 price DECIMAL(10,2)
);