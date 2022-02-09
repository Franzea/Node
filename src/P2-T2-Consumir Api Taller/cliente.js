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
  .then(data => console.log(data));
}
