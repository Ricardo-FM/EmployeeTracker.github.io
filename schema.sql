DROP DATABASE IF EXISTS employeeDB;
CREATE DATABASE employeeDB;
USE employeeDB;




CREATE TABLE department (
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);

INSERT INTO department (name)
VALUES ("Engineering")

INSERT INTO department (name)
VALUES ("Sales");

INSERT INTO department (name)
VALUES ("Finance");

INSERT INTO department (name)
VALUES ("Legal");


CREATE TABLE role (
  id INT AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY(id)
);

INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", 110000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", 75000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Developer", 90000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Developer", 80000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 100000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Lawyer", 150000, 4);




CREATE TABLE employee (
  id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(20) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY(id)
);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Smith", 1, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Post", "Malone", 2, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Yugi", "Muoto", 3, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Seto", "Kaiba", 4, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Naruto", "Uzimaki", 5, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sasuke", "Uchiha", 6, 5);