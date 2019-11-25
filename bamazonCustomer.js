var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "password",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err; 
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err; 
        console.log(res);
    });
});

function buyProduct() {
    inquirer 
        .prompt([{
            name: "item_id",
            type: "input",
            message: "What is the ID of the product you would like to buy?"
        },
        {
            name: "quantity",
            type: "input",
            message: "What is the quantity that you would like to buy?"
        }
    ])  
}