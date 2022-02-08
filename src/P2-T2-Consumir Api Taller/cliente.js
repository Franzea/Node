//const API_URL = 'http://localhost:3000/TOTALusuario';
const API_URL = 'http://localhost:3000/datosusuario?idUsuario=15';



/*
const xhr = new XMLHttpRequest();
function consume(){
    if(this.readuState == 4 && this.status ==200){  
        //0 = UNSET, no se ha llamado al metodo open
        //1 = OPENED; se ha llamado al metodo open
        //2 = HEADERS_RECIBED; Se esta llamando al metodo send
        //3 = LOADING; recibiendo respuesta
        //4= DONE, se ha completado la operacion
        const data = JSON.parse(this.response);
        const HT
    }
}

xhr.addEventListener("load", consume);
xhr.open("GET", '${API_URL}/users');
xhr.send();*/

fetch(API_URL,{
    
        method: 'GET',
        mode: 'cors',
        headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'}
})
  .then(response => response.json())
  .then(data => console.log(data));