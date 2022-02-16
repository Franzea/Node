function vehiculo_id() {
    
    var identificador = document.querySelectorAll("input")[0].value;
    const API_URL = 'http://localhost:5000/vehiculo?id_vehiculo='+identificador;
    api(API_URL);
}

function servicios_vehi() {
    
    var identificador = document.querySelectorAll("input")[2].value;
    const API_URL = 'http://localhost:5000/servicios_vehiculo?id_vehiculo='+identificador;
    api(API_URL);
}



function api(api_url) {

    fetch(api_url,{
    
        method: 'GET',
        mode: 'cors',
        headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'}
})
  .then(response => response.json())
  .then(data => {

    var identificador = document.querySelector("input").value;
    
    //Mostramos los datos dependiendo de la consulta
    if (api_url == 'http://localhost:5000/vehiculo?id_vehiculo='+identificador) {
        
        //Creamos texto informativo
        var identificador = document.querySelector("input").value;

        var sudtitulo = document.createElement("h3");
        sudtitulo.textContent = "Vehiculo "+identificador;
        document.querySelectorAll("div")[1].appendChild(sudtitulo);


        for (let i = 0; i<data.length; i++){

            var article = document.createElement("article");
    
            var parrafo = document.createElement("p");
            parrafo.textContent = "Matricula: "+data[i].Matricula+" / Marca: "+data[i].Marca+" / Modelo: "+data[i].Modelo+" / Año_fabricacion: "+data[i].Año_fabricacion;
            article.appendChild(parrafo);
    
            document.querySelectorAll("div")[1].appendChild(article);
        }
    } 
    
    else {

        //Creamos texto informativo 
        var sudtitulo = document.createElement("h3");
        sudtitulo.textContent = "Servicios vehiculo "+identificador;
        document.querySelectorAll("div")[1].appendChild(sudtitulo);
        
        for (let i = 0; i<data.length; i++){

            var article = document.createElement("article");
    
            var parrafo = document.createElement("p");
            parrafo.textContent = "Nombre: "+data[i].Nombre+" / Precio: "+data[i].Precio+" € / tipo_servicio: "+data[i].tipo_servicio+" / descripcion: "+data[i].descripcion+" / fecha: "+data[i].fecha;
            article.appendChild(parrafo);
    
            document.querySelectorAll("div")[1].appendChild(article);
        }
    }
    
    });
}
