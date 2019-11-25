var mysql = require("mysql");

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
        console.log(res)
        connection.end();
    });
});