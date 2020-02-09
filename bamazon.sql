DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon; 

USE bamazon;

CREATE TABLE products (
    item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(50) NOT NULL, 
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT(10) NOT NULL,
    PRIMARY KEY (item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Ray-Ban Wayfarers", "Sunglasses", 109.99, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Star Wars Boba Fett Playing Cards Card Game", "Games", 5.89, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Blue Blocking Amber UV Protection Glasses", "Sunglasses", 11.95, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("John Lennon Party Sunglasses", "Sunglasses", 8.69, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("SENSO Bluetooth Headphones", "Audio", 29.99, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Aromatherapy Essential Oil Diffuser", "Health & Household", 27.99, 225);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Aria Starr Dead Sea Mud Mask", "Personal Care", 14.95, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Instant Pot", "Home & Kitchen", 59.86, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Wool Dryer Balls", "Health & Household", 16.95, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Ott-Lite 24-Watt Floor Lamp", "Home & Kitchen", 65.28, 125);