const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "company"
});

db.connect((err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("connected to database")
    }
});

app.get("/", (req, res) => {
    res.send("It is working");
});

app.get("/company/employee", (req, res) => {
    const sqlSelect = "SELECT * FROM employee";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.post("/company/employee", (req, res) => {
    const id = req.body.E_Id;
    const name = req.body.E_Name;
    const age = req.body.E_Age;
    const position = req.body.E_Position;
    const salary = req.body.E_Salary;
    const gender = req.body.E_Gender;
    const sqlInsert = "INSERT INTO employee(E_Id, E_Name, E_Age, E_Position, E_Salary, E_Gender) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(sqlInsert, [
        id, name, age, position, salary, gender
    ], (err, result) => {
        res.send(result)
    });
});

app.listen(3450, () => {
    console.log("server is running");
});