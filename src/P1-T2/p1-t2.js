const datos = require('./conexion');

var express = require('express');
var app = express();



//Mostar lista de usuarios
app.get('/usuarios',function(req,res){

    const sql = "SELECT * from usuarios";

    datos.con.query(sql, function (err, result) {
      if (err) throw err;

      console.log("Result: " + JSON.stringify(result,null,2));

      res.json(result);
    });
}); 



//Mostar información de un usuario, filtrando por su ID
app.get('/usuario',function(req,res){

  const id = req.query.id_usuario;
  const sql = "SELECT * from usuarios where ID_Usuario = "+id;

  datos.con.query(sql, function (err, result) {
    if (err) throw err;

    console.log("Result: " + JSON.stringify(result,null,2));

    res.json(result);
  });
});



//Mostar lista de vehículos filtrando por ID de usuario
app.get('/vehiculos_usuario',function(req,res){

  const id = req.query.id_usuario;
  const sql = "SELECT * from vehiculos where Id_usuario = "+id;

  datos.con.query(sql, function (err, result) {
    if (err) throw err;

    console.log("Result: " + JSON.stringify(result,null,2));

    res.json(result);
  });
});



//Mostar Información de un vehículo filtrando por el ID del vehículo
app.get('/vehiculo',function(req,res){

  const id = req.query.id_vehiculo;
  const sql = "SELECT * from vehiculos where ID_Vehiculo = "+id;

  datos.con.query(sql, function (err, result) {
    if (err) throw err;

    console.log("Result: " + JSON.stringify(result,null,2));

    res.json(result);
  });
});



//Mostar lista de servicios filtrando por un ID de vehículo
app.get('/servicios_vehiculo',function(req,res){

  const id = req.query.id_vehiculo;
  const sql = "SELECT * from servicios where ID_vehiculo = "+id;

  datos.con.query(sql, function (err, result) {
    if (err) throw err;

    console.log("Result: " + JSON.stringify(result,null,2));

    res.json(result);
  });
});



//Mostar información de un servicio filtrando por el ID del servicio 
app.get('/servicio',function(req,res){

  const id = req.query.id_servicio;
  const sql = "SELECT * from servicios where ID_Servicio = "+id;

  datos.con.query(sql, function (err, result) {
    if (err) throw err;

    console.log("Result: " + JSON.stringify(result,null,2));

    res.json(result);
  });
});

var server = app.listen(5000,function(err,re) {});