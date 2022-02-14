function lista_usuarios() {

    const API_URL = 'http://localhost:5000/usuarios';
    api(API_URL);
}

function usuari_id() {
    
    var identificador = document.querySelector("input").value;
    const API_URL = 'http://localhost:5000/usuario?id_usuario='+identificador;
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
  .then(data => {let texto = "";

    if (api_url == "http://localhost:5000/usuarios") {
        
        var sudtitulo = document.createElement("h3");
        sudtitulo.textContent = "Usuarios Registrados";
        document.querySelectorAll("div")[1].appendChild(sudtitulo);
    } 
    else {

        var identificador = document.querySelector("input").value;

        var sudtitulo = document.createElement("h3");
        sudtitulo.textContent = "Usuario "+identificador;
        document.querySelectorAll("div")[1].appendChild(sudtitulo);
    }

    for (let i = 0; i<data.length; i++){

        var article = document.createElement("article");

        var parrafo = document.createElement("p");
        parrafo.textContent = "Nombre: "+data[i].Nombre+" / Teléfono: "+data[i].Telefono+" / Email: "+data[i].Email;
        article.appendChild(parrafo);

        document.querySelectorAll("div")[1].appendChild(article);
    }
    
    });
}
