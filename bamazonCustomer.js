var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "Bamazon_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  displayItems();
  promptUser();
});

function displayItems() {
  connection.query("SELECT * FROM items", function(queryErr, result){
		if (queryErr) {
			throw queryErr;
		}

		for(var i=0; i<result.length; i++){			
				console.log("Item: "+result[i].product_name);
				console.log("ID: "+result[i].item_id);
				console.log("Department: "+result[i].department_name);
				console.log("Price: $"+result[i].price);
				console.log("Stock: "+result[i].stock_quantity);
				console.log(" ");			
		}
		console.log("----------------------------------------------------------");

	});
}

function promptUser(){
	inquirer.prompt([
	    {
	      name: "id",
	      type: "input",
	      message: "Enter the ID (number) of the product you wish to purchase."

	    },
	    {
	        name: "quantity",
	        type: "input",
	        message: "Enter the amount of this item you wish to purchase."	        
      	}

	]).then(function(answer) {
		if(isNaN(answer.id) || isNaN(answer.quantity)){
			console.log("Error: Bad Input.");			
  			promptUser();
		}
      var query = "SELECT product_name, price, stock_quantity FROM items WHERE ?";
      connection.query(query, { item_id: answer.id }, function(err, res) {
	        if(err){
	        	console.log("Error.");
	        }
	        
	        if(answer.quantity>res[0].stock_quantity){
	        	console.log("Sorry, insufficient quantity.");	        	
  				promptUser();
	        }
	        else{
	        	
	        	connection.query(
				    "UPDATE items SET ? WHERE ?",
				    [
				      {
				        stock_quantity: res[0].stock_quantity-=answer.quantity
				      },
				      {
				        item_id: answer.id
				      }
				    ],
				    function(error, data) {
				      if(error){
				      	throw error;
				      }
				      console.log("Your order has been made!")
				      console.log("Your total is: "+(res[0].price)*answer.quantity);
			        	displayItems();
		  				promptUser();
				    }
				);
	        	
	        }

      });
    });

}