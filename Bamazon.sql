CREATE DATABASE Bamazon_DB;

USE Bamazon_DB;

CREATE TABLE items(

	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,     
    product_name VARCHAR(75) NOT NULL,
    department_name VARCHAR(75) NOT NULL,    
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INTEGER(20) NOT NULL,    
    PRIMARY KEY (item_id)
);

INSERT INTO items (product_name, department_name, price, stock_quantity)
VALUES ("Extra Large Playing Cards", "Toys & Games", 25.00, 5);

INSERT INTO items (product_name, department_name, price, stock_quantity)
VALUES ("Bamazon Gecko (2nd Generation) - Black", "Electronics", 49.99, 1000);

INSERT INTO items (product_name, department_name, price, stock_quantity)
VALUES ("How To Accomplish Nothing", "Books", 11.35, 9);

INSERT INTO items (product_name, department_name, price, stock_quantity)
VALUES ("Self Esteem", "Tools & Home Improvement", 10.23, 0);

INSERT INTO items (product_name, department_name, price, stock_quantity)
VALUES ("A Single Shoe", "Clothing, Shoes, & Jewelery", 399.99, 77);

INSERT INTO items (product_name, department_name, price, stock_quantity)
VALUES ("Aztec Secret Indian Healing Clay Deep Pore Cleansing", "Beauty & Personal Care", 13.57, 320);

INSERT INTO items (product_name, department_name, price, stock_quantity)
VALUES ("Fake Sandwich", "Home & Kitchen", 25.00, 5);

INSERT INTO items (product_name, department_name, price, stock_quantity)
VALUES ("Real Sandwich", "Home & Kitchen", 5.00, 5);

INSERT INTO items (product_name, department_name, price, stock_quantity)
VALUES ("Grand Theft Auto MDCLXD: Irate Teenager Edition", "Video Games", 69.99, 420);

INSERT INTO items (product_name, department_name, price, stock_quantity)
VALUES ("Jeans That Will Fit You Perfectly For Exactly 3 Days", "Clothing, Shoes, & Jewelery", 59.99, 91);

SELECT * FROM items;
