CREATE DATABASE company;
use company;
CREATE TABLE employee(E_Id int AUTO_INCREMENT PRIMARY KEY,
E_Name varchar(45),
E_Age int,
E_Position varchar(45),
E_Salary int,
E_Gender varchar(45),
Action varchar(45)
);
INSERT INTO employee(E_Id, E_Name, E_Age, E_Position, E_Salary, E_Gender, Action)
VALUES('001', 'Arnav', '24', 'Accountant', '20000', 'Male', ''),
('002', 'Suny', '32', 'Accountant', '20000', 'Female', ''),
('003', 'Abdullah', '19', 'Intern', '5000', 'Male', ''),
('004', 'Aditi', '22', 'Cashier', '15000', 'Female', ''),
('005', 'Omer', '34', 'Manager', '50000', 'Male', '');
SELECT * from employee;