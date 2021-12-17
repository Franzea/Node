var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "proyectophp",
  password: "",
  port:"3307"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


var express = require('express');
var app = express();

app.get('/',function(req,res)
{
    let sql = "SELECT * from usuarios where ID_Usuario = 15";
    con.query(sql, function (err, result) {
      if (err) throw err;
    
      console.log("Result: " + JSON.stringify(result,null,2));
    });
});

var server=app.listen(5000,function() {});