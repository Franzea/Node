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
  const nombre = req.body.nombre;

  const sql = "UPDATE usuarios set  Telefono = "+tlf+", Email ='"+email+"', Nombre ='"+nombre+"' where ID_Usuario = "+id;

  datos.con.query(sql, function (err, result) {
    if (err) throw res.json({Estado: "ERROR", Error: "Alguno de los datos a modificar no es correcto"});

    console.log("Result: " + JSON.stringify(result,null,2));

    res.json({Estado: "OK"});
  });
});



//Crear usuario
app.post('/crear_usuario',function(req,res){

  const tlf = req.body.telefono;
  const email = req.body.email;
  const nombre = req.body.nombre;
  const pass = req.body.pass;

  const sql = "INSERT INTO usuarios(Contraseña, Nombre, Telefono, Email) VALUES ('"+pass+"', '"+nombre+"', '"+tlf+"',  '"+email+"')" ;
  console.log(sql);
  datos.con.query(sql, function (err, result) {
    if (err) {
      console.log(err.message)
      res.json({Estado: "ERROR", Error: err.message});
    }
    console.log("Result: " + JSON.stringify(result,null,2));

    res.json({Estado: "OK"});
  });
});



//Eliminar usuario
app.post('/eliminar_usuario', function (req,res) {

  const id = req.body.id_usuario;

  const sql = "delete from usuarios where ID_Usuario = "+id;

  datos.con.query(sql, function (err, result) {
    if (err) throw res.json({Estado: "ERROR", Error: "Alguno dato no es correcto"});

    console.log("Result: " + JSON.stringify(result,null,2));

    res.json({Estado: "OK" });
  });
});



//Modificar datos de un vehículo
app.post('/modificar_vehiculo',function(req,res){

  const id = req.body.id_vehiculo;
  const matricula = req.body.matricula;
  const marca = req.body.marca;
  const modelo = req.body.modelo;
  const fabricacion = req.body.fabricacion;

  const sql = "UPDATE vehiculos set  Matricula = '"+matricula+"', Marca ='"+marca+"', Modelo ='"+modelo+"', Año_fabricacion = "+fabricacion+" where ID_Vehiculo = "+id;

  datos.con.query(sql, function (err, result) {
    if (err) throw res.json({Estado: "ERROR", Error: "Alguno de los datos a modificar no es correcto"});

    console.log("Result: " + JSON.stringify(result,null,2));

    res.json({Estado: "OK"});
  });
});



//Crear vehículo
app.post('/crear_vehiculo',function(req,res){

  const matricula = req.body.matricula;
  const id_usu = req.body.id_usu;
  const marca = req.body.marca;
  const modelo = req.body.modelo;
  const fabricacion = req.body.fabricacion;

  const sql = "INSERT INTO vehiculos(Matricula, Id_usuario, Marca, Modelo, Año_fabricacion) VALUES ('"+matricula+"', "+id_usu+", '"+marca+"',  '"+modelo+"', "+fabricacion+")" ;
  console.log(sql);
  datos.con.query(sql, function (err, result) {
    if (err) {
      console.log(err.message)
      res.json({Estado: "ERROR", Error: err.message});
    }
    console.log("Result: " + JSON.stringify(result,null,2));

    res.json({Estado: "OK"});
  });
});



//Eliminar vehiculo
app.post('/eliminar_vehiculo', function (req,res) {

  const id = req.body.id_vehiculo;

  const sql = "delete from vehiculos where ID_Vehiculo = "+id;

  datos.con.query(sql, function (err, result) {
    if (err) throw res.json({Estado: "ERROR", Error: "Alguno dato no es correcto"});

    console.log("Result: " + JSON.stringify(result,null,2));

    res.json({Estado: "OK" });
  });
});



//Modificar datos de un servicio
app.post('/modificar_servicio',function(req,res){

  const id = req.body.id_servicio;
  const id_vehi = req.body.id_vehi;
  const nombre = req.body.nombre;
  const precio = req.body.precio;
  const tipo = req.body.tipo;
  const descripcion = req.body.descripcion;
  const fecha = req.body.fecha;

  const sql = "UPDATE servicios set  ID_vehiculo = "+id_vehi+", Nombre = '"+nombre+"', Precio ="+precio+", tipo_servicio ='"+tipo+"', descripcion ='"+descripcion+"', fecha = '"+fecha+"' where ID_Servicio = "+id;

  datos.con.query(sql, function (err, result) {
    if (err) throw res.json({Estado: "ERROR", Error: "Alguno de los datos a modificar no es correcto"});

    console.log("Result: " + JSON.stringify(result,null,2));

    res.json({Estado: "OK"});
  });
});



//
//Crear servicio
app.post('/crear_servicio',function(req,res){

  const id_vehi = req.body.id_vehi;
  const nombre = req.body.nombre;
  const precio = req.body.precio;
  const tipo = req.body.tipo;
  const descripcion = req.body.descripcion;
  const fecha = req.body.fecha;

  const sql = "INSERT INTO servicios(ID_vehiculo, Nombre, Precio, tipo_servicio, descripcion, fecha) VALUES ("+id_vehi+", '"+nombre+"', "+precio+", '"+tipo+"', '"+descripcion+"', '"+fecha+"')" ;
  console.log(sql);
  datos.con.query(sql, function (err, result) {
    if (err) {
      console.log(err.message)
      res.json({Estado: "ERROR", Error: err.message});
    }
    console.log("Result: " + JSON.stringify(result,null,2));

    res.json({Estado: "OK"});
  });
});



//Eliminar servicio
app.post('/eliminar_servicio', function (req,res) {

  const id = req.body.id_servicio;

  const sql = "delete from servicios where ID_Servicio = "+id;

  datos.con.query(sql, function (err, result) {
    if (err) throw res.json({Estado: "ERROR", Error: "Alguno dato no es correcto"});

    console.log("Result: " + JSON.stringify(result,null,2));

    res.json({Estado: "OK" });
  });
});



//Información de un usuario y su lista de vehículos en la misma llamada filtrando por ID de usuario
app.get('/filtrando_usuario_vehiculos', function (req,res) {

    const id = req.query.id_usuario;
    const sql = "select u.*, v.* from usuarios u join vehiculos v on u.ID_Usuario=v.id_usuario where u.ID_Usuario=" + id;

    datos.con.query(sql, function (err, result) {
      if (err) throw err;

      console.log("Result: " + JSON.stringify(result,null,2));

      res.json(result);
    });
});



//Información de un vehículo y su lista de servicios en la misma llamada filtrando por ID de usuario 
app.get ('/filtrando_vehiculos_servicios', function (req, res) {

  const id = req.query.id_usuario;
  const sql = "select v.*, s.* from vehiculos v join servicios s on v.ID_Vehiculo=s.ID_vehiculo where v.Id_usuario=" + id;

  datos.con.query(sql, function (err, result) {
    if (err) throw err;

      console.log("Result: " + JSON.stringify(result,null,2));

      res.json(result);
    });
});

var server = app.listen(5000,function(err,re) {});