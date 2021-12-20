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

/*app.get('/',function(req,res){

    let sql = "SELECT * from usuarios";
    con.query(sql, function (err, result) {
      if (err) throw err;
    
      console.log("Result: " + JSON.stringify(result,null,2));
    });
});*/

app.get('/usuario',function(req,res){

    const id = req.query.id_usuario;
    const sql = "SELECT * from usuarios where ID_Usuario = "+id;

    con.query(sql, function (err, result) {
      if (err) throw err;

      console.log("Result: " + JSON.stringify(result,null,2));

      res.json(result);
    });
});

app.post('/editUsuario',function(req,res){
  
  const id_usu = req.body.id_usu
  const name = req.body.nombre
  const email = req.body.email

  const sql = "update usuarios set nombre="+name+"set dni="+email

  con.query(sql,function() {
    
  })
})

var server = app.listen(5000,function(err,re) {});