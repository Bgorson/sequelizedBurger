DROP DATABASE IF EXISTS burgers_DB;
CREATE database burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(50) NOT NULL,
  devoured BOOLEAN NOT NULL default 0
);


SELECT * FROM burgers;
