var http = require('http');
fs = require('fs');


http.createServer(function(solicitud,respuesta){

    const { url } = solicitud;
    if (url === '/') {
        template='index.html'
      }
    else if(url === '/nosotros') {
        template='nosotros.html'
      }
    else if(url === '/servicios') {
        template='servicios.html'
      }
    else if(url === '/clientes') {
        template='nosotros.html'
      }
    else if(url === '/contacto') {
        template='nosotros.html'
      }

    fs.readFile('templates/'+template,function(error,html) {
    respuesta.write(html);
    respuesta.end();    
    });
    

    }).listen(8081);

