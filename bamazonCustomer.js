var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "password",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
    }
    loadProducts();
});

function loadProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;

        console.table(res)

        promptCustomerForItem(res);
    });
}

function promptCustomerForItem(inventory) {
    inquirer
        .prompt([
            {
                type: "input",
                name: "choice",
                message: "What is the ID of the item you would like to purchase? [Quit with Q]",
                validate: function (val) {
                    return !isNaN(val) || val.toLowerCase() === "q";
                }
            }
        ])
        .then(function (val) {
            checkIfShouldExit(val.choice);
            var choiceId = parseInt(val.choice);
            var product = checkInventory(choiceId, inventory);

            if (product) {
                promptCustomerForQuantity(product);
            }
            else {
                console.log("\nThat item is not in the inventory.");
                console.log("\n----------------------------------------------------");
                loadProducts();
            }
        });
}

function promptCustomerForQuantity(product) {
    inquirer
        .prompt([
            {
                type: "input",
                name: "quantity",
                message: "How many would you like? [Quit with Q]",
                validate: function (val) {
                    return val > 0 || val.toLowerCase() === "q";
                }
            }
        ])
        .then(function(val) {
            checkIfShouldExit(val.quantity);
            var quantity = parseInt(val.quantity);

            if (quantity > product.stock_quantity) {
                console.log("\nInsufficient quantity!");
                console.log("\n----------------------------------------------------");
                loadProducts();
            }
            else {
                makePurchase(product, quantity);
            }
        });
}

function makePurchase(product, quantity) {
    connection.query(
        "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
        [quantity, product.item_id],
        function (err, res) {
            console.log("\nSuccesfully purchased " + quantity + " " + product.product_name + "'s!");
            console.log("Total Cost = $" + quantity * product.price)
            console.log("\n----------------------------------------------------");
            loadProducts();
        }
    );
}

function checkInventory(choiceId, inventory) {
    for (var i = 0; i < inventory.length; i++) {
        if (inventory[i].item_id === choiceId) {
            return inventory[i];
        }
    }
    return null;
}

function checkIfShouldExit(choice) {
    if (choice.toLowerCase() === "q") {
        console.log("Seeya next time!");
        console.log("\n----------------------------------------------------");
        process.exit(0);
    }
}