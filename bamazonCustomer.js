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

function idSearch() {
    inquirer 
        .prompt({
            name: "item_id",
            type: "input",
            message: "What is the ID of the product you would like to buy?"
        })
        .then(function(answer) {
            var query = "SELECT product_name, department_name, price, stock_quantity FROM bamazon WHERE ?";
            connection.query(query, { item_id: answer.item_id }, function(err, res) {
                if (err) throw err;
                for (var i = 0; i <res.length; i++) {
                    console.log("Product Name: " + res[i].product_name + " || Department Name: " + res[i].department_name + " || Price: " + res[i].price + " || Stock Quantity: " + res[i].stock_quantity);
                }
                idSearch();
            });
        });
}