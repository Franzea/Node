const datos = require('./conexion');

var express = require('express');
const { reset } = require('nodemon');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



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



//Modificar datos de un usuario
app.post('/modificar_usuario',function(req,res){

  const id = req.body.id_usuario;
  const tlf = req.body.telefono;
  const email = req.body.email;

  const sql = "UPDATE usuarios set  Telefono = "+tlf+", Email ='"+email+"' where ID_Usuario = "+id;

  datos.con.query(sql, function (err, result) {
    if (err) throw res.json({Estado: "ERROR", Error: "Alguno de los datos a modificar no es correcto"});

    console.log("Result: " + JSON.stringify(result,null,2));

    res.json({Estado: "OK"});
  });
});

var server = app.listen(5000,function(err,re) {});