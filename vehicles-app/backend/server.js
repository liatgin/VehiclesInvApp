const express = require('express');
const app = express();
var bodyParser  = require('body-parser');
const uuidv1 = require('uuid/v1');


var mysql = require("mysql");
//Database connection
app.use(function(req, res, next) {

    global.connection  = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "123123123",
        database: "vehiclesInventory"
    });
    connection.connect(function(err){
        if(err) {
            throw err;
        }
        console.log("connected");
    });
    next();
})

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/vehicles', function(req, res, next) {
	connection.query('SELECT * from vehicles', function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	  	}
  	});
});

app.post('/vehicle', function(req, res, next) {
    var currID;
    if(req.body.id) {
        currID = req.body.id;
    } else {
        currID = uuidv1();
    }
    connection.query(`INSERT INTO vehicles(
                                id,
                                name,
                                time_created,
                                car_type,
                                last_successful_connection)
                                VALUES(?, ?, ?, ?, ?)`,[currID , req.body.name, req.body.time_created, req.body.car_type, req.body.last_successful_connection], function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	  	}
  	});
});

app.put('/vehicle', function(req, res, next) {
   var updateQuery = `
        UPDATE vehicles 
        SET 
        name = ?,
        time_created = ?,
        car_type = ?, 
        last_successful_connection = ?
        WHERE id = ? `;
   connection.query(updateQuery, [req.body.name, req.body.time_created, req.body.car_type, req.body.last_successful_connection, req.body.id], function (error, results, fields) {
	  	if(error){
              res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
              console.log('error: ', error);
	  	} else {
              res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
            
	  	}
  	});
});

app.delete('/vehicle/:id', function(req, res, next) {
	connection.query(`DELETE FROM vehicles WHERE id = ?`, req.params.id, function (error, results, fields) {
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	  	}
  	});
});

app.listen(3000, () => console.log('Vehicles app listening on port 3000!'))