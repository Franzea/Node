function servicio_id() {
    
    var identificador = document.querySelectorAll("input")[0].value;
    const API_URL = 'http://localhost:5000/servicio?id_servicio='+identificador;
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

    //Creamos texto informativo según que consulta
    var sudtitulo = document.createElement("h3");
    sudtitulo.textContent = "Vehiculo "+identificador;
    document.querySelectorAll("div")[1].appendChild(sudtitulo);


    //Mostramos los datos dependiendo de la consulta
    for (let i = 0; i<data.length; i++){

        var article = document.createElement("article");
    
        var parrafo = document.createElement("p");
        parrafo.textContent = "Nombre: "+data[i].Nombre+" / Precio: "+data[i].Precio+" / tipo_servicio: "+data[i].tipo_servicio+" / descripcion: "+data[i].descripcion+" / fecha: "+data[i].fecha;
        article.appendChild(parrafo);
    
        document.querySelectorAll("div")[1].appendChild(article);
    }
    
    });
}
